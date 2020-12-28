import React, { useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Slide from './Slide';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamNhcnJveW9zIiwiYSI6ImNqdzBnYnNnNzBhdjUzeXFqZXpscWFmaTMifQ.wIDKxTEiwP4QNwu2M9CtpQ',
});

export default function Mapa({ e, moveSectionDown, fullpageApi }) {
  useEffect(() => {
    fullpageApi ? fullpageApi.setKeyboardScrolling(!e.active, 'all') : null;
    console.log(fullpageApi ? fullpageApi.getActiveSlide() : null);
    return () => {};
  }, [e.active]);
  return (
    <div className="section mapa">
      <div className="container">
        <div className="textos">
          <Slide e={{ ...e, last: true }} mapa={true} />
        </div>
        <Map
          style="mapbox://styles/jcarroyos/ckg1dqdsl16ba19o7sj5kxvvr"
          containerStyle={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
      {!e.last && (
        <aside className="icon-scroll u-scroll" onClick={moveSectionDown} />
      )}
    </div>
  );
}
