import { useRef, useState } from "react";
import { TECH_STACK } from "../siteContent";
import "./TechStack.css";
export default function TechStack() {
  const stackRef = useRef(null);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(true);
  const handleScroll = (direction) => {
    const element = stackRef.current;
    const scrollAmount =
      direction === "left"
        ? element.scrollLeft - 320
        : element.scrollLeft + 320;
    if (scrollAmount > 0) setLeftActive(true);
    else setLeftActive(false);
    if (scrollAmount > 1280) setRightActive(false);
    else setRightActive(true);
    element.scrollTo({
      left: scrollAmount,
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
          style={leftActive ? { opacity: "1" } : { opacity: "0" }}
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
          style={rightActive ? { opacity: "1" } : { opacity: "0" }}
          onClick={() => {
            handleScroll("right");
          }}
        />
      </div>
    </div>
  );
}
