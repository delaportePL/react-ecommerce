import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
                Accueil
            </NavLink>
            <NavLink to="/panier" className={(nav) => nav.isActive ? "nav-active" : ""}>
                Mon panier
            </NavLink>
        </nav>
    );
}; 
