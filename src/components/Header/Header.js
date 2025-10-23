import "./header.css";
import { AiFillWechat } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { LuGlobe } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const notificationCount = 3;

export const Header = () => {
  return (
    <header className="header-container">
      <div className="search-section">
        <div className="search-container">
          <FaSearch className="icon" />
          <input type="text" className="search" placeholder="Search" />
        </div>
        <nav className="nav-bar">
          <button className="icon-button" aria-label="Change language">
            <LuGlobe className="icon" />
          </button>
          <button className="icon-button" aria-label="Open chat">
            <AiFillWechat className="icon" />
          </button>
          <button
            className="icon-button notification"
            aria-label="Notifications"
          >
            <span className="notification-count">{notificationCount}</span>
            <MdNotificationsNone className="icon" />
          </button>
        </nav>
      </div>
      <div className="user-section">
        <button className="user-button">
          <span className="user-name">User Name</span>
          <IoIosArrowDown className="icon" />
        </button>
        <img
          className="user-image"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
        />
      </div>
    </header>
  );
};
