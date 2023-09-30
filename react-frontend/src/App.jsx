import { Routes, Route } from "react-router-dom";
// Home Pages
import Home from "./pages/Home/Home";
import HomeLayout from "./pages/Home/Layout";
// Login pages
import Login from "./pages/LoginForm/Login";
import LoginLayout from "./pages/LoginForm/Layout";
import Register from "./pages/LoginForm/Register";
import ForgotPassword from "./pages/LoginForm/ForgotPassword";
import ResetPassword from "./pages/LoginForm/ResetPassword";
// Error page
import NotFoundPage from "./pages/NotFoundPage";
// Utils
import Wrapper from "./utils/Wrapper";
import ProtectedRoute from "./utils/ProtectedRoute";
const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/" element={<LoginLayout />}>
          <Route path="/" element={<ProtectedRoute isLoggedIn={false} />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
};
export default App;
