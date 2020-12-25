import React from 'react';

export default function Slide({ e, moveSectionDown }) {
  return (
    <div
      className="section carousel"
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="veladura"></div>
      <div className="container">
        {e.e.titulo !== '' && <h3 className="titulo">{e.e.titulo}</h3>}
        {e.e.slide.map((item, index) => (
          <div key={index} className="slide">
            <div className="slide-container">
              <h4>{item.titulo}</h4>
              <p>{item.descripcion}</p>
              <ul>
                {Boolean(item.lista)
                  ? item.lista.map((li) => <li key={li.texto}>{li.texto}</li>)
                  : null}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {!e.last && (
        <aside className="icon-scroll u-scroll" onClick={moveSectionDown} />
      )}
    </div>
  );
}
