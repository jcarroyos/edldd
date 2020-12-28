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
  state = {
    slideIndex: 0,
    sectionIndex: 0,
  };
  onLeave = (origin, destination, direction) => {
    this.setState({ sectionIndex: destination.index });
    onLeave(origin, destination, direction);
  };

  afterLoad = (origin, destination, direction) =>
    afterLoad(origin, destination, direction);

  onSlideLeave = (section, origin, destination, direction) =>
    this.setState({ slideIndex: destination.index });

  render() {
    return (
      <ReactFullpage
        {...fullpageOptions}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        onSlideLeave={this.onSlideLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <Fragment>
              <div>
                {data.map((e, i) => (
                  <Seccion
                    e={{ ...e, mainState: state }}
                    key={i}
                    fullpageApi={fullpageApi}
                    last={i === data.length - 1}
                    active={this.state.sectionIndex === i}
                    slideIndex={this.state.slideIndex}
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
