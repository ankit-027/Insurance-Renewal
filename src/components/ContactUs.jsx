import React, { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        policyType: "",
        subject: "",
        message: "",
        contactMethod: "email",
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);

    const accent = "#004080";

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";

        if (!form.phone.trim()) newErrors.phone = "Phone is required";
        else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter 10 digit phone";

        if (!form.policyType) newErrors.policyType = "Select a policy type";
        if (!form.subject.trim()) newErrors.subject = "Subject is required";
        if (!form.message.trim()) newErrors.message = "Message is required";
        if (!form.consent) newErrors.consent = "Please accept the consent";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        console.log("Contact form submitted:", form);
        setSent(true);
        setForm({
            fullName: "",
            email: "",
            phone: "",
            policyType: "",
            subject: "",
            message: "",
            contactMethod: "email",
            consent: false,
        });
        setErrors({});
    };

    return (
        <div className="container d-flex justify-content-center align-items-center py-5 bg-white">
            <div className="col-lg-8 col-md-10">
                <div className="text-center mb-4">
                    <h1 style={{ color: accent }}>Contact Us</h1>
                    <p className="text-muted">
                        Have questions about your policy or need a quote? Send us a message.
                    </p>
                </div>

                {sent && (
                    <div className="alert alert-success">
                        <strong>Thanks!</strong> Your message has been sent. We'll get back to you soon.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter full name"
                                value={form.fullName}
                                onChange={handleChange}
                                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                            />
                            {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={form.email}
                                onChange={handleChange}
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">Phone (10 digits)</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter mobile number"
                                maxLength={10}
                                value={form.phone}
                                onChange={handleChange}
                                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Policy Type</label>
                            <select
                                name="policyType"
                                value={form.policyType}
                                onChange={handleChange}
                                className={`form-select ${errors.policyType ? "is-invalid" : ""}`}
                            >
                                <option value="">Select a policy</option>
                                <option value="health">Health Insurance</option>
                                <option value="life">Life Insurance</option>
                                <option value="auto">Auto Insurance</option>
                                <option value="home">Home Insurance</option>
                                <option value="travel">Travel Insurance</option>
                            </select>
                            {errors.policyType && <div className="invalid-feedback">{errors.policyType}</div>}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject (e.g., Claim, Renewal, New Policy"
                            value={form.subject}
                            onChange={handleChange}
                            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                        />
                        {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            placeholder="Message.."
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        />
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label d-block">Preferred Contact Method</label>
                        {["email", "phone", "whatsapp"].map((method) => (
                            <div className="form-check form-check-inline" key={method}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="contactMethod"
                                    value={method}
                                    checked={form.contactMethod === method}
                                    onChange={handleChange}
                                    id={`cm-${method}`}
                                />
                                <label className="form-check-label" htmlFor={`cm-${method}`}>
                                    {method.charAt(0).toUpperCase() + method.slice(1)}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className={`form-check-input ${errors.consent ? "is-invalid" : ""}`}
                            name="consent"
                            checked={form.consent}
                            onChange={handleChange}
                            id="consent"
                        />
                        <label className="form-check-label" htmlFor="consent">
                            I agree to be contacted about insurance policies and acknowledge the{" "}
                            <a href="#" style={{ color: accent }}>
                                privacy policy
                            </a>.
                        </label>
                        {errors.consent && <div className="invalid-feedback">{errors.consent}</div>}
                    </div>

                    <button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: accent }}
                    >
                        Send Message
                    </button>
                </form>

                <p className="text-muted text-center mt-3">
                    Tip: Replace the submit handler with your backend API to save leads.
                </p>
            </div>
        </div>
    );
}
