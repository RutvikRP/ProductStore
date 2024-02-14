/* eslint-disable react/prop-types */
function Product({ item, key, handelAddToCart, handelRemoveFromCart, cart }) {
  return (
    <div
      key={key}
      className=" flex flex-col bg-violet-100 w-full max-h-[500px] rounded-2xl pb-4 px-1 py-1 hover:-translate-y-1  shadow-sm shadow-violet-500 duration-1000"
    >
      <div className="">
        <img
          src={item?.images[0]}
          alt="Product_Image"
          className="  h-80 w-full rounded-2xl object-cover"
        />
      </div>
      <span className=" text-black-200 font-bold text-xl truncate">
        {item.title}
      </span>
      <div className=" flex  items-center justify-between text-violet-700 font-bold text-2xl truncate">
        <div>
          {item.price} <span className="text-violet-500 text-xl">$</span>
        </div>
        <span className="text-black-500  text-base font-semibold">
          {item.rating} ⭐
        </span>
      </div>
      <span className="bg-black-950 rounded-full py-1 px-2  w-28 text-xs text-center mt-2 shadow-md shadow-black-700 ml-auto text-black-400">
        {item.category}
      </span>
      <div>
        {/* <button
          onClick={() => handelAddToCart(item.id)}
          className="bg-violet-500 text-gray-950 mt-8 w-full py-2 px-4 rounded-2xl hover:bg-violet-700 hover:text-violet-100"
        ></button> */}
        <button
          onClick={
            cart.filter((citem) => citem[0].id === item.id).length > 0
              ? () => handelRemoveFromCart(item.id)
              : () => handelAddToCart(item.id)
          }
          className="bg-violet-500 text-gray-950 mt-8 w-full py-2 px-4 rounded-2xl hover:bg-violet-700 hover:text-violet-100"
        >
          {cart.filter((citem) => citem[0].id === item.id).length > 0
            ? "Remove From Cart "
            : "Add To Cart 🛒"}
        </button>
      </div>
    </div>
  );
}

export default Product;
