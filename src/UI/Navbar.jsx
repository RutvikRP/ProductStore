import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { cart, search, setSearch, handelSubmit, setLoggedIn } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-8 py-8 border-b-2 border-violet-400 bg-violet-200 ">
      <h1 className=" font-bold text-4xl text-violet-700 hover:text-gray-950">
        <Link to="/">
          Product
          <span className=" text-gray-950 hover:text-violet-700">Store</span>
        </Link>
      </h1>
      <div>
        <form
          onSubmit={(e) => {
            handelSubmit(e), navigate("/");
          }}
        >
          <input
            type="text"
            placeholder="Enter product name here"
            className=" bg-white/75 shadow-xl text-violet-400 rounded-full px-2 py-2 w-96 outline-violet-100 shadow-violet-100 hover:shadow-violet-200 placeholder:text-center placeholder:text-violet-500/50 border-2 border-violet-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className=" text-violet-600  flex  items-center  gap-10 font-semibold">
        <Link to="/" className="hover:text-violet-800">
          Home
        </Link>
        <button
          className="hover:text-violet-800"
          onClick={() => {
            localStorage.removeItem("token");
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
        <Link
          to="/cart"
          className="relative hover:text-violet-800 border-solid border-violet-400 border-2 rounded-full py-1 px-4"
        >
          Cart 🛒
          {cart.length ? (
            <span className="absolute -top-4  -right-2 border-solid border-violet-400 border-2 bg-violet-400 px-[8px] py-[4px] rounded-full text-violet-200 ml-2 text-xs">
              {cart.length}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
