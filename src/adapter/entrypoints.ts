/**
 * entrypoint
 * @param path
 * @param params
 */
export const entrypoints = (path: string, params?: string): string => {
  return `http://localhost:3000/${path}?${params}`;
};
