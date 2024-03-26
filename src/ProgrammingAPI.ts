import { ApiResponse, BookType } from "../types/types";

/* JavaScriptの取得 */
export const getJavaScriptBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/javascript?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const javascriptbooks = await res.json();
  return javascriptbooks;
};

/* TypeScriptの取得 */
export const getTypeScriptBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/typescript?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const typescriptbooks = await res.json();
  return typescriptbooks;
};

/* Javaの取得 */
export const getJavaBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/java?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const javabooks = await res.json();
  return javabooks;
};

/* Rubyの取得 */
export const getRubyBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/ruby?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const rubybooks = await res.json();
  return rubybooks;
};

/* Pythonの取得 */
export const getPythonBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/python?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const pythonbooks = await res.json();
  return pythonbooks;
};

/* Goの取得 */
export const getGoBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/go?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const gobooks = await res.json();
  return gobooks;
};

/* PHPの取得 */
export const getPhpBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/php?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const phpbooks = await res.json();
  return phpbooks;
};

/* Reactの取得 */
export const getReactBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/react?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const reactbooks = await res.json();
  return reactbooks;
};

/* Vueの取得 */
export const getVueBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/vue?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const vuebooks = await res.json();
  return vuebooks;
};

/* Next.jsの取得 */
export const getNextBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/nextjs?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const nextbooks = await res.json();
  return nextbooks;
};

/* Nuxt.jsの取得 */
export const getNuxtBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/nuxtjs?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const nuxtbooks = await res.json();
  return nuxtbooks;
};

/* Laravelの取得 */
export const getLaravelBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/laravel?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const laravelbooks = await res.json();
  return laravelbooks;
};

/* jQueryの取得 */
export const getJqueryBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/jquery?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const jquerybooks = await res.json();
  return jquerybooks;
};

/* Railsの取得 */
export const getRailsBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/rails?page=${page}`, {
    next: { revalidate: 1800 },
  });
  const railsbooks = await res.json();
  return railsbooks;
};
