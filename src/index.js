/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

//import IntroAnimada from './component/introAnimada';
import data from  './component/data/data.json'

import "./styles.css";

// class Animada extends React.Component {
//   render() {
//     return (
//       <div className="section">       
//         <IntroAnimada />
//       </div>
//     );
//   }
// }

function MySection(e){




if (e.e.tipo == 'animada') {
   return (
      <div className="section" style={{ backgroundImage:`url(${e.e.fondo?e.e.fondo:null})` }} >
       <div class="container">
          <h3>{e.e.titulo} {e.e.tipo}</h3>  
        </div> 
      </div>
    );
} else if (e.e.tipo == 'slide'){
  return (
      <div className="section">
        <div class="container">
          <h3>{e.e.titulo} {e.e.tipo}</h3>
          { <img src={`${e.e.fondo?e.e.fondo:null}`}/> }
        </div>
      </div>
    );
}else if (e.e.tipo == 'normal') {
   return (
      <div className="section">
        <h3>{e.e.titulo} {e.e.tipo}</h3>
        { <img src={`${e.e.fondo?e.e.fondo:null}`}/> }
        
      </div>
    );
}

}

// class MySection extends React.Component { 
//   render() {
//     return (
//       <div className="section">
//         <h3>{this.props.content}</h3>
//       </div>
//     );
//   }
// }


const fullpageOptions = {
  licenseKey : '4%2M$#W?x0',
  scrollingSpeed : '2000',
  sectionsColor: ["#282c34", "#ff5f45", "#0798ec","#282c34", "#ff5f45", "#0798ec","#282c34", "#ff5f45", "#0798ec"]
};

const FullpageWrapper = () => (
  <ReactFullpage
    {...fullpageOptions}
    callbacks={["afterRender"]}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      // TODO: bug that isn't getting the diff between render functions
      // if you comment out this block it will render, however there will be no re-firing of the mount cycle for <MySection/>
      // will fix ASAP

      if (!state.initialized) {
        return <div className="section" />;
      }

      return (
        <div>
          {/* <Animada fullpageApi={fullpageApi} content={"Sección *animada*"} />
          <MySection fullpageApi={fullpageApi} content={"Sección *slides*"} />
          <MySection fullpageApi={fullpageApi} content={"Sección *normal*"} /> */}
          {data.map((e)=>(
            <MySection e={e}/>
          ))}
        </div>
      );
    }}
  />
);


ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));
