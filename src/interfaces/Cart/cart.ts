export type Cart = {
  id: number;
  userId: number;
  date: string;
  products: { productId: number; quantity: number }[];
};

export type FilterOptions = {
  startDate: string;
  endDate: string;
  limit: string;
  sort: "asc" | "desc";
};
