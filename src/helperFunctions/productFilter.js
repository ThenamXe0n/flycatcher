exports.filterProduct = (products,filter) => {
  let filteredProducts = products.filter((product) =>
    filter.includes(product.category)
  );
  return filteredProducts;
};
