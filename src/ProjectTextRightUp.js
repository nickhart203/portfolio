import React from "react";
import "./App.css";

function ProjectTextRightUp(props) {
  return (
    <section>
        
      <div className="container text-padding justify-content-end row subtract-top">
          <div className="side-col-lg">
            <h3>{props.header}</h3>
            <p>{props.body}</p>
          </div>
          <div className="col-sm-2"></div>
      </div>
    </section>
  );
}

export default ProjectTextRightUp;
