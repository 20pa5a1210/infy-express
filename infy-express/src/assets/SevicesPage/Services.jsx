import { Link } from "react-router-dom";
import services from "./listofservices";

export default function Services() {
  return (
    <div className="flex justify-center space-x-10 mt-10">
      {services.map((item) => {
        const { id, name, name1, des } = item;
        return (
          <Link to={`/services/${name1}`}>
            <div key={id} className="card-item">
              <h1 className="text-lg font-mono">{name}</h1>
              <p>{des}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
