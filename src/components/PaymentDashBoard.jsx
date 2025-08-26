import React from "react";
import { useLocation } from "react-router-dom";

const PaymentDashboard = () => {
    const location = useLocation();
    const { policy, formData } = location.state || {};

    return (
        <div className="container my-5">
            <h2>Payment Dashboard</h2>
            <p><strong>Policy:</strong> {policy?.title}</p>
            <p><strong>Name:</strong> {formData?.name}</p>
            <p><strong>Email:</strong> {formData?.email}</p>
            <p><strong>Phone:</strong> {formData?.phone}</p>
            <p><strong>ID:</strong> {formData?.idNumber}</p>
            <p><strong>DOB:</strong> {formData?.dob}</p>

            <div className="card p-4 mt-4 shadow">
                <h4>Choose Payment Method</h4>
                <button className="btn btn-success me-2 my-1">Pay with UPI</button>
                <button className="btn btn-dark me-2 my-1">Pay with NetBanking</button>
                <button className="btn btn-primary my-1">Pay with Card</button>
            </div>
        </div>
    );
};

export default PaymentDashboard;
