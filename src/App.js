import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TrialDetails from "./components/trialDetails/TrialDetails";
import { TrialProvider } from "./contexts/TrialContext";
import { AuthProvider } from "./contexts/AuthContext";
import Trials from "./pages/trial/Trials";
import Profile from "./pages/profile/Profile";
import { FavoriteProvider } from "./contexts/FavContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TrialProvider>
          <FavoriteProvider>
            <Routes>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="trials" element={<Trials />} />
              <Route path="trials/:nctId" element={<TrialDetails />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </FavoriteProvider>
        </TrialProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
