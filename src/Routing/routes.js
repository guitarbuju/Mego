import MainLayout from "../components/mainLayout/MainLayout.jsx";
import Home from "../pages/home/Home.jsx";
import Toys from "../pages/toys/Toys.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Checkout from "../pages/checkout/Checkout.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import Spinner from "../../src/components/spinner/Spinner.jsx";


const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/toys",
        Component: Toys,
      },

      {
        path: "/detail",
        Component: Detail,
      },

      {
        path: "/checkout",
        Component: Checkout,
      },
      {
        path: "/spinner",
        Component: Spinner,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
];
export default routes;
