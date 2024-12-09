import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import MainLayout from "./Layout/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Equipments from "./pages/Equipments";
import Private from "./components/Private/Private";
import AddEquipment from "./pages/AddEquipment";
import MyEquipments from "./pages/MyEquipments";
import Details from "./pages/Details";
import Update from "./pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://equisports-server-side.vercel.app/equipments")
      },
      {
        path: "/equipments",
        element: <Equipments></Equipments>,
        loader: () => fetch("https://equisports-server-side.vercel.app/equipments")
      },
      {
        path: "/addEquipment",
        element: <Private><AddEquipment></AddEquipment></Private>
      },
      {
        path: "/updateProduct/:id",
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => fetch(`https://equisports-server-side.vercel.app/equipments/${params.id}`)
      },
      {
        path: "/myEquipments",
        element: <Private><MyEquipments></MyEquipments></Private>,
        loader: () => fetch("https://equisports-server-side.vercel.app/equipments")
      },
      {
        path: "/details/:id",
        element: <Private><Details></Details></Private>,
        loader: ({ params }) => fetch(`https://equisports-server-side.vercel.app/equipments/${params.id}`)
      },

    ]
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
]);

export default router; 
