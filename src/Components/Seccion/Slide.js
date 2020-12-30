import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function Slide({ e, moveSectionDown, mapa }) {
  return (
    <div
      className={mapa ? 'mapaSlide' : 'section carousel'}
      style={{ backgroundImage: `url(edldd/${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="container">
        {e.e.titulo !== '' && (
          <h3 className="titulo">{ReactHtmlParser(e.e.titulo)}</h3>
        )}
        {e.e.slide.map((item, index) => (
          <div key={index} className="slide">
            <div className="slide-container">
              <h4>{ReactHtmlParser(item.titulo)}</h4>
              {item.descripcion && <p>{ReactHtmlParser(item.descripcion)}</p>}
              <ul>
                {Boolean(item.lista)
                  ? item.lista.map((li) => (
                      <li key={li.texto}>{ReactHtmlParser(li.texto)}</li>
                    ))
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
