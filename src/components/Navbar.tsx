import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Simple smoother replacement
export const smoother = {
  paused: (value?: boolean) => {
    if (value !== undefined) {
      document.body.style.overflow = value ? 'hidden' : 'auto';
    }
  },
  scrollTop: (value: number) => {
    window.scrollTo({ top: value, behavior: 'smooth' });
  },
  scrollTo: (target: string | null) => {
    if (target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
};

const Navbar = () => {
  useEffect(() => {
    // Enable smooth scrolling via CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section);
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <div className="logo-video-container">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="logo-video"
            >
              <source src="/Scene.mp4" type="video/mp4" />
            </video>
          </div>
        </a>
        <a
          href="mailto:mihirsuhanda01@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mihirsuhanda01@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
