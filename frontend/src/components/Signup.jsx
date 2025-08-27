// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// function Signup() {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let [signupButton, setSignupButton] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSignupButton(true);
//     console.log("Signup data : ", { name, email, password });
//     alert("Signup form Submited!");
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Signup</h2>
//       <form action="" className="w-50 mx-auto" onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="">Name </label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
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
//           <button
//             type="submit"
//             className="btn btn-primary w-70%"
//             disabled={signupButton == true}
//           >
//             {signupButton ? "Proccessing..." : "Signup"}
//           </button>
//         </div>
//         <div>
//           <p>
//             already have an account ?{" "}
//             <span>
//               {" "}
//               <Link to="/login">login</Link>{" "}
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [signupButton, setSignupButton] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSignupButton(true);
        console.log("Signup data : ", { name, email, password });
        alert("Signup form Submitted!");
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
                Signup
            </h2>

            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "6px" }}>Name</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            outline: "none",
                        }}
                    />
                </div>

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
                        disabled={signupButton === true}
                        style={{
                            width: "100%",
                            padding: "12px",
                            backgroundColor: signupButton ? "#6c757d" : "#004080",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: signupButton ? "not-allowed" : "pointer",
                            fontSize: "16px",
                        }}
                    >
                        {signupButton ? "Processing..." : "Signup"}
                    </button>
                </div>

                {/* Login Link */}
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/login" style={{ color: "#007bff", textDecoration: "none" }}>
                                Login
                            </Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Signup;