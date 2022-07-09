import "./Sidebar.scss";

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
        <div className="logo">
            <span className="line1"></span>
            <span className="line2"></span>
        </div>
        <li className="nav-item active">
          <GridViewOutlinedIcon />
          <a href="#" className="nav-link">
            <span className="link-text">Cats</span>
          </a>
        </li>
        <li className="nav-item">
          <ImageAspectRatioIcon />
          <a href="#" className="nav-link">
            <span className="link-text">Space</span>
          </a>
        </li>
        <li className="nav-item">
          <EditIcon />
          <a href="#" className="nav-link">
            <span className="link-text">Earth</span>
          </a>
        </li>
        <li className="nav-item">
          <EventIcon />
          <a href="#" className="nav-link">
            <span className="link-text">UFOs</span>
          </a>
        </li>
        <li className="nav-item">
          <SettingsIcon />
          <a href="#" className="nav-link">
            <span className="link-text">Settings</span>
          </a>
        </li>
        <li className="nav-item">
          <LogoutIcon />
          <a href="#" className="nav-link">
            <span className="link-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
