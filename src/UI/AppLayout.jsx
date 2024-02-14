import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import Login from "../components/Login";
import { GlobalContext } from "../context/GlobalState";
function AppLayout() {
  const { loggedIn, setLoggedIn } = useContext(GlobalContext);
  useEffect(() => {
    // Check if the user is already logged in (token exists in local storage)
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div>
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default AppLayout;
{
  /* <div>
  
    </div> */
}
