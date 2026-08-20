import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "FastMCP & PydanticAI Research Agent",
    category: "AI & Agentic Systems",
    description: "Architected a reproducible ReAct-style autonomous research agent integrating Model Context Protocol (MCP) HTTP tool suites, dynamic web retrieval, structured Pydantic schema validation, and persistent memory logging.",
    tools: "Python, PydanticAI, FastMCP, ReAct Workflow, Tool-Calling",
    year: "2025",
    github: "https://github.com/BOT-MIHIR/Fastmcp-Pydanticai-Research-Agent"
  },
  {
    id: 2,
    name: "Customer Churn Prediction API",
    category: "MLOps & Production ML",
    description: "Built an enterprise-grade real-time inference API achieving 95%+ classification accuracy with automated feature engineering pipelines, low-latency prediction endpoints, and containerized Docker deployment.",
    tools: "Scikit-Learn, FastAPI, Docker, MLOps, 95%+ Accuracy",
    year: "2025",
    github: "https://github.com/BOT-MIHIR/Customer_Churn_API"
  },
  {
    id: 3,
    name: "Speak with the PDF (RAG Assistant)",
    category: "AI & RAG Systems",
    description: "Engineered a dense vector embedding pipeline with chunking optimization and semantic retrieval, enabling natural-language querying over complex technical documents with grounded citation extraction.",
    tools: "RAG Pipeline, Vector DB, Embeddings, Document Intelligence",
    year: "2025",
    github: ""
  },
  {
    id: 4,
    name: "AWS Serverless Wealth Robo-Advisor",
    category: "Cloud & ML",
    description: "Deployed an event-driven AWS serverless architecture delivering personalized financial portfolio allocations, integrating ML risk-tolerance scoring models, AWS Lambda, and API Gateway.",
    tools: "AWS Lambda, Serverless, ML Decision Logic, API Gateway",
    year: "2025",
    github: ""
  },
  {
    id: 5,
    name: "Airline Customer Sentiment Engine",
    category: "NLP & Cloud",
    description: "Implemented an AWS-deployed ML pipeline analyzing customer sentiment in real-time to drive automated personalization recommendations.",
    tools: "AWS Cloud, NLP / Sentiment, Personalization Engine",
    year: "2025",
    github: ""
  },
  {
    id: 6,
    name: "AI-Powered Image Editing Platform",
    category: "Computer Vision",
    description: "Production-grade computer vision prototype leveraging deep learning models for automated enhancement, background isolation, and image transformations.",
    tools: "Python, Computer Vision, PyTorch",
    year: "2025",
    github: "https://github.com/BOT-MIHIR/AI-Powered-Image-Editing-Platform-by-Mihir-Suhanda"
  },
  {
    id: 7,
    name: "Snowflake Weather & Environment ETL",
    category: "Data Engineering",
    description: "Ingests Open-Meteo feeds via Python, normalizes JSON into 3NF in Snowflake, and publishes an analytics star schema with automated quality checks.",
    tools: "Snowflake, PLpgSQL, 3NF / Star Schema",
    year: "2025",
    github: "https://github.com/BOT-MIHIR/-Weather-and-Environment-Monitor-Array-Based-Data-"
  },
  {
    id: 8,
    name: "DSA Emergency Dispatch System",
    category: "Graph Algorithms",
    description: "Simulated New Delhi emergency incidents by modeling urban transport as a dynamic weighted graph, calculating multi-objective shortest routes under load.",
    tools: "Graph Algorithms, DSA Routing, Network Optimization",
    year: "2025",
    github: "https://github.com/BOT-MIHIR/Emergency-Dispatch-ND"
  },
  {
    id: 9,
    name: "BeatBuddies CLI",
    category: "Full-Stack Systems",
    description: "CLI music management system with role-based access control (RBAC) for multi-user music library management.",
    tools: "Microservices, RBAC, System Design",
    year: "2024–2026",
    github: "https://github.com/BOT-MIHIR/Music-Applications"
  },
  {
    id: 10,
    name: "CloudShop-Lite",
    category: "Microservices",
    description: "Cloud-native eCommerce microservices platform with distributed architecture and API-driven design.",
    tools: "Microservices, System Design, Cloud-Native",
    year: "2024–2026",
    github: "https://github.com/BOT-MIHIR/Music-Applications"
  },
  {
    id: 11,
    name: "Ghumo Platform",
    category: "Geospatial Systems",
    description: "Interactive geospatial travel routing platform with location-based services and route optimization.",
    tools: "Geolocation APIs, System Design, Routing Algorithms",
    year: "2024–2026",
    github: "https://github.com/BOT-MIHIR/Music-Applications"
  }
];

const Work = () => {
  useEffect(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id < 10 ? `0${project.id}` : project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>{project.year}</h4>
                <p style={{ marginBottom: '10px', fontSize: '0.9rem', lineHeight: '1.4' }}>{project.description}</p>
                <h5 style={{ fontSize: '0.85rem', marginTop: '10px' }}>Technologies</h5>
                <p>{project.tools}</p>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block', 
                      marginTop: '10px', 
                      color: 'var(--accentColor)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
