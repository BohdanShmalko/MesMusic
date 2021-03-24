export const cutText = (howMatch: number) => (text: string) => {
  if (text.length < howMatch) return text;
  return text.slice(0, howMatch) + "...";
};
