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
        render={({ state, fullpageApi }) => {
          return (
            <Fragment>
              <div>
                {data.map((e, i) => (
                  <Seccion
                    index={state.destination ? state.destination.index : 0}
                    e={{ ...e, mainState: state }}
                    key={i}
                    fullpageApi={fullpageApi}
                    last={i === data.length - 1}
                    active={
                      state.destination ? state.destination.index === i : false
                    }
                  />
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
