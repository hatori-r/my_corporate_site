import { GetRequest } from 'microcms-js-sdk/dist/cjs/types';

export type Client = {
  get: <T>({
    endpoint,
    contentId,
    queries,
    useGlobalDraftKey,
  }: GetRequest) => Promise<T>;
};
