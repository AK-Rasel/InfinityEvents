import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer footer-center p-10  text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
      <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg text-rose-700 underline link link-hover" : ""
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/servises"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-lg text-rose-700 underline link link-hover" : ""
            }
        >
            Servises
        </NavLink>

        <NavLink
            to="/abouts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-lg text-rose-700 underline link link-hover" : ""
            }
        >
            Abouts Us
        </NavLink>
      </nav>
      
      <aside>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;