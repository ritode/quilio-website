export default function ServicesCard({ data, index }) {
  return (
    <div className={`services-card ${index % 2 ? "left" : "right"}`}>
      <img className="image" src={data.image} alt="" />
      <div className="content">
        <h3>{data.title}</h3>
        <div className="line-break" />
        <p className="p24">{data.content}</p>
        <div className="points">
          {data.points.map((data, i) => (
            <div className="point" key={i}>
              <img src="/images/arrow.png" alt="" />
              <p className="p24" title={data}>
                {data}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
