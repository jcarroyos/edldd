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
        <div className="section" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }} >
          <div className="container">
              <h3 className="animate__animated animate__backInLeft animate__delay-1s">{e.e.titulo}</h3>  
              <code>{e.e.tipo}</code> <br/>
              <code>{e.e.capas.uno}</code>  
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
  scrollingSpeed : '1000',
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec","#282c34", "#ff5f45", "#0798ec","#282c34", "#ff5f45", "#0798ec"]
};

const FullpageWrapper = () => (
  <ReactFullpage
    {...fullpageOptions}
    callbacks={["afterRender"]}
    render={({ state, fullpageApi }) => {
      //console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      // TODO: bug that isn't getting the diff between render functions
      // if you comment out this block it will render, however there will be no re-firing of the mount cycle for <Seccion/>
      // will fix ASAP

      if (!state.initialized) {
        return <div className="section" />;
      }

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


ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
