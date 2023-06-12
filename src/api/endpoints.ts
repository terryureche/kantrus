/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Kantrus
 * Kantrus Server
 * OpenAPI spec version: 1.0.0
 */
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import type {
  User,
  HTTPValidationError,
  UserCreate,
  UserUpdate,
} from "./model";

/**
 * Get all the users
 * @summary Get All Items
 */
export const getAllItemsUserGet = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<User[]>> => {
  return axios.get(`/user/`, options);
};

export const getGetAllItemsUserGetQueryKey = () => [`/user/`] as const;

export const getGetAllItemsUserGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllItemsUserGet>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getAllItemsUserGet>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryOptions<
  Awaited<ReturnType<typeof getAllItemsUserGet>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetAllItemsUserGetQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAllItemsUserGet>>
  > = ({ signal }) => getAllItemsUserGet({ signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions };
};

export type GetAllItemsUserGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllItemsUserGet>>
>;
export type GetAllItemsUserGetQueryError = AxiosError<unknown>;

/**
 * @summary Get All Items
 */
export const useGetAllItemsUserGet = <
  TData = Awaited<ReturnType<typeof getAllItemsUserGet>>,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getAllItemsUserGet>>,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAllItemsUserGetQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Create a new User
 * @summary Create Item
 */
export const createItemUserPost = (
  userCreate: UserCreate,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<User>> => {
  return axios.post(`/user/`, userCreate, options);
};

export const getCreateItemUserPostMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createItemUserPost>>,
    TError,
    { data: UserCreate },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createItemUserPost>>,
  TError,
  { data: UserCreate },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createItemUserPost>>,
    { data: UserCreate }
  > = (props) => {
    const { data } = props ?? {};

    return createItemUserPost(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateItemUserPostMutationResult = NonNullable<
  Awaited<ReturnType<typeof createItemUserPost>>
>;
export type CreateItemUserPostMutationBody = UserCreate;
export type CreateItemUserPostMutationError = AxiosError<HTTPValidationError>;

/**
 * @summary Create Item
 */
export const useCreateItemUserPost = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createItemUserPost>>,
    TError,
    { data: UserCreate },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getCreateItemUserPostMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Get the user by id
 * @summary Get Item
 */
export const getItemUserUserIdGet = (
  userId: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<User>> => {
  return axios.get(`/user/${userId}`, options);
};

export const getGetItemUserUserIdGetQueryKey = (userId: string) =>
  [`/user/${userId}`] as const;

export const getGetItemUserUserIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getItemUserUserIdGet>>,
  TError = AxiosError<HTTPValidationError>
>(
  userId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getItemUserUserIdGet>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getItemUserUserIdGet>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetItemUserUserIdGetQueryKey(userId);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getItemUserUserIdGet>>
  > = ({ signal }) => getItemUserUserIdGet(userId, { signal, ...axiosOptions });

  return { queryKey, queryFn, enabled: !!userId, ...queryOptions };
};

export type GetItemUserUserIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getItemUserUserIdGet>>
>;
export type GetItemUserUserIdGetQueryError = AxiosError<HTTPValidationError>;

/**
 * @summary Get Item
 */
export const useGetItemUserUserIdGet = <
  TData = Awaited<ReturnType<typeof getItemUserUserIdGet>>,
  TError = AxiosError<HTTPValidationError>
>(
  userId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getItemUserUserIdGet>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetItemUserUserIdGetQueryOptions(userId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Update the user based on the user_id
 * @summary Update Item
 */
export const updateItemUserUserIdPut = (
  userId: string,
  userUpdate: UserUpdate,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<User>> => {
  return axios.put(`/user/${userId}`, userUpdate, options);
};

export const getUpdateItemUserUserIdPutMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateItemUserUserIdPut>>,
    TError,
    { userId: string; data: UserUpdate },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateItemUserUserIdPut>>,
  TError,
  { userId: string; data: UserUpdate },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateItemUserUserIdPut>>,
    { userId: string; data: UserUpdate }
  > = (props) => {
    const { userId, data } = props ?? {};

    return updateItemUserUserIdPut(userId, data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateItemUserUserIdPutMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateItemUserUserIdPut>>
>;
export type UpdateItemUserUserIdPutMutationBody = UserUpdate;
export type UpdateItemUserUserIdPutMutationError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Update Item
 */
export const useUpdateItemUserUserIdPut = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateItemUserUserIdPut>>,
    TError,
    { userId: string; data: UserUpdate },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getUpdateItemUserUserIdPutMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * Delete the user by id
 * @summary Delete Item
 */
export const deleteItemUserUserIdDelete = (
  userId: string,
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.delete(`/user/${userId}`, options);
};

export const getDeleteItemUserUserIdDeleteMutationOptions = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteItemUserUserIdDelete>>,
    TError,
    { userId: string },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteItemUserUserIdDelete>>,
  TError,
  { userId: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteItemUserUserIdDelete>>,
    { userId: string }
  > = (props) => {
    const { userId } = props ?? {};

    return deleteItemUserUserIdDelete(userId, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteItemUserUserIdDeleteMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteItemUserUserIdDelete>>
>;

export type DeleteItemUserUserIdDeleteMutationError =
  AxiosError<HTTPValidationError>;

/**
 * @summary Delete Item
 */
export const useDeleteItemUserUserIdDelete = <
  TError = AxiosError<HTTPValidationError>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteItemUserUserIdDelete>>,
    TError,
    { userId: string },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getDeleteItemUserUserIdDeleteMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Generate Openapi Definition
 */
export const generateOpenapiDefinitionGenerateOpenAPIDefinitionGet = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<unknown>> => {
  return axios.get(`/generateOpenAPIDefinition`, options);
};

export const getGenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryKey =
  () => [`/generateOpenAPIDefinition`] as const;

export const getGenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryOptions =
  <
    TData = Awaited<
      ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
    >,
    TError = AxiosError<unknown>
  >(options?: {
    query?: UseQueryOptions<
      Awaited<
        ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
      >,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  }): UseQueryOptions<
    Awaited<
      ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
    >,
    TError,
    TData
  > & { queryKey: QueryKey } => {
    const { query: queryOptions, axios: axiosOptions } = options ?? {};

    const queryKey =
      queryOptions?.queryKey ??
      getGenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryKey();

    const queryFn: QueryFunction<
      Awaited<
        ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
      >
    > = ({ signal }) =>
      generateOpenapiDefinitionGenerateOpenAPIDefinitionGet({
        signal,
        ...axiosOptions,
      });

    return { queryKey, queryFn, ...queryOptions };
  };

export type GenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryResult =
  NonNullable<
    Awaited<
      ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
    >
  >;
export type GenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryError =
  AxiosError<unknown>;

/**
 * @summary Generate Openapi Definition
 */
export const useGenerateOpenapiDefinitionGenerateOpenAPIDefinitionGet = <
  TData = Awaited<
    ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
  >,
  TError = AxiosError<unknown>
>(options?: {
  query?: UseQueryOptions<
    Awaited<
      ReturnType<typeof generateOpenapiDefinitionGenerateOpenAPIDefinitionGet>
    >,
    TError,
    TData
  >;
  axios?: AxiosRequestConfig;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions =
    getGenerateOpenapiDefinitionGenerateOpenAPIDefinitionGetQueryOptions(
      options
    );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};