import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TrialDetails from "./components/trialDetails/TrialDetails";
import { TrialProvider } from "./contexts/TrialContext";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Trials from "./pages/trial/Trials";
import Profile from "./pages/profile/Profile";
import { FavoriteProvider } from "./contexts/FavContext";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const { userId } = useContext(AuthContext);
  return (
    <TrialProvider>
      <FavoriteProvider>
        <Routes>
          <Route index element={userId ? <Trials /> : <Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {userId && (
            <>
              <Route path="trials" element={<Trials />} />
              <Route path="trials/:nctId" element={<TrialDetails />} />
              <Route path="profile" element={<Profile />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoriteProvider>
    </TrialProvider>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default WrappedApp;
