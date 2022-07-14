import "./Searchbar.scss";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Searchbar() {
  return (
    <div className="search_container">
      <div className="search">
        <input type="text" placeholder="Search article you want..." />
        <SearchOutlinedIcon />
      </div>
      <div className="search_icons">
        <span>
          <span className="noti"></span>
          <NotificationsNoneOutlinedIcon className="svg_style"/>
        </span>
        <BookmarksOutlinedIcon className="svg_style"/>
      </div>
    </div>
  );
}
