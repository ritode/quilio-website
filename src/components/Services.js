import "./Services.css";
import { SERVICES_CARD } from "../siteContent";
import ServicesCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="services">
      {SERVICES_CARD.map((data, i) => (
        <ServicesCard data={data} index={i} key={i} />
      ))}
    </div>
  );
}
