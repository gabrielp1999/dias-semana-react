import React from "react";

function Card(props) {

  let options = undefined;

  if(props.valueLanguage === 'pt'){
    options = props.data.pt[props.valueDaysWeek];
  }
  else {
    options = props.data.eng[props.valueDaysWeek];
  }

  if(options === undefined){
    return null;
  }

  return(
    <div className="description">
      {/* <label>{props.valueLanguage === 'pt' ? "Descrição" : "Description"}</label> */}
      <h3>{options.title}</h3>
      <p>{options.description}</p>
    </div>
  )
}

export default Card;