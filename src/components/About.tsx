import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Engineer specializing in production machine learning, autonomous
          agentic workflows (Model Context Protocol & PydanticAI), and
          high-throughput RAG systems. Backed by rigorous AI engineering
          specialization at Saras AI Institute (Grade A) and 2+ years of
          mission-critical engineering execution at Toyo Engineering. Bridges
          high-reliability industrial systems design, automated data pipelines,
          and scalable cloud deployments (AWS, Docker, FastAPI) to deliver
          measurable, production-grade AI solutions.
        </p>
        <div className="about-metrics">
          <div className="metric-box">
            <h2>95%+</h2>
            <p>Model Accuracy</p>
          </div>
          <div className="metric-box">
            <h2>8.74</h2>
            <p>B.E. CGPA</p>
          </div>
          <div className="metric-box">
            <h2>11</h2>
            <p>Built Systems</p>
          </div>
          <div className="metric-box">
            <h2>2+</h2>
            <p>Years Industrial Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
