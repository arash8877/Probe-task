import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Trials from "./pages/Trials";
import TrialDetails from "./components/TrialDetails";
import { TrialProvider } from "./contexts/TrialContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TrialProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="trials" element={<Trials />} />
            <Route path="trials/:nctId" element={<TrialDetails />} />
          </Routes>
        </TrialProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
