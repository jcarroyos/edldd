import React, { useEffect, useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Slide from './Slide';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamNhcnJveW9zIiwiYSI6ImNqdzBnYnNnNzBhdjUzeXFqZXpscWFmaTMifQ.wIDKxTEiwP4QNwu2M9CtpQ',
  interactive: false,
});

export default function Mapa({ e, moveSectionDown }) {
  const [center, setCenter] = useState([-74.2478945, 4.6486259]);
  const [zoom, setZoom] = useState([11]);
  useEffect(() => {
    if (e.active) {
      setCenter(e.e.slide[e.slideIndex].mapa.center);
      setZoom([e.e.slide[e.slideIndex].mapa.zoom]);
    }
  }, [e.active, e.slideIndex]);
  return (
    <div
      className="section mapa"
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="container">
        <div className="textos">
          <Slide
            e={{ ...e, last: true, e: { ...e.e, fondo: '' } }}
            mapa={true}
          />
        </div>
        <Map
          style="mapbox://styles/jcarroyos/ckg1dqdsl16ba19o7sj5kxvvr"
          containerStyle={{
            height: '100%',
            width: '100%',
          }}
          center={center}
          zoom={zoom}
        />
      </div>
      {!e.last && (
        <aside className="icon-scroll u-scroll" onClick={moveSectionDown} />
      )}
    </div>
  );
}
