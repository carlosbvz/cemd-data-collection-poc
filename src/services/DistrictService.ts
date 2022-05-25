function districtMapper(district) {
    return {
        id: district?.lea_id,
        name: district?.lea_name,
        address: district?.address,
        city: district?.city,
        logos: district?.logos,
        website: district?.website,
    };
}

export default class DistrictService {
    
    getDistricts() {
        return fetch('/api/cemd/districts?limit=100')
          .then(response => response.json())
          .then(data => data?.data)
          .then(data => {

            return {
              meta: data?.meta,
              results: data?.results?.map(districtMapper)
            }
          });
    }
}