import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage() {
  const response = await fetch('https://didactic-spork-qv5rg559vw73xgq9-3000.app.github.dev/api/users/2/cart', {
    cache: 'no-cache',
  });
  const cartProducts = await response.json();

  return (
    <ShoppingCartList initialCartProducts={cartProducts} />
  );
}