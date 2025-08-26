import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { policy } = location.state || {}; // policy details passed from Policy.js

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        idNumber: "",
        dob: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally: send formData to backend
        navigate("/payment", { state: { policy, formData } });
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Apply for {policy?.title}</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Aadhaar / ID Number</label>
                    <input type="text" className="form-control" placeholder="Addhar Number" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-active">Proceed to Payment</button>
            </form>
        </div>
    );
};

export default VerificationForm;
