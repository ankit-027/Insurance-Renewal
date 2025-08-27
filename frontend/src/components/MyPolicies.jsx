import React from "react";

const MyPolicies = () => {
    // Dummy Purchased Policies (yeh backend/db se aayega future me)
    const purchasedPolicies = [
        {
            id: 1,
            title: "Life Insurance",
            type: "Life",
            purchaseDate: "2025-08-20",
            expiryDate: "2035-08-20",
            premium: "₹5,000 / year",
            status: "Active",
        },
        {
            id: 2,
            title: "Health Insurance",
            type: "Health",
            purchaseDate: "2025-05-15",
            expiryDate: "2026-05-15",
            premium: "₹12,000 / year",
            status: "Active",
        },
        {
            id: 3,
            title: "Term Insurance",
            type: "Life",
            purchaseDate: "2024-07-01",
            expiryDate: "2029-07-01",
            premium: "₹3,000 / year",
            status: "Expired",
        },
    ];

    return (
        <div className="myPolicy">
            <div className="container my-2">
                <h2 className="mb-3 text-center">My Policies</h2>

                {purchasedPolicies.length === 0 ? (
                    <div className="alert alert-info text-center">
                        You have not purchased any policy yet.
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover shadow-sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Policy Title</th>
                                    <th>Type</th>
                                    <th>Purchase Date</th>
                                    <th>Expiry Date</th>
                                    <th>Premium</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchasedPolicies.map((policy, index) => (
                                    <tr key={policy.id}>
                                        <td>{index + 1}</td>
                                        <td>{policy.title}</td>
                                        <td>{policy.type}</td>
                                        <td>{policy.purchaseDate}</td>
                                        <td>{policy.expiryDate}</td>
                                        <td>{policy.premium}</td>
                                        <td>
                                            <span
                                                className={`badge ${policy.status === "Active"
                                                    ? "bg-success"
                                                    : "bg-danger"
                                                    }`}
                                            >
                                                {policy.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPolicies;
