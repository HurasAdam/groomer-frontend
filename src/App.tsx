import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";
import OurTeamPage from "./pages/OurTeamPage";
import OurStoryPage from "./pages/OurStoryPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyReservations from "./pages/MyReservations";
import ServiceDetails from "./pages/ServiceDetails";
import { Toaster } from "react-hot-toast";
import ManagerLayout from "./Layout/ManagerLayout";
import Dashboard from "./pages/Manager/Dashboard";
import Reservations from "./pages/Manager/Reservations";
import Services from "./pages/Manager/Services";
import Employees from "./pages/Manager/Employees";
import Customers from "./pages/Manager/Customers";
import NewService from "./pages/Manager/views/NewService";
import EditService from "./pages/Manager/views/EditService";
import EmployeeDetails from "./pages/Manager/views/EmployeeDetails";

const App = () => {
  return (
    <main className=" h-screen w-full">
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/*" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/our-team" element={<OurTeamPage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/services/service/:id" element={<ServiceDetails />} />
            <Route path="/my-reservations" element={<MyReservations/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/404" element={<ErrorPage />} />
          </Route>




          <Route element={<ManagerLayout />}>
            <Route path="/manage" element={<Dashboard/>} />
            <Route path="/manage/reservations" element={<Reservations/>} />
            <Route path="/manage/services" element={<Services/>} />
            <Route path="/manage/services/service/:id" element={<EditService/>} />
            <Route path="/manage/services/new" element={<NewService/>} />
            <Route path="/manage/employees" element={<Employees/>} />
            <Route path="/manage/employees/employee/:id" element={<EmployeeDetails/>} />
            <Route path="/manage/customers" element={<Customers/>} />
          </Route>

        </Routes>
      </Router>
      <Toaster/>
    </main>
  );
};

export default App;
