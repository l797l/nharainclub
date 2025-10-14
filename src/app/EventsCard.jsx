import "./events.css";

export default function EventsCard({ day, month, title, time, desc }) {
  return (
    <div className="events-card">
      <div className="card-num-time">
        <h2 className="card-num">{day}</h2>
        <p className="card-month">{month}</p>
      </div>

      <div className="card-title">
        <h2> {title}</h2>
        <data>{time}</data>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
}
