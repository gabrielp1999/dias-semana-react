import React, { useState } from 'react';

function Select(props) {

  return(
    <> 
      <label>{props.valueLanguage === 'pt' ? "Idioma" : "Language"}</label>
      <select onChange={props.changeLanguage} name="select">
        <option value="portugues">Portugues</option>
        <option value="ingles">Ingles</option>
      </select>

    <div>
      <label>{props.valueLanguage === 'pt' ? "Dias da semana" : "Days of the week" }</label>
      <select onChange={props.daysWeek} name="select">
        <option value="sunday">{props.valueLanguage === 'pt' ? "Domingo" : "Sunday" }</option>
        <option value="monday">{props.valueLanguage === 'pt' ? "Segunda" : "Monday" }</option>
        <option value="tuesday">{props.valueLanguage === 'pt' ? "Terça" : "Tuesday" }</option>
        <option value="wednesday">{props.valueLanguage === 'pt' ? "Quarta" : "Wednesday" }</option>
        <option value="thursday">{props.valueLanguage === 'pt' ? "Quinta" : "Thursday" }</option>
        <option value="friday">{props.valueLanguage === 'pt' ? "Sexta" : "Friday" }</option>
        <option value="saturday">{props.valueLanguage === 'pt' ? "Sabado" : "Saturday" }</option>
      </select>
    </div>

    </>
  )
}

export default Select;