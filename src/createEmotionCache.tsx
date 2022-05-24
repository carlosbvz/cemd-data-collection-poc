import createCache from "@emotion/cache";

/**
 * @internal
 * @hidden
 * @return {EmotionCache}
 */
export default function createEmotionCache() {
  return createCache({ key: "css" });
}
