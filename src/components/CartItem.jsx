/* eslint-disable react/prop-types */
function CartItem({ item, key, handelRemoveFromCart }) {
  return (
    <div
      key={key}
      className=" flex gap-10  bg-violet-100 w-full     rounded-2xl pb-4 px-1 py-1 hover:-translate-y-1  shadow-sm shadow-violet-500 duration-1000"
    >
      <div className="flex w-[40%]">
        <img
          src={item?.images[0]}
          alt="Product_Image"
          className="  h-80 w-full rounded-2xl object-cover"
        />
      </div>
      <div className=" flex flex-col justify-between w-[60%] ">
        <span className=" text-black-200 font-bold text-4xl truncate">
          {item.title}
        </span>
        <div className=" flex   text-violet-700 font-bold text-4xl truncate">
          {item.price} <span className="text-violet-500 text-xl">$</span>
        </div>
        <span className="text-black-500  font-semibold text-2xl">
          {item.rating} ⭐
        </span>
        <span className="bg-black-950 rounded-full py-1 px-2  w-28 text-xs text-center mt-2 shadow-md shadow-black-700 text-black-400">
          {item.category}
        </span>
        <div className=" ">
          <button
            onClick={() => handelRemoveFromCart(item.id)}
            className="bg-violet-600 text-violet-100 font-semibold mt-8 w-full py-2 px-4 rounded-2xl hover:bg-violet-700 hover:text-green-100"
          >
            Remove From Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
