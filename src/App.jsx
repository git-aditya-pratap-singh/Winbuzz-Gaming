
import { RouterProvider } from "react-router-dom";
import router from "./app/_routes/api.routes";


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
