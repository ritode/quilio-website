import { TECH_STACK } from "../siteContent";
import "./TechStack.css";
export default function TechStack() {
  return (
    <div className="tech-stacks">
      <h3>Our Tech Stack</h3>
      <div className="tech-container">
        <img className="scroll-button" src="/images/nav-arrow<.png" alt="" />
        <div className="tech">
          {TECH_STACK.map((data) => (
            <div className="tech-stack">
              <img src={data.image} alt="" />
              <p className="st3">{data.title}</p>
            </div>
          ))}
        </div>
        <img className="scroll-button" src="/images/nav-arrow>.png" alt="" />
      </div>
    </div>
  );
}
