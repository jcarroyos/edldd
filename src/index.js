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
        menu={"#menu"}
        anchors={[
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ]}
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
