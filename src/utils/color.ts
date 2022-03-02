import chroma from "chroma-js";

export const randomScaleColor = (
  scaleNumber: number,
  baseColor = chroma.random().hex()
) => {
  const baseChroma = chroma(baseColor);
  const colors = chroma
    .scale([baseChroma, baseChroma.darken()])
    .mode("lab")
    .correctLightness()
    .colors(scaleNumber);
  return colors;
};
