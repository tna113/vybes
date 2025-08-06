// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type GetRequest<ResponseType, QueryParams = undefined> = {
  endpoint: string;
  mapToURLSearchParams?: (data: QueryParams) => URLSearchParams;
};
