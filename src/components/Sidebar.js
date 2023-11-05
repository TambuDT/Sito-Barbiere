import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="mySidenav" className="sidenav">
      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
        &times;
      </a>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#where">Where</a>
    </div>
  );
}

export default Sidebar;
