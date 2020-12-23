import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import 'mini.css';
import 'animate.css';
import data from './data.json';
import './styles.css';
import Seccion from './Components/Seccion';

import onLeave from './helpers/onLeave';
import afterLoad from './helpers/afterLoad';
import fullpageOptions from './helpers/fullpageOptions';

class FullpageWrapper extends React.Component {
  onLeave = (origin, destination, direction) =>
    onLeave(origin, destination, direction);

  afterLoad = (origin, destination, direction) =>
    afterLoad(origin, destination, direction);

  render() {
    return (
      <ReactFullpage
        {...fullpageOptions}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, moveSectionUp, moveSectionDown }) => {
          console.log(state);
          return (
            <Fragment>
              {/* {index !== 0 ? <button className="u-button u-button-up" onClick={moveSectionUp}>Hola</button> : null} */}
              <div>
                {data.map((e, i) => (
                  <Seccion e={e} key={i} />
                ))}
              </div>
            </Fragment>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById('react-root'));

var previousOrientation = window.orientation;
var checkOrientation = function () {
  if (window.orientation !== previousOrientation) {
    previousOrientation = window.orientation;
    alert(
      'Recomendamos usar esta app desde su celular en orientación vertical'
    );
  }
};

window.addEventListener('resize', checkOrientation, false);
window.addEventListener('orientationchange', checkOrientation, false);

// (optional) Android doesn't always fire orientationChange on 180 degree turns
setInterval(checkOrientation, 2000);
