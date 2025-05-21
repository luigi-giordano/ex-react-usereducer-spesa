import { useState } from "react";

const App = () => {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);
  console.log(addedProducts);

  const addToCart = (product) => {
    const isProduct = addedProducts.some(p => p.name === product.name);
    if (isProduct) {
      return;
    }
    const productAdded = {
      ...product,
      quantity: 1
    }
    setAddedProducts(curr => [...curr, productAdded])
  }

  return (
    <>
      <h1>Prodotti da acquistare</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} {p.price.toFixed(2)}€</p>
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
