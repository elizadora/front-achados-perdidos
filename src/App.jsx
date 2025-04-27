import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3500} />
    </BrowserRouter>
  )
}

export default App;
