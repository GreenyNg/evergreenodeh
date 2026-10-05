export type Metric = {
  value: string;
  label: string;
  accent: string;
};

export const metrics: Metric[] = [
  { value: "4+", label: "Years in product design", accent: "#c8b4e8" },
  { value: "20+", label: "Founders worked with", accent: "#a8d0b8" },
  { value: "100+", label: "Designers mentored", accent: "#f0b8a0" },
  { value: "15+", label: "Gaps walked into", accent: "#a8c0e8" },
  { value: "6+", label: "Talks given", accent: "#e8b8d0" },
];