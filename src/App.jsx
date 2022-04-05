import React, { useState } from 'react';
import './App.css';
import Selects from './components/Selects';
import Card from './components/Card';

const data = {
  pt: {
    sunday: {
      title:"Domingo",
      description:"Uma homenagem ao deus romano Sun que significa sol em Inglês"
    },
    monday: {
      title: "Segunda",
      description: "'Monday' recebe seu nome por conta da Lua. Sabendo que Lua em inglês é 'moon', logo compreendemos: 'Moon Day'. Este dia empresta seu nome à expressão 'Monday blues', que se relaciona com aquele sentimento de desânimo ligado ao início de uma nova semana."
    },
    tuesday: {
      title: "Terca",
      description: "Marte foi o planeta escolhido para este dia. Para os romanos, Marte representava o deus da Guerra e para os nórdicos, o deus da guerra correspondente era Tyr, o qual assume o nome de 'Tuesday'. As línguas com origem românica, como espanhol, francês e italiano, apresentam nomes bastante similares para terça-feira, já que a inspiração é a mesma (martes, mardi e martedi)."
    },
    wednesday: {
      title:"Quarta",
      description:"Quarta-feira é sinônimo de confusão no inglês, uma vez que sua pronúncia parece despertar dificuldade e estranhamento até em nativos. A mitologia Nórdica aparece mais uma vez nos nomes dos dias da semana, sua presença sendo ilustrada por Odin, o deus da sabedoria, que também era ocasionalmente chamado de Woden. Na França, por exemplo, esse dia da semana é conhecido como mercredi graças a Mercúrio, o Deus romano da inteligência. E sim: ele está diretamente associado a Odin!"
    },
    thursday: {
      title:"Quinta",
      description:"Com o final de semana no horizonte, temos a quinta-feira, ou 'Thursday', o dia do Thor. Sim, aquele com o cabelão e o martelo! Thor é conhecido como o deus do trovão ('thunder') na mitologia Nórdica, e influenciou diretamente o nome deste dia – em dinamarquês, por exemplo, quinta-feira é Torsdag e, em finlandês, Torstai."
    },
    friday: {
      title:"Sexta",
      description:"A sexta-feira recebe o nome de 'Friday' em inglês por conta da deusa Nórdica Frigg, que é associada com o casamento e o amor, embora Freyja, outra deusa importantíssima do panteão nórdico, seja ainda mais associada com o amor. Há hipóteses que sustentam que os dois mitos tenham uma origem em comum. Já na cultura latina, sexta-feira é conhecida como “dies veneris”, ou o 'dia de Vênus', a deusa romana do am"
    },
    saturday: {
      title:"Sábado",
      description:"Com o final de semana no horizonte, temos a quinta-feira, ou 'Thursday', o dia do Thor. Sim, aquele com o cabelão e o martelo! Thor é conhecido como o deus do trovão ('thunder') na mitologia Nórdica, e influenciou diretamente o nome deste dia – em dinamarquês, por exemplo, quinta-feira é Torsdag e, em finlandês, Torstai."
    },

  },

  eng: {
    sunday: {
      title:"Sunday",
      description:"A tribute to the Roman god Sun which means sun in English"
    },
    monday: {
      title: "Monday",
      description: "'Monday' is named after the Moon. Knowing that Lua in English is 'moon', we soon understand: 'Moon Day'. This day lends its name to the expression 'Monday blues', which relates to that feeling of despondency attached to the start of a new week."
    },
    tuesday: {
      title: "Tuesday",
      description: "Mars was the planet chosen for this day. For the Romans, Mars represented the god of War and for the Norse, the corresponding god of war was Tyr, who takes the name of 'Tuesday'. Languages ​​with Romance origins, such as Spanish, French and Italian, have very similar names for Tuesday, as the inspiration is the same (Martes, Mardi and Martedi)."
    },
    wednesday: {
      title:"Wednesday",
      description:"Wednesday is synonymous with confusion in English, since its pronunciation seems to arouse difficulty and strangeness even in native speakers. Norse mythology appears once again in the names of the days of the week, their presence being illustrated by Odin, the god of wisdom, who was also occasionally called Woden. In France, for example, this day of the week is known as mercredi thanks to Mercury, the Roman god of intelligence. And yes: he is directly associated with Odin!"
    },
    thursday: {
      title:"Thursday",
      description:"With the weekend on the horizon, we have Thursday, or 'Thursday', the day of Thor. Yes, the one with the big hair and the hammer! Thor is known as the god of thunder ('thunder') in Norse mythology, and directly influenced the name of this day – in Danish, for example, Thursday is Torsdag and in Finnish, Torstai."
    },
    friday: {
      title:"Friday",
      description:"Friday is named 'Friday' in English after the Norse goddess Frigg, who is associated with marriage and love, although Freyja, another very important goddess in the Norse pantheon, is even more associated with love. There are hypotheses that support that the two myths have a common origin. In Latin culture, Friday is known as 'dies veneris', or the 'day of Venus', the Roman goddess of love."
    },
    saturday: {
      title:"saturday",
      description:"With the weekend on the horizon, we have Thursday, or 'Thursday', the day of Thor. Yes, the one with the big hair and the hammer! Thor is known as the god of thunder ('thunder') in Norse mythology, and directly influenced the name of this day – in Danish, for example, Thursday is Torsdag and in Finnish, Torstai."
    },

  },
};

function App() {
  document.title = 'Dias semana React'
  const [valueLanguage, setLanguage] = useState('pt');
  const [valueDaysWeek, setValueDaysWeek] = useState('')

  const changeLanguage = e =>{
    if(e.target.value === 'portugues'){
      setLanguage('pt');
    }else{
      setLanguage('en');
    }
  }

  const daysWeek = e => {
    setValueDaysWeek(e.target.value);
  }


  return (
    <div className="App">
      <div className='container'> 
        <Selects 
          data={data}
          changeLanguage={changeLanguage}
          valueLanguage={valueLanguage}
          daysWeek={daysWeek}
        />
      </div>
        <Card 
          valueLanguage={valueLanguage}
          daysWeek={daysWeek}
          data={data}
          valueDaysWeek={valueDaysWeek}
        />
    </div>
  );
}

export default App;
