import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// pages
import { Home, Category, Cart } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./components/Layout/Layout";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // { index: true, element: <Home /> },
        { path: "category/:id", element: <Category /> },
        { path: "cart", element: <Cart /> },
        { path: "*", element: <Layout /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <RouterProvider router={routes}>
          <Layout />
          <Home />
        </RouterProvider> */}
      </Provider>
    </div>
  );
}

{
  /* <RouterProvider router={routes}>
  <Layout />
</RouterProvider> */
}
{
  /* <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/:id" element={<Category />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  <Footer />
</BrowserRouter> */
}
export default App;
