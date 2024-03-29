export function fetchAllProducts(filter,sort,pagination,admin) {
  let queryString = "";
  for (let key in filter) {
    const categoryValue = filter[key];
    if (categoryValue.length) {
      const lastCategoryValue = categoryValue[categoryValue.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    const sortValue = sort[key];
    queryString += `${key}=${sortValue}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  if (admin) {
    queryString += `admin=true`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/api/product/allproducts?" + queryString
    );
    const data = await response.json();
    resolve({ data: { product: data.product, totalItems: data.totalProducts } });
  });
}
