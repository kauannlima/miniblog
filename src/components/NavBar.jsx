import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold border-b-2 border-violet-600"
      : "text-gray-700 hover:text-violet-600 transition";

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Marca */}
        <NavLink
          to="/"
          className="text-2xl font-extrabold text-violet-700"
          onClick={closeMenu}
        >
          Mini <span className="text-indigo-600">Blog</span>
        </NavLink>

        {/* Ícone Hamburguer (mobile) */}
        <button
          className="md:hidden text-3xl text-violet-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links (desktop) */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink to="/login" className={linkClass}>
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={linkClass}>
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink to="/posts/create" className={linkClass}>
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={linkClass}>
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/about" className={linkClass}>
              Sobre
            </NavLink>
          </li>

          {user && (
            <li>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                Sair
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md border-t border-gray-200 flex flex-col px-6 py-4 space-y-4">
          <li>
            <NavLink to="/" className={linkClass} onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          {!user && (
            <>
              <li>
                <NavLink to="/login" className={linkClass} onClick={closeMenu}>
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={linkClass}
                  onClick={closeMenu}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li>
                <NavLink
                  to="/posts/create"
                  className={linkClass}
                  onClick={closeMenu}
                >
                  Novo post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={linkClass}
                  onClick={closeMenu}
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>
              Sobre
            </NavLink>
          </li>

          {user && (
            <li>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="text-gray-700 hover:text-red-600 transition font-semibold"
              >
                Sair
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
