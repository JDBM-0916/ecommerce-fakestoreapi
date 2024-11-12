export async function getInCategory(name: string) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${name}`
  );
  const data = await response.json();
  return data;
}
