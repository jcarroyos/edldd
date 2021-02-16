import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PageAnimation from '../PageAnimation';

export default function Animada({ e, moveSectionDown }) {
  return (
    <div className="section animada">
      <div className="container">
        <div className="textos">
          {e.e.titulo !== '' && (
            <h2 className="titulo hidden">{ReactHtmlParser(e.e.titulo)}</h2>
          )}
          {e.e.subtitulo !== '' && (
            <h3 className="subtitulo hidden">
              {ReactHtmlParser(e.e.subtitulo)}
            </h3>
          )}
          {Boolean(e.e.textos)
            ? e.e.textos.map((t) => (
                <div className="txt" key={t.parrafo}>
                  {ReactHtmlParser(t.parrafo)}
                </div>
              ))
            : null}
        </div>
      </div>

      {e.e.capas ? <PageAnimation e={e} /> : null}
      {!e.last && (
        <aside className="icon-scroll hidden" onClick={moveSectionDown} />
      )}
    </div>
  );
}
