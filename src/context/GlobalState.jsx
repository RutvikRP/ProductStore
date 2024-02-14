/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
function GlobalState({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [totalAmountOfCart, setTotalAmountOfCart] = useState(0);
  const [backToAll, setBackToAll] = useState(false);

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const data = await res.json();
      console.log(data);
      if (data && data.products) {
        setProductList(data.products);
        setLoading(false);
        setSearch("");
        setBackToAll(true);
      }
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setLoading(false);
      setSearch("");
    }
  }
  function handelFilter(type) {
    let dummyList;

    if (type === "") {
      setProductList([]);
    }
    if (type === "low-high") {
      dummyList = [...productList];
      dummyList.sort((a, b) => a.price - b.price);
      setProductList(dummyList);
    }
    if (type === "high-low") {
      dummyList = [...productList];
      dummyList.sort((a, b) => b.price - a.price);
      setProductList(dummyList);
    }
  }
  function handelAddToCart(id) {
    setCart([...cart, productList.filter((item) => item.id === id)]);
  }
  function handelRemoveFromCart(id) {
    setCart((cart) => cart.filter((item) => item[0].id !== id));
  }
  console.log(cart);
  return (
    <GlobalContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        username,
        setUsername,
        password,
        setPassword,
        handelSubmit,
        search,
        setSearch,
        loading,
        setLoading,
        error,
        setError,
        productList,
        setProductList,
        handelAddToCart,
        cart,
        setCart,
        totalAmountOfCart,
        setTotalAmountOfCart,
        handelRemoveFromCart,
        backToAll,
        setBackToAll,
        handelFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
