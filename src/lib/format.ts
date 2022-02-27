export const formatToShortNumber = (value: number): string => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(value);
};

export const formatToShortMonthlyDate = (value: string): string => {
  const date = new Date(value);
  const yearString = date.getFullYear();
  const monthString = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${yearString}-${monthString}`;
};
