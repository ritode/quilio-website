import { useRef } from "react";
import { TECH_STACK } from "../siteContent";
import "./TechStack.css";
export default function TechStack() {
  const stackRef = useRef(null);
  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -320 : 320;
    const element = stackRef.current;
    element.scrollTo({
      left: element.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="tech-stacks">
      <h3>Our Tech Stack</h3>
      <div className="tech-container">
        <img
          className="scroll-button-up"
          src="/images/nav-arrow<.png"
          alt=""
          onClick={() => {
            handleScroll("left");
          }}
        />
        <div className="tech" ref={stackRef}>
          {TECH_STACK.map((data, i) => (
            <div className="tech-stack" key={i}>
              <img src={data.image} alt="" />
              <p className="st3">{data.title}</p>
            </div>
          ))}
        </div>
        <img
          className="scroll-button-down"
          src="/images/nav-arrow>.png"
          alt=""
          onClick={() => {
            handleScroll("right");
          }}
        />
      </div>
    </div>
  );
}
