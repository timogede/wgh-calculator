import React from "react";
import { ReactComponent as EmptySvg } from "../images/empty.svg";

const EmptyState = ({language}) => {


  return (

    <React.Fragment>
      <div className="emptystate container">
      <div className="emptystate__inside container__inside">
      <div className="emptystate__wrap">
      <EmptySvg/>
      <i className="fas fa-times-octagon"></i>
      <h2>Du hast noch keinen Score eingetragen.</h2>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
}

export default EmptyState;
