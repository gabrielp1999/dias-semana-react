import React, {  useState } from "react";

function Card(props) {


  console.log(props.data)
  return(
    <div>
      <label>{props.valueLanguage === 'pt' ? "Descrição" : "Description"}</label>

    </div>
  )
}

export default Card;