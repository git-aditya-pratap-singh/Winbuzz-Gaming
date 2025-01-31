
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import router from "./app/_routes/app.routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <RouterProvider router={router} />
    </>
  )
}
export default App;
