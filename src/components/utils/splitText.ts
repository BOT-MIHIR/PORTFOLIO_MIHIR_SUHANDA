import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Simple SplitText replacement
class SimpleSplitText {
  words: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  
  constructor(element: HTMLElement, options: { type: string; linesClass?: string }) {
    const text = element.textContent || '';
    element.innerHTML = '';
    
    if (options.type.includes('words')) {
      const words = text.split(' ');
      words.forEach((word, i) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        wordSpan.style.display = 'inline-block';
        element.appendChild(wordSpan);
        if (i < words.length - 1) element.appendChild(document.createTextNode(' '));
        this.words.push(wordSpan);
      });
    }
    
    if (options.type.includes('chars')) {
      element.innerHTML = '';
      for (let char of text) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        element.appendChild(charSpan);
        this.chars.push(charSpan);
      }
    }
  }
  
  revert() {
    // Simple revert
  }
}

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SimpleSplitText;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new SimpleSplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new SimpleSplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
