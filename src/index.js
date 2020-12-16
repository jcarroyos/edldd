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
        <div className="section animada">
          <div className="container">  
            <div className="row">
                <div className="textos col-sm-10">
                  {e.e.titulo !== '' &&
                    <h2 className="titulo hidden">{e.e.titulo}</h2>
                  }
                  {e.e.subtitulo !== '' &&
                    <h3 className="subtitulo hidden">{e.e.subtitulo}</h3>
                  }
                  {Boolean(e.e.textos)?
                    e.e.textos.map((t)=>(   
                      <div className="txt" key={t.parrafo}>{t.parrafo}</div>
                    ))
                  :null}
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
          {e.e.video !== '' &&
          <video id={e.e.index} data-autoplay>
            <source data-src={e.e.video_mp4} type="video/mp4"/>
            <source data-src={e.e.video_webm} type="video/webm"/>
          </video>
          }
        </div>
      );
  } else if (e.e.tipo === 'slide'){
    return (
        <div className="section" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }}>
          <div className="container">
            <div className="row"> 
              {e.e.slide.map((item, index) =>(
                  <div key={index} className="slide">
                  <div className="col-sm-8 col-sm-offset-2">
                    <p>{item.descripcion}</p>
                    <ul>
                      {Boolean(item.lista)?
                        item.lista.map((li)=>(   
                          <li key={li.texto}>{li.texto}</li>
                        )):null}
                    </ul>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      );
  } else if (e.e.tipo === 'normal') {
    return (
        <div className="section normal" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }}>
            <div className="container">
            <div className="row"> 
              <div className="textos col-sm-10">
                {Boolean(e.e.textos)?
                  e.e.textos.map((t)=>(   
                    <div className="parrafo" key={t.parrafo}>{t.parrafo}</div>
                  ))
                :null}
              </div>
            </div>
          </div>
          
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
  verticalCentered: true,
  //Accessibility
	keyboardScrolling: true
};

class FullpageWrapper extends React.Component {

  onLeave(origin, destination, direction) {
    //console.log("Leaving section " + origin.index);

    // capas seccion animada
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
    );
    // textos
    [...document.querySelectorAll('.textos')].map(x => 
      x.classList.remove('animate__animated', 'animate__fadeIn')
    );
    [...document.querySelectorAll('.titulo')].map(x =>
      x.classList.add('hidden') + 
      x.classList.remove('animate__animated', 'animate__fadeInDown')
    );
    [...document.querySelectorAll('.subtitulo')].map(x =>
      x.classList.add('hidden') + 
      x.classList.remove('animate__animated', 'animate__fadeInDown')
    );
    [...document.querySelectorAll('.textos > .txt')].map(x =>
      x.classList.add('hidden') + 
      x.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__delay-4s')
    );
    [...document.querySelectorAll('section.normal .textos > .txt')].map(x =>
      x.classList.add('hidden') + 
      x.classList.remove('animate__animated', 'animate__fadeInUp', 'animate__delay-1s')
    )

  }
  afterLoad(origin, destination, direction) {
    //console.log("After load: " + destination.index);

    // capas seccion animada
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
    );
    // textos
    [...document.querySelectorAll('.textos')].map(x => 
      x.classList.add('animate__animated', 'animate__fadeIn')
    );
    [...document.querySelectorAll('.titulo')].map(x =>
      x.classList.remove('hidden') + 
      x.classList.add('animate__animated', 'animate__fadeInDown')
    );
    [...document.querySelectorAll('.subtitulo')].map(x =>
      x.classList.remove('hidden') + 
      x.classList.add('animate__animated', 'animate__fadeInDown')
    );
    [...document.querySelectorAll('.textos > .txt')].map(x =>
      x.classList.remove('hidden') + 
      x.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-4s')
    );
    [...document.querySelectorAll('section.normal .textos > .txt')].map(x =>
      x.classList.remove('hidden') + 
      x.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s')
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
            {data.map((e, index)=>(
              <Seccion e={e} key={index}/>
            ))}
          </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));