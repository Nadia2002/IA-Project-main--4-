import React from "react";
import Header from "../../routing/header";
import Main from "../../routing/main";
import Footer from "../../routing/footer";

const Sidebar = () => {
  return (
    <>
      <Header />
      <nav role="navigation">
        <ul className="main">
          <li className="dashboard">
            <a>Dashboard</a>
          </li>
          <li className="edit">
            <a>Edit Books</a>
          </li>
          <li className="users">
            <a>Manage Users</a>
          </li>
        </ul>
      </nav>
      <Main />
      <Footer />
    </>
  );
}
export default Sidebar;
