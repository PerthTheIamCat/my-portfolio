export interface Project {
  slug: string;
  name: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "moneymind",
    name: "MoneyMind",
    description:
      "A personal finance mobile app for tracking income, expenses, and budgeting.",
  },
  {
    slug: "kupon-v1",
    name: "KUpon",
    description:
      "A digital food-coupon exchange system built to reduce waste and support sustainability.",
  },
];
