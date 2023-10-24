import { Navigate, Routes, Route } from "react-router-dom";
import { MainDashboard } from "../views/mainDashboard/MainDashboard";
import { Index } from '../views/index/Index'
import { Admin } from '../views/admin/Admin'
import { About } from '../views/about/About'
import { Contact } from '../views/contact/Contact'
import { Home } from '../views/home/Home'
import { Login } from '../views/login/Login';
import { Logup } from '../views/logup/Logup'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<MainDashboard />}>
        <Route path="index" element={<Index />} />
        <Route path='admin' element={<Admin />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
        <Route path='logup' element={<Logup />} />
        <Route path='' element={<Navigate to='index' replace />} />
      </Route>
    </Routes>
  );
};

