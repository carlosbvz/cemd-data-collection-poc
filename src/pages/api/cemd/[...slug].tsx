/**
 * Takes: grade_level=HS,MS&state=AL&feature=asian,black
 * Returns: grade_level=HS&grade_level=MS&state=AL&feature=asian&feature=black
 */
function addKeysToMultipleValues(paramsArray) {
  const queryArray = [];
  paramsArray
    .map((param) => param.split("="))
    .forEach((t) => {
      const [key, value] = t;
      const values = value.split(",");
      values.forEach((v) => {
        queryArray.push(`${key}=${v}`);
      });
    });
  return queryArray.join("&");
}

function getQueryStringFromObject(rawQuery) {
  const queryArray = [];
  for (const key in rawQuery) {
    if (rawQuery.hasOwnProperty(key)) {
      if (key !== "slug") {
        const values = rawQuery[key];
        const uniqueValues = Array.isArray(values)
          ? Array.from(new Set(values))
          : values;
        queryArray.push(`${key}=${uniqueValues}`);
      }
    }
  }
  const queryString = addKeysToMultipleValues(queryArray);
  return queryString ? `?${queryString}` : "";
}

export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    const slugQuery = slug.join("/");
    const paramsQuery = getQueryStringFromObject(req.query);

    if (!slugQuery) {
      res.status(400).send("Not Found");
    } else {
      const url = `https://cemd-api.fastshipyard.com/${slugQuery}${paramsQuery}`;
      const fetchedData = await fetch(url);
      const fetchStatus = fetchedData?.status;
      if (fetchStatus === 200) {
        const apiData = await fetchedData.json();
        res.status(200).json({ data: apiData });
      } else {
        res.status(fetchStatus).send(`Error fetching data: ${fetchStatus}`);
      }
    }
  } catch (error) {
    res
      .status(error?.statusCode || 500)
      .json(error?.message || "Internal Server Error");
  }
}
