import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import AppRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
