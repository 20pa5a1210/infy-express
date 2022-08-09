import { useState, createContext } from "react";
import { Home } from "./assets/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./assets/RegisterPage/RegisterPage";
import LoginPage from "./assets/LoginPage/LoginPage";
import Profile from "./assets/Profile";
import ServiceList from "./assets/SevicesPage/ServiceList";
import SingleService from "./assets/SevicesPage/SingleService";
export const store = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/myProfile" element={<Profile />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/services/:Id" element={<SingleService />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
