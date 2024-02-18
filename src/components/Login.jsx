/* eslint-disable react/prop-types */
// Login.js
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Login = ({ setLoggedIn }) => {
  const { username, setUsername, password, setPassword } =
    useContext(GlobalContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        alert(`use username is = kminchelle\nuse password = 0lelplR`);
        throw new Error("Login failed");
      }

      const data = await response.json();
      const token = data.token;

      // Save token to local storage
      localStorage.setItem("token", token);

      // Set logged in state
      setLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  console.log(username, password);
  return (
    <div className=" flex justify-center items-center h-screen w-full">
      <div className=" flex flex-col w-[28%] h-[56%]  items-center bg-violet-200 rounded-md py-4 px-4">
        <h1 className=" font-bold text-4xl text-violet-700 hover:text-gray-950">
          Product
          <span className=" text-gray-950 hover:text-violet-700">Store</span>
        </h1>
        <form
          onSubmit={handleLogin}
          className=" flex flex-col w-full text-violet-950 mt-8 gap-8"
        >
          <div className=" flex flex-col gap-4">
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium "
            >
              User Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 /"
              placeholder="userName"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className=" flex flex-col gap-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              User Name
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 /"
              placeholder="userName"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className=" font-bold px-1 py-2 rounded-full bg-violet-700 text-violet-200 hover:bg-violet-800 hover:text-violet-400 mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
