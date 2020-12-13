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
          <div className="container animate__animated animate__slideInUp animate__delay-1s">  
            <div className="row">
                <div className="title col-sm-8">
                    <h1>{e.e.titulo}</h1>
                    <blockquote cite="www.quotation.source">This is some text quoted from elsewhere.</blockquote>
                </div>
            </div>
          </div>
          <div className="page_Animation">
              <div className="capa capa_uno hidden" style={{ backgroundImage:`url(${e.e.capas.uno?e.e.capas.uno:null})` }}></div>
              <div className="capa capa_dos animate__animated animate__slideInUp animate__delay-2s" style={{ backgroundImage:`url(${e.e.capas.dos?e.e.capas.dos:null})` }}></div>
              <div className="capa capa_tres hidden" style={{ backgroundImage:`url(${e.e.capas.tres?e.e.capas.tres:null})` }}></div>
              <div className="capa capa_cuatro animate__animated animate__slideInRight animate__delay-4s" style={{ backgroundImage:`url(${e.e.capas.cuatro?e.e.capas.cuatro:null})` }}></div>
              <div className="capa capa_cinco animate__animated animate__slideInUp animate__delay-5s" style={{ backgroundImage:`url(${e.e.capas.cinco?e.e.capas.cinco:null})` }}></div>
          </div>
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
  scrollingSpeed : '1000'
};

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    //console.log("Leaving section " + origin.index);
    const c1 = document.querySelector('.capa_uno');
    const c3 = document.querySelector('.capa_tres');
    c1.classList.add('hidden');
    c3.classList.add('hidden');
    c1.classList.remove('animate__animated', 'animate__fadeIn');
    c3.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__delay-1s');
  }
  afterLoad(origin, destination, direction) {
    //console.log("After load: " + destination.index);
    const c1 = document.querySelector('.capa_uno');
    const c3 = document.querySelector('.capa_tres');
    c1.classList.remove('hidden');
    c3.classList.remove('hidden');
    c1.classList.add('animate__animated', 'animate__fadeIn');
    c3.classList.add('animate__animated', 'animate__slideInLeft', 'animate__delay-1s');
  }
  render() {
    return (
      <ReactFullpage
        {...fullpageOptions}
        scrollOverflow={true}
        sectionsColor={["#006D72"]}
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

export default FullpageWrapper;