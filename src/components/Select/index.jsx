import React from 'react';

function Select(props) {
  const language = e =>{
    if(e.target.value === "ingles"){
      alert('ok ok')
    }
  }
  const daysWeek = e => {
      return e.target.value;
  }

  return(
    <> 
      <label for="">Idioma</label>
      <select onChange={language} name="select">
        <option value="portugues">Portugues</option>
        <option value="ingles">Ingles</option>
      </select>

      <label for="">Dias da semana</label>
      <select onChange={daysWeek} name="select">
        <option value="domingo">Domingo</option>
        <option value="segunda">Segunda</option>
        <option value="terca">Terça</option>
        <option value="quarta">Quarta</option>
        <option value="quinta">Quinta</option>
        <option value="sexta">Sexta</option>
        <option value="sabado">Sabado</option>
      </select>
    </>
  )
}

export default Select;