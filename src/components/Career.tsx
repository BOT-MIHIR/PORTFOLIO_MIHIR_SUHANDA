import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Engineer (Instrumentation & Automation)</h4>
                <h5>Toyo Engineering India Ltd · Mumbai, India</h5>
              </div>
              <h3>JUL 2024 — PRESENT</h3>
            </div>
            <p>
              Spearheaded engineering execution on mega-scale EPC packages including the VGO-HDT unit and Ammonia Storage Tanks (2 × 20,000 MT AST), ensuring strict compliance and safety standards. Streamlined instrumentation & automation workflows, reducing inter-team rework by 18% and accelerating cross-functional alignment across 5+ stakeholder groups. Enforced strict fail-safe reliability standards and data integrity across complex control loops in high-pressure project delivery environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
