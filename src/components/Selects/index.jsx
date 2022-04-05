import React from 'react';

function Select(props) {

  return(
    <> 
      <h3>{props.valueLanguage === 'pt' ? "Idioma" : "Language"}</h3>
      <select onChange={props.changeLanguage} name="select">
        <option value="portugues">Portugues</option>
        <option value="ingles">Ingles</option>
      </select>

    <div>
      <h3>{props.valueLanguage === 'pt' ? "Dias da semana" : "Days of the week" }</h3>
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