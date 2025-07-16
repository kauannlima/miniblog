import { NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-violet-600 font-semibold border-b-2 border-violet-600"
      : "text-gray-700 hover:text-violet-600 transition";

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Marca */}
        <NavLink to="/" className="text-2xl font-extrabold text-violet-700">
          Mini <span className="text-indigo-600">Blog</span>
        </NavLink>

        {/* Links */}
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
    </nav>
  );
};

export default NavBar;
