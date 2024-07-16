export type ApiResponse<TResponse> = TResponse & ErrorResponse;

export type ErrorResponse = {
  time: string;
  result: string;
  from: string;
  status: number;
};

export type Pagination<ItemT> = {
  amountOfPages: number;
  currentPage: number;
  data: ItemT[];
};
