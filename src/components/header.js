import { NavLink } from "react-router-dom";
import "../styles/header.css"

const Header = (props) => {

        return (
            <div id="header">
                <div className="innerHeader">
                    <div className="logoContainer">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="header-links">
                        <ul>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}><li>Home</li></NavLink>
                            <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "inactive")}><li>Shop</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        )
}

export default Header;