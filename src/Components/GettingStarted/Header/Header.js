import React from "react";
import "./Header.css";

import { NavLink, Link} from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Header() {
  return (
    <div id="main-header">
      <div id="left">
        <span>Store X</span>
      </div>

      <div id="right">
        <div id="navigations">
          <Link to="store/1">Store</Link>
          <Link to="nearby">Nearby</Link>
          <Link to="trends">Trends</Link>
          <Link to="contact">Contact</Link>
        </div>

        <div className="combination">
          <input type="text" placeholder="Search" />
          <LocalMallOutlinedIcon />
          <DashboardIcon />
        </div>
      </div>
    </div>
  );
}