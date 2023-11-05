import React from "react";
import "./SidebarOpenButton.css";

function SidebarOpenButton() {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  return <button className="open_button" onClick={openNav}><i class="fa-solid fa-bars"></i> Menu</button>;
}

export default SidebarOpenButton;
