import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyles = {
    fontWeight:700,
    textDecoration:"underline",
    color:"#161616"

  }
  return (
    <>
      <nav className="host-nav">
        <NavLink end style={({isActive})=>(isActive?activeStyles:null)} to="/host">Dashboard</NavLink>
        <NavLink style={({isActive})=>(isActive?activeStyles:null)} to="/host/income">Income</NavLink>
        <NavLink style={({isActive})=>(isActive?activeStyles:null)} to="/host/vans">Vans</NavLink>
        <NavLink style={({isActive})=>(isActive?activeStyles:null)} to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
