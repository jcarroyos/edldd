import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamNhcnJveW9zIiwiYSI6ImNqdzBnYnNnNzBhdjUzeXFqZXpscWFmaTMifQ.wIDKxTEiwP4QNwu2M9CtpQ',
});

export default function Mapa({ e, moveSectionDown, fullpageApi }) {
  return (
    <div className="section mapa">
      <div className="container">
        <div className="Textos">
          <p>Sección en construcción</p>
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
        <aside className="icon-scroll hidden" onClick={moveSectionDown} />
      )}
    </div>
  );
}
