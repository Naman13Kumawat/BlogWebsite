import "./Sidebar.scss";

import { Link } from "react-router-dom";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EventIcon from "@mui/icons-material/Event";
import ImageAspectRatioIcon from "@mui/icons-material/ImageAspectRatio";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  return (
    <nav className="sidebar_container">
      <ul className="sidebar-nav">
        <Link to="/">
          <div className="logo">
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
        </Link>
        <li className="nav-item active">
          <GridViewOutlinedIcon />
          <Link to="/" className="nav-link">
            <span className="link-text">Discover</span>
          </Link>
        </li>
        <li className="nav-item">
          <ImageAspectRatioIcon />
          <Link to="/posts" className="nav-link">
            <span className="link-text">Your Posts</span>
          </Link>
        </li>
        <li className="nav-item">
          <EditIcon />
          <Link to="/addpost" className="nav-link">
            <span className="link-text">New Post</span>
          </Link>
        </li>
        <li className="nav-item">
          <EventIcon />
          <Link to="/about" className="nav-link">
            <span className="link-text">About Us</span>
          </Link>
        </li>
        <li className="nav-item">
          <SettingsIcon />
          <Link to="/settings" className="nav-link">
            <span className="link-text">Settings</span>
          </Link>
        </li>
        <li className="nav-item">
          <LogoutIcon />
          <Link to="/" className="nav-link">
            <span className="link-text">Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
