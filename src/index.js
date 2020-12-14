import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "mini.css";
import 'animate.css';
import data from './data.json'
import "./styles.css";

function Seccion(e){
  if (e.e.tipo === 'animada') {
    return (
        <div className="section">
          <code>{e.e.id}</code>
          <div className="container">  
            <div className="row">
                <div className="title col-sm-8 animate__animated animate__zoomIn animate__delay-1s">
                  {e.e.titulo !== '' &&
                    <h1>{e.e.titulo}</h1>
                  }
                  <div className="card animate__animated animate__fadeInUp animate__delay-2s">{e.e.texto1}</div>
                  {e.e.texto2 !== '' &&
                    <div className="card animate__animated animate__fadeInUp animate__delay-2s">{e.e.texto2}</div>
                  }
                  {e.e.video !== '' &&
                    <div className="media">
                      <iframe title="video" width="560" height="315" src={e.e.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  }
                </div>
            </div>
          </div>
          <div className="page_Animation">
            {e.e.capas.uno !== '' &&
              <div className="capa capa_uno" style={{ backgroundImage:`url(${e.e.capas.uno?e.e.capas.uno:null})` }}></div>
            }
            {e.e.capas.dos !== '' &&
              <div className="capa capa_dos" style={{ backgroundImage:`url(${e.e.capas.dos?e.e.capas.dos:null})` }}></div>
            }
            {e.e.capas.tres !== '' &&
              <div className="capa capa_tres" style={{ backgroundImage:`url(${e.e.capas.tres?e.e.capas.tres:null})` }}></div>
            }
            {e.e.capas.cuatro !== '' &&
              <div className="capa capa_cuatro" style={{ backgroundImage:`url(${e.e.capas.cuatro?e.e.capas.cuatro:null})` }}></div>
            }
            {e.e.capas.cinco !== '' &&
              <div className="capa capa_cinco" style={{ backgroundImage:`url(${e.e.capas.cinco?e.e.capas.cinco:null})` }}></div>
            }
          </div>
        </div>
      );
  } else if (e.e.tipo === 'solovideo'){
    return (
        <div className="section">
          <code>{e.e.id}</code>
          {e.e.video !== '' &&
          <video muted data-autoplay>
            <source data-src={e.e.video_webm} type="video/webm"/>
            <source data-src={e.e.video_mp4} type="video/mp4"/>
          </video>
          }
        </div>
      );
  } else if (e.e.tipo === 'slide'){
    return (
        <div className="section">
          <div className="container">
            <h3>{e.e.titulo}</h3>
            <code>{e.e.tipo}</code>
            { <img src={`${e.e.fondo?e.e.fondo:null}`} alt={`${e.e.titulo?e.e.titulo:null}`}/> }
          </div>
        </div>
      );
  } else if (e.e.tipo === 'normal') {
    return (
        <div className="section">
          <h3>{e.e.titulo}</h3>
          <code>{e.e.tipo}</code>
          { <img src={`${e.e.fondo?e.e.fondo:null}`} alt={`${e.e.titulo?e.e.titulo:null}`}/> }
          
        </div>
      );
  } else if (e.e.tipo === 'intro') {
    return (
      <div className="section" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }} >
        <div className="container">
            <h3 className="animate__animated animate__backInLeft animate__delay-1s">{e.e.titulo}</h3>  
            <code>{e.e.tipo}</code> <br/>
            <code>{e.e.capas.uno}</code>  
          </div> 
      </div>
      );
  }
}

const fullpageOptions = {
  licenseKey : '26AD47C0-F26141E8-921BC9B5-2C769097',
  scrollingSpeed : '1000',
  scrollOverflow:false,
  navigation:true,
  sectionsColor:["#006D72"],
  loopBottom: true,
  slidesNavigation: true,
  navigationPosition: 'right',
  verticalCentered: true
};

class FullpageWrapper extends React.Component {

  onLeave(origin, destination, direction) {
    //console.log("Leaving section " + origin.index);
    [...document.querySelectorAll('.capa_uno')].map(x => 
        x.classList.add('hidden') +
        x.classList.remove('animate__animated', 'animate__fadeIn')
      );
    [...document.querySelectorAll('.capa_dos')].map(x => 
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__slideInUp', 'animate__delay-1s')
    );
    [...document.querySelectorAll('.capa_tres')].map(x => 
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__delay-2s')
    );
    [...document.querySelectorAll('.capa_cuatro')].map(x => 
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__slideInRight', 'animate__delay-3s')
    );
    [...document.querySelectorAll('.capa_cinco')].map(x => 
      x.classList.add('hidden') +
      x.classList.remove('animate__animated', 'animate__slideInRight', 'animate__delay-4s')
    )
  }
  afterLoad(origin, destination, direction) {
    //console.log("After load: " + destination.index);
    [...document.querySelectorAll('.capa_uno')].map(x => 
      x.classList.remove('hidden') + 
      x.classList.add('animate__animated', 'animate__fadeIn')
    );
    [...document.querySelectorAll('.capa_dos')].map(x => 
      x.classList.remove('hidden') +
      x.classList.add('animate__animated', 'animate__slideInUp', 'animate__delay-1s')
    );
    [...document.querySelectorAll('.capa_tres')].map(x => 
      x.classList.remove('hidden') +
      x.classList.add('animate__animated', 'animate__slideInLeft', 'animate__delay-2s')
    );
    [...document.querySelectorAll('.capa_cuatro')].map(x => 
      x.classList.remove('hidden') +
      x.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-3s')
    );
    [...document.querySelectorAll('.capa_cinco')].map(x => 
      x.classList.remove('hidden') +
      x.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-4s')
    )
  }
  render() {
    return (
      <ReactFullpage
        {...fullpageOptions}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div>
            {data.map((e)=>(
              <Seccion e={e} key={e.id}/>
            ))}
          </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));