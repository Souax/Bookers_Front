import { ApiResponse } from "../types/types";

/* 新刊書の取得 */
export const getNewBooks = async (page: number = 1): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/newbook`, {
    next: { revalidate: 1800 },
  });
  const newbooks = await res.json();
  return newbooks;
};

/* 人気技術書の取得 */
export const getPopularityBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/popularity?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const popularitybooks = await res.json();
  return popularitybooks;
};

export const getPopularityAllBooks = async (
  page: number = 1
): Promise<ApiResponse> => {
  const res = await fetch(
    `http://localhost:3001/api/v1/popularity?page=${page}`,
    {
      next: { revalidate: 1800 },
    }
  );
  const popularityallbooks = await res.json();
  return popularityallbooks;
};

/* おすすめ技術書の取得 */
export const getRecommendationBooks = async (): Promise<ApiResponse> => {
  const res = await fetch(`http://localhost:3001/api/v1/recommendation`, {
    next: { revalidate: 1800 },
  });
  const recommendationbooks = await res.json();
  return recommendationbooks;
};
