import { NavLink } from "react-router-dom";

import "./sideBar.css";
import {
  FiHome,
  FiGrid,
  FiInbox,
  FiCalendar,
  FiBox,
  FiFileText,
  FiUsers,
  FiMessageCircle,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

export const menu = [
  { id: 1, title: "Home", icon: <FiHome />, link: "/home" },
  { id: 2, title: "Dashboard", icon: <FiGrid />, link: "/dashboard" },
  { id: 3, title: "Inbox", icon: <FiInbox />, link: "/inbox" },
  { id: 4, title: "Calendar", icon: <FiCalendar />, link: "/calendar" },
  { id: 5, title: "Products", icon: <FiBox />, link: "/products" },
  { id: 6, title: "Invoices", icon: <FiFileText />, link: "/invoices" },
  { id: 7, title: "Customers", icon: <FiUsers />, link: "/customers" },
  { id: 8, title: "Chat Room", icon: <FiMessageCircle />, link: "/chat-room" },
  { id: 9, title: "Help", icon: <FiHelpCircle />, link: "/help" },
  { id: 10, title: "Settings", icon: <FiSettings />, link: "/settings" },
];
export const SideBar = () => {
  return (
    <div className="sidebar">
      <a className="logo" href="/bigCalendar/home">
        IMPEKABLE
      </a>

      <nav className="">
        <ul className="menu">
          {menu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "menu-item active" : "menu-item"
                }
              >
                <span className="icon"> {item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
