import React from "react";
import { Link } from "react-router-dom";

import './ProjectBox.css';



export default function ProjectBox(...items) {

    items = items[0]
  return (
    <div className="card-project">
      <img src={"/Images" + items["photo"]} alt="project photo" />
      <p className="technologies">{items["tech"]}</p>
      <div className="card-main-info">
        <h3 className="card-title">{items["title"]}</h3>
        <p className="card-descr">{items["descr"]}</p>
        <Link className="button btn-live" to="">
          {"Live =>"}
        </Link>
      </div>
    </div>
  );
}
