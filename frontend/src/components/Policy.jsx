import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import insur from '../assets/insurance1.jpg'

const Policy = () => {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const [isHoverIndex, setIsHoverIndex] = useState(null);

    const [selectedPolicy, setSelectedPolicy] = useState(null);
    // Policies grouped under fewer filter types
    const policies = [
        // Life Insurance
        {
            id: 1,
            title: "Life Insurance",
            desc: "Secure your family’s financial future with comprehensive life coverage.",
            img: "...",
            type: "Life",
        },
        {
            id: 2,
            title: "Whole Life Insurance",
            desc: "Lifetime financial security and benefits for your loved ones.",
            img: "...",
            type: "Life",
        },
        {
            id: 3,
            title: "Term Insurance",
            desc: "Pure protection plan that provides coverage for a fixed term at low premiums.",
            img: "...",
            type: "Life",
        },
        {
            id: 4,
            title: "Pension Insurance",
            desc: "Build a retirement corpus and ensure regular income after retirement.",
            img: "...",
            type: "Life",
        },

        // Health Insurance
        {
            id: 5,
            title: "Health Insurance",
            desc: "Get medical coverage for you and your loved ones during emergencies.",
            img: "...",
            type: "Health",
        },
        {
            id: 6,
            title: "Critical Illness Insurance",
            desc: "Covers major illnesses like cancer, stroke, and heart diseases.",
            img: "...",
            type: "Health",
        },
        {
            id: 7,
            title: "Family Floater Health Plan",
            desc: "One policy that covers your entire family under a single premium.",
            img: "...",
            type: "Health",
        },

        // Motor Insurance
        {
            id: 8,
            title: "Motor Insurance",
            desc: "Protect your vehicle against accidents, theft, and damage repairs.",
            img: "...",
            type: "Motor",
        },
        {
            id: 9,
            title: "Two Wheeler Insurance",
            desc: "Affordable protection for your bikes and scooters against risks.",
            img: "...",
            type: "Motor",
        },
        {
            id: 10,
            title: "Commercial Vehicle Insurance",
            desc: "Covers trucks, taxis, and other business vehicles for damage and liability.",
            img: "...",
            type: "Motor",
        },

        // Property Insurance
        {
            id: 11,
            title: "Home Insurance",
            desc: "Safeguard your home and belongings from fire, theft, and natural disasters.",
            img: "...",
            type: "Property",
        },
        {
            id: 12,
            title: "Fire Insurance",
            desc: "Provides compensation for losses caused by accidental fire and allied perils.",
            img: "...",
            type: "Property",
        },
        {
            id: 13,
            title: "Property Insurance",
            desc: "Comprehensive protection for residential and commercial properties.",
            img: "...",
            type: "Property",
        },

        // Travel Insurance
        {
            id: 14,
            title: "Travel Insurance",
            desc: "Enjoy stress-free trips with global coverage for travel risks.",
            img: "...",
            type: "Travel",
        },
        {
            id: 15,
            title: "Student Travel Insurance",
            desc: "Coverage for students studying abroad against health & travel risks.",
            img: "...",
            type: "Travel",
        },
        {
            id: 16,
            title: "Senior Citizen Travel Insurance",
            desc: "Special coverage for senior citizens traveling internationally.",
            img: "...",
            type: "Travel",
        },

        // Business / Liability
        {
            id: 17,
            title: "Liability Insurance",
            desc: "Covers legal liabilities to third parties due to accidents or negligence.",
            img: "...",
            type: "Business",
        },
        {
            id: 18,
            title: "Cyber Insurance",
            desc: "Protection against online frauds, hacking, and data breaches.",
            img: "...",
            type: "Business",
        },

        // General
        {
            id: 19,
            title: "General Insurance",
            desc: "Covers health, property, vehicles, and more under flexible plans.",
            img: "...",
            type: "General",
        },
        {
            id: 20,
            title: "Pet Insurance",
            desc: "Covers veterinary bills, accidents, and illnesses of your pets.",
            img: "...",
            type: "General",
        },
        {
            id: 21,
            title: "Crop Insurance",
            desc: "Coverage against crop losses due to natural calamities, pests, or diseases.",
            img: "...",
            type: "General",
        },
    ];

    const [show, setShow] = useState(false);


    useEffect(() => {
        if (show) {
            // Modal open hua -> scroll lock
            document.body.style.overflow = "hidden";
        } else {
            // Modal band hua -> scroll unlock
            document.body.style.overflow = "auto";
        }

        // cleanup (safety ke liye bhi rakho)
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [show]);


    // State for filter
    const [filter, setFilter] = useState("All");

    // Get unique categories for filter options
    const categories = ["All", ...new Set(policies.map((p) => p.type))];

    // Filter policies based on selected filter
    const filteredPolicies =
        filter === "All"
            ? policies 
            : policies.filter((policy) => policy.type === filter);



    const handleShowDetails = (id) => {
        // policy object nikal lo based on id
        setShow(true);
        const policy = policies.find((p) => p.id === id);
        setSelectedPolicy(policy);
    };

    const closePolicyDetail = () => {
        setShow(false);
        setSelectedPolicy(null);
    }

    return (
        <>
            <div className="myPolicy">
                <h1 className="text-center p-3 text-dark fw-bold">
                    Our Insurance Policies
                </h1>

                {/* Filter Buttons */}
                <div className="text-center mb-4">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`btn me-2 ${filter === cat ? "btn-active" : "btn-outline-custom"}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>

                    ))}
                </div>

                <div className="container my-4" id="policies">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {filteredPolicies.map((policy, index) => (
                            <div className="col" key={index}>
                                <div
                                    className="card h-100 rounded-3"
                                    style={{ boxShadow: "0 0 10px #333" }}
                                >
                                    {/* Image with fixed size */}
                                    <div style={{ height: "200px", overflow: "hidden" }}>
                                        <img
                                            src={policy.img}
                                            className="card-img-top"
                                            alt={policy.title}
                                            style={{
                                                objectFit: "cover",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </div>

                                    {/* Body */}
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title mb-0">{policy.title}</h5>
                                            <p
                                                className="me-2 mb-0 viewDetail"
                                                style={{
                                                    cursor: "pointer",
                                                    color: isHoverIndex === policy.id ? '#888' : '',
                                                    fontWeight: isHoverIndex === policy.id ? '500' : '',
                                                    transition: isHoverIndex === policy.id ? 'all 0.3s ease' : '',
                                                }}
                                                onMouseEnter={() => {
                                                    setIsHoverIndex(policy.id);
                                                }}
                                                onMouseLeave={() => {
                                                    setIsHoverIndex(null);
                                                }}

                                                onClick={() => handleShowDetails(policy.id)}
                                            >
                                                Edit
                                            </p>
                                        </div>

                                        {/* Description with clamp */}
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: "0.9rem",
                                                // minHeight: "60px",
                                                overflow: "hidden",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3,
                                                WebkitBoxOrient: "vertical",
                                            }}
                                        >
                                            {policy.desc}
                                        </p>

                                        {/* Button bottom aligned */}
                                        <div className="mt-auto">
                                            <button
                                                onClick={() => navigate("/policy/verify")}
                                                type="button"
                                                className="btn btn-custom-active btn-active w-100"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div >

            {show && (
                <div className="container my-5">
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                    >

                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content p-4 position-relative">
                                <div
                                    className=" position-absolute top-0 end-0 p-2"
                                    style={{
                                        cursor: "pointer",
                                        backgroundColor: isHovered ? "red" : "",
                                        fontSize: "1.1rem",
                                        transition: "color 0.3s ease"
                                    }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={closePolicyDetail}>
                                    <i
                                        className="fa-solid fa-xmark"

                                    ></i>
                                </div>

                                {selectedPolicy && (
                                    <div className="alert alert-info mt-3 d-flex flex-column align-items-center">
                                        <img src={insur} alt="" height={'200px'} width={'80%'} />
                                        <h5 className="mt-3 text-uppercase">{selectedPolicy.title}</h5>
                                        <p>{selectedPolicy.desc}</p>
                                        <p><strong>Type:</strong> <span className="text-success text-decoration-underline">{selectedPolicy.type} Insurance</span></p>
                                        <div className="d-flex w-100 flex-row justify-content-center gap-5">
                                            <button
                                                onClick={() => navigate('/policy/verify')}
                                                type="button"
                                                className="btn btn-custom-active btn-active w-25"
                                            >
                                                Apply
                                            </button>
                                            <button className="w-25 rounded"
                                                style={{
                                                    border: "none",
                                                    height: "50px",
                                                    backgroundColor: "#333",
                                                    color: "#fff"
                                                }}
                                                onClick={closePolicyDetail}
                                            >
                                                Cross
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            )
            }
        </>
    );
}

export default Policy;
