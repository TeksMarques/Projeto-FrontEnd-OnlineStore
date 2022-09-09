export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const object = await response.json();
  return object;
}

export async function getProductById(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const categories = await response.json();
  return categories;
}
