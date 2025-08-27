import React from "react";

import insuranceImg1 from '../assets/insurance1.jpg'
import insuranceImg2 from '../assets/insurance2.jpg'
import insuranceImg3 from '../assets/insurance3.jpg'
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Carousel */}
            <div
                style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
            >
                <div
                    id="heroCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    style={{ width: "80%" }}
                >
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <img
                                src={insuranceImg1}
                                alt="Insurance Renewal"
                                style={{ height: "70vh", width: "100%", objectFit: "cover" }}
                            />
                            <div
                                className="carousel-caption d-none d-md-block"
                                style={{
                                    background: "rgba(0,0,0,0.45)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "2.8rem",
                                        fontWeight: "700",
                                        color: "#fff",
                                        textShadow: "1px 1px 5px rgba(0,0,0,0.8)",
                                    }}
                                >
                                    Renew Your Insurance in Minutes
                                </h1>
                                <p style={{ fontSize: "1.2rem", color: "#f1f1f1" }}>
                                    Quick, secure, and hassle-free renewals
                                </p>
                                <button onClick={() => navigate("/policy")}
                                    style={{
                                        background: "linear-gradient(135deg, #004080, #007bff)",
                                        border: "none",
                                        padding: "10px 25px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        color: "#fff",
                                        transition: "0.3s",
                                    }}
                                >
                                    Renew Policy
                                </button>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <img
                                src={insuranceImg2}
                                alt="Instant Policy PDF"
                                style={{ height: "70vh", width: "100%", objectFit: "cover" }}
                            />
                            <div
                                className="carousel-caption d-none d-md-block"
                                style={{
                                    background: "rgba(0,0,0,0.45)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "2.8rem",
                                        fontWeight: "700",
                                        color: "#fff",
                                    }}
                                >
                                    Instant Policy PDF
                                </h1>
                                <p style={{ fontSize: "1.2rem", color: "#f1f1f1" }}>
                                    Download your renewed policy immediately
                                </p>
                                <button
                                    style={{
                                        background: "linear-gradient(135deg, #004080, #007bff)",
                                        border: "none",
                                        padding: "10px 25px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        color: "#fff",
                                    }} onClick={() => useNavigate('/policy')}
                                >
                                    Renew Now
                                </button>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img
                                src={insuranceImg3}
                                alt="Trusted by Thousands"
                                style={{ height: "70vh", width: "100%", objectFit: "cover" }}
                            />
                            <div
                                className="carousel-caption d-none d-md-block"
                                style={{
                                    background: "rgba(0,0,0,0.45)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "2.8rem",
                                        fontWeight: "700",
                                        color: "#fff",
                                    }}
                                >
                                    Trusted by Thousands
                                </h1>
                                <p style={{ fontSize: "1.2rem", color: "#f1f1f1" }}>
                                    Join our satisfied customers today
                                </p>
                                <button
                                    style={{
                                        background: "linear-gradient(135deg, #004080, #007bff)",
                                        border: "none",
                                        padding: "10px 25px",
                                        borderRadius: "8px",
                                        fontWeight: "600",
                                        color: "#fff",
                                    }} onClick={() => useNavigate('/policy')}
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #004080, #5485b7)",
                    padding: "50px 20px",
                    textAlign: "center",
                    color: "#fff",
                    borderRadius: "12px",
                    margin: "40px auto",
                    width: "80%",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h1 style={{ marginBottom: "20px", fontWeight: "700" }}>
                    Quick Renewal
                </h1>
                <input
                    type="text"
                    placeholder="Policy Number"
                    style={{
                        display: "block",
                        margin: "12px auto",
                        padding: "12px",
                        width: "60%",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "1rem",
                    }}
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    style={{
                        display: "block",
                        margin: "12px auto",
                        padding: "12px",
                        width: "60%",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "1rem",
                    }}
                />
                <input
                    type="date"
                    style={{
                        display: "block",
                        margin: "12px auto",
                        padding: "12px",
                        width: "60%",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "1rem",
                    }}
                />
                <button
                    style={{
                        background: "#022951",
                        color: "#fff",
                        fontWeight: "600",
                        cursor: "pointer",
                        padding: "12px",
                        marginTop: "15px",
                        width: "60%",
                        maxWidth: "400px",
                        borderRadius: "8px",
                        border: "none",
                        transition: "0.3s",
                    }}
                >
                    Proceed to Renew
                </button>
            </section>

            {/* Policy Types */}
            <section style={{ padding: "50px 20px", textAlign: "center" }}>
                <h2
                    style={{ marginBottom: "20px", fontWeight: "700", color: "#004080" }}
                >
                    Policy Types
                </h2>
                {["Health", "Car", "Bike", "Life", "Travel"].map((type) => (
                    <div
                        key={type}
                        style={{
                            display: "inline-block",
                            background: "#999",
                            margin: "10px",
                            padding: "15px 30px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            fontWeight: "500",
                        }}
                    >
                        {type}
                    </div>
                ))}
            </section>

            {/* Benefits */}
            <section
                style={{
                    background: "#f1f6fc",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{ marginBottom: "25px", fontWeight: "700", color: "#004080" }}
                >
                    Why Choose Us
                </h2>
                {[
                    "24/7 Support",
                    "Instant Renewal",
                    "Secure Payment",
                    "Trusted by Thousands",
                ].map((benefit) => (
                    <div
                        key={benefit}
                        style={{
                            display: "inline-block",
                            background: "#999",
                            margin: "10px",
                            padding: "15px 25px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                            fontWeight: "500",
                        }}
                    >
                        {benefit}
                    </div>
                ))}
            </section>

            {/* Process */}
            <section
                style={{
                    padding: "50px 20px",
                    background: "linear-gradient(135deg, #007bff, #004080)",
                    color: "#fff",
                    borderRadius: "12px",
                    margin: "40px auto",
                    width: "80%",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                    textAlign: "center",
                }}
            >
                <h2 style={{ marginBottom: "15px", fontWeight: "700" }}>
                    Easy Renewal Process
                </h2>
                <p>
                    Step 1: Enter Details <br />
                    Step 2: Confirm Info <br />
                    Step 3: Pay <br />
                    Step 4: Download Policy
                </p>
            </section>


        </>
    );
};

export default Home;