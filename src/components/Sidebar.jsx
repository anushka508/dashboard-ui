import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiFileText,
  FiBarChart2,
  FiUserPlus,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const navItems = [
  { path: "/", label: "Dashboard", icon: <FiHome /> },
  { path: "/profile", label: "Profile", icon: <FiUser /> },
  { path: "/reports", label: "Reports", icon: <FiFileText /> },

  { path: "/add-user", label: "Add User", icon: <FiUserPlus /> },
  { path: "/settings", label: "Settings", icon: <FiSettings /> },
];

const Sidebar = ({ onLogout }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile Header with Hamburger */}

      <div className="md:hidden bg-gray-900 text-white  py-4 px-4 ">
        <div className="flex gap-5">
          <h2 className="text-xl font-bold">MyApp</h2>
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 py-3 space-y-2 ">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={` flex gap-3 py-2 px-3 rounded ${
                pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={() => {
              onLogout();
              closeMenu();
            }}
            className="w-full flex items-center gap-3 py-2 px-3 rounded bg-red-600 hover:bg-red-700"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-gray-900 text-white w-64 p-4">
        <h2 className="text-2xl font-bold mb-6">MyApp</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 py-2 px-4 rounded ${
                pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={onLogout}
          className="mt-6 flex items-center gap-3 py-2 px-4 rounded bg-red-600 hover:bg-red-700"
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
