import React, { useState } from 'react';

function Select(props) {

  return(
    <> 
      <label>{props.valueLanguage === 'pt' ? "Idioma" : "Language"}</label>
      <select onChange={props.changeLanguage} name="select">
        <option value="portugues">Portugues</option>
        <option value="ingles">Ingles</option>
      </select>

    <div style={{ display: props.valueLanguage === 'pt' ? "block" : "none" }}>
      <label>Dias da semana</label>
      <select onChange={props.daysWeek} name="select">
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda</option>
        <option value="terca">Terça</option>
        <option value="quarta">Quarta</option>
        <option value="quinta">Quinta</option>
        <option value="sexta">Sexta</option>
        <option value="sabado">Sabado</option>
      </select>
    </div>

    <div style={{ display: props.valueLanguage === 'en' ? "block" : "none" }}> 
          <label>Days of the week</label>
          <select onChange={props.daysWeek} name="select">
              <option value="domingo">Sunday</option>
              <option value="segunda">Monday</option>
              <option value="terca">Tuesday</option>
              <option value="quarta">Wednesday</option>
              <option value="quinta">Thursday</option>
              <option value="sexta">Friday</option>
              <option value="sabado">Saturday</option>
          </select>
        </div>
    </>
  )
}

export default Select;