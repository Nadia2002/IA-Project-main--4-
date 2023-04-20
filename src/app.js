import { Router, Routes, Route } from "react-router-dom";
import Header from "./routing/header";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/Admin_Dashboard/Admin_Dashboard";
import EditBooks from "./Components/EditBooks/EditBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Navbar/Navbar.css";
import "./Components/BookDetails/BookDetails.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import ManageUsers from "./Components/ManageUsers/ManageUsers";
import CartPage from "./Components/CartPage/CartPage";
import ResultPage from "./Components/ResultPage/ResultPage";
import BookDetails from "./Components/BookDetails/BookDetails";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/edit" element={<EditBooks />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/bookdetails" element={<BookDetails />} />
          <Route path="/manageusers" element={<ManageUsers />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
