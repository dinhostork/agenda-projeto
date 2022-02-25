import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Main from "./pages/Main";
import { isAuthenticated } from './services/auth';

function PrivateOutlet() {
  const auth = isAuthenticated();
  return auth ? <Main /> : <Navigate to="/login" />;
}

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<PrivateOutlet />}>
          <Route element={<Main />} />
        </Route>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
  
  export default AppRoutes;