/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const {
    cart,
    totalAmountOfCart,
    setTotalAmountOfCart,
    handelRemoveFromCart,
  } = useContext(GlobalContext);

  useEffect(() => {
    setTotalAmountOfCart(cart.reduce((acc, curr) => acc + curr[0].price, 0));
  }, [cart]);
  // console.log(cart);
  // console.log(totalAmountOfCart);
  return (
    <div className="  w-full  px-8 py-2">
      <div className=" flex w-full justify-between items-center">
        <h1 className=" font-bold text-violet-500 text-4xl tracking-wider text-center  uppercase">
          Your Cart 🛒
        </h1>
        {cart.length > 0 ? (
          <div className="flex  gap-7 items-center mt-10 pb-10 font-bold text-violet-500 text-2xl tracking-wider   uppercase">
            Payeble Amount :{" "}
            <span className=" text-black">
              {totalAmountOfCart.toFixed(2)} $
            </span>
            <span className=" text-xl underline text-gray-600 font-bold hover:text-black">
              {`Click to Procced ->>`}
            </span>
          </div>
        ) : null}
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col w-full  gap-8 mt-10">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item[0]}
              handelRemoveFromCart={handelRemoveFromCart}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-screen w-full justify-center items-center font-bold tracking-wider text-2xl text-violet-900 gap-10">
          Your Cart is Empty Pleace Add Item ....
          <Link className=" underline" to="/">{`Home ->`}</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
