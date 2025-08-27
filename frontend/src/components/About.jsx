import React from "react";

const About = ({ onOpenDemo, onContact }) => {
    const snapshot = [
        { value: "2 min", label: "Avg. renewal time" },
        { value: "24×7", label: "Support availability" },
        { value: "100%", label: "Secure payments" },
    ];

    const missionCards = [
        {
            icon: "🔒",
            title: "Security First",
            desc:
                "We emphasize data protection, encrypted transactions and compliance-ready design patterns.",
        },
        {
            icon: "⚡",
            title: "Speed & Clarity",
            desc:
                "Minimal steps, clear CTAs and progress indicators help complete renewals quickly.",
        },
        {
            icon: "🤝",
            title: "Trust by Design",
            desc:
                "Upfront details, plan comparisons and explanatory tooltips reduce confusion.",
        },
    ];

    const securityCards = [
        {
            icon: "🧩",
            title: "Encryption",
            desc:
                "HTTPS/TLS for all traffic, secure cookies and strong password rules.",
        },
        {
            icon: "🛡",
            title: "Payments",
            desc:
                "PCI-DSS ready approach with tokenized gateways and UPI support.",
        },
        {
            icon: "👁‍🗨",
            title: "Privacy",
            desc: "Minimal data collection, clear consent and easy deletion requests.",
        },
    ];

    const whyItems = [
        {
            title: "Smart reminders",
            desc: "Notify via SMS/email before expiry and on the day of renewal.",
        },
        {
            title: "Plan comparison",
            desc: "Compare premium, IDV, add-ons and discounts in a single view.",
        },
        {
            title: "Instant policy PDF",
            desc: "Download the renewed policy immediately after payment.",
        },
        {
            title: "Guided 4-step flow",
            desc: "Enter details → Verify → Pay → Done ✅",
        },
    ];

    // Component-level inline CSS (scoped by using unique class prefix)
    const styles = `
  /* AboutComponent styles (prefixed with ar-about-) */
  :root {
    --ar-about-accent: #1976d2;
    --ar-about-deep: #004080;
    --ar-about-muted: #567196;
    --ar-about-text: #0a2540;
    --ar-about-bg: linear-gradient(180deg,#f7fbff,#fff);
  }
  .ar-about-root {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: var(--ar-about-text);
    background: var(--ar-about-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    margin: 0;
  }
  .ar-about-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.5rem;
  }
  .ar-about-section { padding: .5rem 0; }
  .ar-about-patterned { background: linear-gradient(180deg,#fff,#f7fbff); border-block: 1px solid #e6eefb; }

  /* hero grid */
  .ar-about-hero-grid {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 1.75rem;
    align-items: center;
  }
  .ar-about-hero-title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.07;
    margin: .6rem 0 .4rem;
  }
  .ar-about-muted { color: var(--ar-about-muted); }
  .ar-about-pill {
    display:inline-flex; gap:.5rem; align-items:center;
    padding:.35rem .65rem; border-radius:999px; font-weight:700; font-size:.75rem;
    background: #e3f2fd; color: var(--ar-about-deep);
  }

  /* card */
  .ar-about-card {
    background: #fff;
    border: 1px solid #e8eef8;
    border-radius: 18px;
    padding: 1.25rem;
    box-shadow: 0 14px 30px rgba(13,71,161,.12),0 6px 12px rgba(13,71,161,.08);
  }
  .ar-about-aside-card { padding: 1rem; }

  .ar-about-stats-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:.75rem; margin-top:.6rem; }
  .ar-about-stat {
    background: linear-gradient(180deg,#fff,#f7fbff);
    border: 1px solid #e6eefb;
    border-radius: 12px;
    padding:.8rem; text-align:center;
  }
  .ar-about-stat-value { font-size:1.4rem; font-weight:900; color:var(--ar-about-deep); }
  .ar-about-stat-label { font-size:.85rem; color:var(--ar-about-muted); }

  /* cards grid */
  .ar-about-cards-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; margin-top:1rem; }
  .ar-about-simple-card { padding:1rem; border-radius:14px; background:#fff; border:1px solid #eef6ff; }
  .ar-about-icon-circle {
    width:44px; height:44px; border-radius:12px; background:#e3f2fd; display:grid; place-items:center;
    color:var(--ar-about-deep); font-weight:900; font-size:1.4rem;
  }
  .ar-about-card-title { margin:.6rem 0 .3rem; font-weight:700; }

  /* why grid */
  .ar-about-why-grid { display:grid; grid-template-columns: 1.1fr .9fr; gap:1.25rem; }

  .ar-about-features { display:grid; gap:.75rem; margin-top:.5rem; }
  .ar-about-feature-row { display:flex; gap:.75rem; align-items:flex-start; }
  .ar-about-check {
    width:24px;height:24px;border-radius:50%; background:var(--ar-about-accent); color:#fff; display:grid; place-items:center;
    font-weight:900; font-size:.95rem; box-shadow:0 8px 18px rgba(25,118,210,.3);
  }
  .ar-about-badges { display:flex; gap:.6rem; flex-wrap:wrap; margin-top:.75rem; }
  .ar-about-chip { padding:.6rem .9rem; border-radius:999px; border:1px dashed #cfe0ff; background:#fff; font-size:.9rem; }

  .ar-about-timeline { margin-top:.85rem; border-left: 3px solid #bbdefb; padding-left:1rem; }
  .ar-about-timeline-step { margin:.75rem 0; }

  /* CTA */
  .ar-about-cta-grid {
    background: linear-gradient(135deg,#004080,#1976d2);
    color:#fff; border-radius:18px; padding:1.5rem; box-shadow:0 14px 30px rgba(13,71,161,.12),0 6px 12px rgba(13,71,161,.08);
    display:grid; grid-template-columns:1.2fr .8fr; gap:1rem; align-items:center;
    margin-top:1rem;
  }
  .ar-about-btn { padding:.6rem .9rem; border-radius:12px; border:0; font-weight:800; cursor:pointer; }
  .ar-about-btn-primary { background:#fff; color:var(--ar-about-deep); }
  .ar-about-btn-ghost { background:transparent; color:#fff; outline:2px solid rgba(255,255,255,.6); }

  .ar-about-steps-list { margin-top:.6rem; padding-left:1.1rem; color:rgba(255,255,255,.95); }

  /* responsive */
  @media (max-width: 900px) {
    .ar-about-cards-grid { grid-template-columns: repeat(2,1fr); }
    .ar-about-hero-grid, .ar-about-why-grid { grid-template-columns: 1fr; }
    .ar-about-cta-grid { grid-template-columns: 1fr; }
    .ar-about-stats-grid { grid-template-columns: repeat(3,1fr); } /* keep three side-by-side on medium */
  }
  @media (max-width: 600px) {
    .ar-about-cards-grid { grid-template-columns: 1fr; }
    .ar-about-stats-grid { grid-template-columns: 1fr; }
    .ar-about-hero-title { font-size:1.5rem; }
    .ar-about-pill { font-size:.7rem; padding:.25rem .5rem; }
    .ar-about-icon-circle { width:40px; height:40px; font-size:1.15rem; }
    .ar-about-container { padding:1rem; }
    .ar-about-cta-grid { padding:1rem; border-radius:14px; }
  }
  `;

    // default handlers (no-op) when props are not passed
    const handleOpenDemo = (e) => {
        e.preventDefault();
        if (typeof onOpenDemo === "function") return onOpenDemo();
        // default behaviour: open a new tab to a demo placeholder (non-destructive)
        window.open("about:blank", "_blank");
    };

    const handleContact = (e) => {
        e.preventDefault();
        if (typeof onContact === "function") return onContact();
        // default behaviour: copy placeholder email to clipboard (best effort)
        const email = "team@policyrenew.example";
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(
                () => alert(`Contact email copied: ${email}`),
                () => alert(`Contact: ${email}`)
            );
        } else {
            alert(`Contact: ${email}`);
        }
    };

    return (
        <main className="ar-about-root" aria-labelledby="ar-about-heading">
            <style>{styles}</style>

            <section className="ar-about-section">
                <div className="ar-about-container ar-about-hero-grid">
                    <div>
                        <div className="ar-about-pill" aria-hidden>
                            ABOUT POLICERENEW
                        </div>
                        <h1 id="ar-about-heading" className="ar-about-hero-title">
                            We make insurance renewal simple, fast and trustworthy.
                        </h1>
                        <p className="ar-about-muted">
                            PolicyRenew is a student-built project concept that streamlines
                            renewing Health, Motor and Life policies. Our mission is to help
                            people never miss a renewal and keep protection active—with clear
                            pricing, secure payments and instant policy documents.
                        </p>
                    </div>

                    <aside className="ar-about-card ar-about-aside-card" aria-label="Project snapshot">
                        <div style={{ marginBottom: 8, fontWeight: 700, color: "var(--ar-about-deep)" }}>
                            📈 Project Snapshot
                        </div>

                        <div className="ar-about-stats-grid" role="list">
                            {snapshot.map(({ value, label }) => (
                                <div className="ar-about-stat" key={label} role="listitem">
                                    <div className="ar-about-stat-value">{value}</div>
                                    <div className="ar-about-stat-label">{label}</div>
                                </div>
                            ))}
                        </div>

                        <p className="ar-about-muted" style={{ marginTop: 10, fontSize: 13 }}>
                            *Numbers above are design targets for the project prototype.
                        </p>
                    </aside>
                </div>
            </section>

            <section className="ar-about-section">
                <div className="ar-about-container">
                    <h2 style={{ marginTop: 2 }}>Our Mission</h2>
                    <p className="ar-about-muted">
                        To remove friction from policy renewals with guided steps, smart
                        reminders and transparent choices—so users stay continuously
                        covered without stress.
                    </p>

                    <div className="ar-about-cards-grid" aria-label="Mission cards">
                        {missionCards.map(({ icon, title, desc }) => (
                            <article className="ar-about-simple-card" key={title}>
                                <div className="ar-about-icon-circle" aria-hidden>
                                    {icon}
                                </div>
                                <h3 className="ar-about-card-title">{title}</h3>
                                <p className="ar-about-muted" style={{ fontSize: 14 }}>{desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ar-about-section ar-about-patterned">
                <div className="ar-about-container ar-about-why-grid">
                    <article>
                        <h2>What makes PolicyRenew different?</h2>
                        <p className="ar-about-muted">
                            We combine a clean UI with helpful micro-features that keep users on track.
                        </p>

                        <div className="ar-about-features" aria-label="features">
                            {whyItems.map(({ title, desc }) => (
                                <div className="ar-about-feature-row" key={title}>
                                    <div className="ar-about-check" aria-hidden>✓</div>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>{title}</div>
                                        <div className="ar-about-muted" style={{ fontSize: 13 }}>{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="ar-about-badges" aria-hidden>
                            {["SSL Secure", "PCI-DSS Ready", "UPI / Cards / NetBanking", "24×7 Help"].map((text) => (
                                <div className="ar-about-chip" key={text}>{text}</div>
                            ))}
                        </div>
                    </article>

                    <aside className="ar-about-card ar-about-aside-card" aria-label="User Journey">
                        <div style={{ marginBottom: 8, fontWeight: 700, color: "var(--ar-about-deep)" }}>🧭 User Journey</div>
                        <div className="ar-about-timeline">
                            {[
                                "Step 1 — Enter policy no. & phone",
                                "Step 2 — View renewal options & offers",
                                "Step 3 — Pay securely",
                                "Step 4 — Download policy & get reminders",
                            ].map((step) => {
                                const [title, rest] = step.split(" — ");
                                return (
                                    <div className="ar-about-timeline-step" key={step}>
                                        <strong>{title}</strong> — <span className="ar-about-muted" style={{ fontSize: 13 }}>{rest}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </aside>
                </div>
            </section>

            <section className="ar-about-section ar-about-patterned">
                <div className="ar-about-container">
                    <h2>Security & Compliance</h2>
                    <p className="ar-about-muted">Security is built-in: encrypted transit, masked inputs and safe storage patterns in the design.</p>

                    <div className="ar-about-cards-grid" aria-label="Security cards">
                        {securityCards.map(({ icon, title, desc }) => (
                            <article className="ar-about-simple-card" key={title}>
                                <div className="ar-about-icon-circle" aria-hidden>{icon}</div>
                                <h3 className="ar-about-card-title">{title}</h3>
                                <p className="ar-about-muted" style={{ fontSize: 14 }}>{desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ar-about-section">
                <div className="ar-about-container">
                    <div className="ar-about-cta-grid" role="region" aria-label="Call to action">
                        <div>
                            <h2 style={{ margin: 0, marginBottom: 6 }}>Ready to experience faster renewals?</h2>
                            <p style={{ margin: 0, marginBottom: 12, color: "rgba(255,255,255,.95)" }}>
                                Try our guided demo flow or contact us for the project presentation deck.
                            </p>

                            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                <button
                                    className="ar-about-btn ar-about-btn-primary"
                                    type="button"
                                    onClick={handleOpenDemo}
                                    aria-label="Open demo"
                                >
                                    Open Demo
                                </button>
                                <button
                                    className="ar-about-btn ar-about-btn-ghost"
                                    type="button"
                                    onClick={handleContact}
                                    aria-label="Contact team"
                                >
                                    Contact Team
                                </button>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginBottom: 10, fontWeight: 700, color: "rgba(255,255,255,.95)" }}>🚀 Renew in 4 Steps</div>
                            <ul className="ar-about-steps-list">
                                <li>Enter policy number</li>
                                <li>Verify details</li>
                                <li>Pay securely</li>
                                <li>Download policy instantly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;