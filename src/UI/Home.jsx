/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
function Home() {
  const {
    loading,
    setLoading,
    error,
    setError,
    productList,
    setProductList,
    handelAddToCart,
    handelRemoveFromCart,
    cart,
    setBackToAll,
    handelFilter,
    backToAll,
  } = useContext(GlobalContext);
  async function fetchProduct() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data.products);
      if (data.products) {
        setProductList(data.products);
        setLoading(false);
      }
      setBackToAll(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    productList.length === 0 ? fetchProduct() : null;
  }, [productList]);
  const navigate = useNavigate();
  return (
    <div>
      {productList ? (
        <div className=" flex flex-col gap-5 rounded-full">
          <div className="flex w-full justify-between">
            <select
              className="ml-8 mt-5 -mb-4 bg-violet-100 border border-violet-200 text-violet-900 text-sm  rounded-xl focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5  max-w-44 "
              onChange={(e) => handelFilter(e.target.value)}
            >
              <option value="">No Filter Apply</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
            {backToAll ? (
              <button
                className="mr-8 mt-5 -mb-4 text-violet-600  flex  items-center  gap-10 font-semibold underline hover:text-violet-800 "
                onClick={() => {
                  setProductList([]), navigate("/");
                }}
              >
                {`back to All item ->`}
              </button>
            ) : null}
          </div>
          <div className="  py-8 px-4 w-full min-h-screen grid grid-cols-4 gap-10">
            {productList.map((item) => (
              <Product
                item={item}
                key={item.id}
                handelAddToCart={handelAddToCart}
                handelRemoveFromCart={handelRemoveFromCart}
                cart={cart}
              />
            ))}
          </div>
        </div>
      ) : loading ? (
        <h1 className=" mt-96 text-4xl text-violet-400 font-bold tracking-wider">
          Loading is On Going....
        </h1>
      ) : (
        <h1>{`Error:${error}`}</h1>
      )}
    </div>
  );
}

export default Home;
