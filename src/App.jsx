import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Auth from "./componentsa/Auth";
import SuccesLogIn from "./pages/SuccesLogIn";
import Register from "./pages/Register";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Auth />}>
      <Route path="/succesLogIn" element={<SuccesLogIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
