// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Login() {
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let [loginButton, setLoginButton] = useState(false);
//   const handleLogin = (e) =>{
//     e.preventDefault();
//     setLoginButton(true)
//     console.log("Login Data : " , {email, password})
//     // setLoginButton(false)
//   }
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Login</h2>
//       <form action="" onSubmit={handleLogin} className="w-50 mx-auto">
//         <div className="mb-3">
//           <label htmlFor="">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3 d-flex justify-content-center justify-items-center w-100%">
//         <button type="submit" className="btn btn-primary w-70%" disabled={loginButton == true}>
//             {loginButton ? "Proccessing..." : "Login"}
//           </button>
//         </div>
//          <div>
//           <p>
//             don't have an account ?{" "}
//             <span>
//               {" "}
//               <Link to="/signup">signup</Link>{" "}
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loginButton, setLoginButton] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginButton(true);
        console.log("Login Data : ", { email, password });
        // setLoginButton(false)
    };

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "50px auto",
                padding: "30px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
                Login
            </h2>

            <form onSubmit={handleLogin}>
                {/* Email */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "6px" }}>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            outline: "none",
                        }}
                    />
                </div>

                {/* Password */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "6px" }}>
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            outline: "none",
                        }}
                    />
                </div>

                {/* Button */}
                <div style={{ textAlign: "center", marginBottom: "15px" }}>
                    <button
                        type="submit"
                        disabled={loginButton === true}
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: loginButton ? "#6c757d" : "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: loginButton ? "not-allowed" : "pointer",
                            fontSize: "16px",
                        }}
                    >
                        {loginButton ? "Processing..." : "Login"}
                    </button>
                </div>

                {/* Signup Link */}
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <p>
                        Don't have an account?{" "}
                        <span>
                            <Link to="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
                                Signup
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;