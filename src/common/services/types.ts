export type ErrorResponse = {
  time: string;
  result: string;
  from: string;
};

export type Pagination<ItemT> = {
  amountOfPages: number;
  currentPage: number;
  data: ItemT[];
};
