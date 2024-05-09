import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import ResMenu from "./Components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import reduxStore from "./Utils/reduxStore";
import Cart from "./Components/Cart";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //suppose this, this make's an API call and fetches the userInformation for authentication
  useEffect(() => {
    const userData = {
      name:"Roshan Pawar",
    };
    setUserName(userData.name);
  },[]);

  return (
    <Provider store={reduxStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
      </UserContext.Provider>
    </Provider>
    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
