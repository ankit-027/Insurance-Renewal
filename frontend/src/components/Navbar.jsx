import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {
    const [active, setActive] = useState(false);

    const navigate = useNavigate();

    const handleLoginClick = () => {

        navigate("/login"); // navigate karega login page pe
    };
    const handleSignUpClick = () => {
        setActive(!active);

        navigate("/signup"); // navigate karega login page pe
    };

    return (
        <>
            <nav className="navbar mainNav navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold text-center"
                        style={{
                            fontFamily: "cursive",
                            fontSize: "1.5rem",
                            background: "linear-gradient(90deg, #ff512f, #dd2476)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "3px 3px 10px rgba(0,0,0,0.5)",
                            cursor: "pointer"
                        }}
                        to="/">Policies Insurance</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/policy"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                >
                                    Policy
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active-link" : "nav-link"
                                    }
                                >
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>

                        <span className='me-4'>
                            <NavLink to="/mypolicies" className={({ isActive }) =>
                                isActive ? "nav-link active-link" : "nav-link"
                            }>My Policy
                            </NavLink></span>
                        <form className="d-flex gap-2" role="search">
                            <button className="btn btn-outline-custom" onClick={handleLoginClick} type="button">Log In</button>

                            <button className="btn btn-outline-custom" onClick={handleSignUpClick} type="button">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar