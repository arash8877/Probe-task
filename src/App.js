import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Trial from "./pages/Trial";
import { AuthProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="trial" element={<Trial />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
