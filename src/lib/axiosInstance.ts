export const fetcher = (
  url: string,
  options: { revalidate?: number } = {}
): Promise<{ data: any }> => {
  const revalidate = options.revalidate || 10;

  const expires = new Date(Date.now() + revalidate * 100);

  return fetch(url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      return data;
    });
};
