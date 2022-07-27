import React from "react";

export const SideNavbar = () => {
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  return (
    <div>
      <div
        id="mySidebar"
        className="sidebar h-full w-0 fixed  z-10 top-0 left-0 bg-[#111] overflow-x-hidden pt-4 md:pt-16 "
      >
        <a
          href=" "
          className=" absolute top-0 right-6 text-4xl ml-12"
          onClick={() => closeNav()}
        >
          ×
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div className="" id="main">
        <button
          className=" text-xl cursor-pointer bg-[#111] text-white px-4 py-3 border-none hover:bg-[#444] "
          onClick={() => openNav()}
        >
          ☰ Open Sidebar
        </button>
        <h2>Collapsed Sidebar</h2>
        <p>
          Click on the hamburger menu/bar icon to open the sidebar, and push
          this content to the right.
        </p>
      </div>
    </div>
  );
};
