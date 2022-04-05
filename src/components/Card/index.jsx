import React, { useState } from "react";

function Card(props) {
  const [tittle, setTittle] = useState('')
  const [menssege,setMenssege] = useState('');

  
  let options = undefined;

  if(props.valueLanguage === 'pt'){
    options = props.data.pt;
  }
  else {
    options = props.data.eng;
  }
  console.log(options[props.valueDaysWeek])

  return(
    <div>
      <label>{props.valueLanguage === 'pt' ? "Descrição" : "Description"}</label>
    </div>
  )
}

export default Card;