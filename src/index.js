import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import data from  './component/data/data.json'

import "./styles.css";


function Seccion(e){

  if (e.e.tipo === 'animada') {
    return (
        <div className="section" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }} >
        <div className="container">
            <h3>{e.e.titulo} {e.e.tipo}</h3>  
          </div> 
        </div>
      );
  } else if (e.e.tipo === 'slide'){
    return (
        <div className="section">
          <div className="container">
            <h3>{e.e.titulo} {e.e.tipo}</h3>
            { <img src={`${e.e.fondo?e.e.fondo:null}`} alt={`${e.e.titulo?e.e.titulo:null}`}/> }
          </div>
        </div>
      );
  }else if (e.e.tipo === 'normal') {
    return (
        <div className="section">
          <h3>{e.e.titulo} {e.e.tipo}</h3>
          { <img src={`${e.e.fondo?e.e.fondo:null}`} alt={`${e.e.titulo?e.e.titulo:null}`}/> }
          
        </div>
      );
  }

}


const fullpageOptions = {
  licenseKey : '26AD47C0-F26141E8-921BC9B5-2C769097',
  scrollingSpeed : '2000',
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
