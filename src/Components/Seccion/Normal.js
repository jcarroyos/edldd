import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function Normal({ e, moveSectionDown }) {
  return (
    <div
      className="section normal"
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="veladura"></div>
      <div className="container">
        {typeof e.e.titulo !== 'undefined' && e.e.titulo !== '' && (
          <h2>{ReactHtmlParser(e.e.titulo)}</h2>
        )}
        <div className="textos">
          {Boolean(e.e.textos)
            ? e.e.textos.map((t) => (
                <p className="parrafo hidden" key={t.parrafo}>
                  {ReactHtmlParser(t.parrafo)}
                </p>
              ))
            : null}
        </div>
      </div>
      <div className="page_Animation">
        {e.e.capas.superiorDerecha !== '' && (
          <div
            className="capa capa_uno superiorDerecha"
            style={{
              backgroundImage: `url(${
                e.e.capas.superiorDerecha ? e.e.capas.superiorDerecha : null
              })`,
            }}
          ></div>
        )}
        {e.e.capas.superiorIzquierda !== '' && (
          <div
            className="capa capa_dos superiorIzquierda"
            style={{
              backgroundImage: `url(${
                e.e.capas.superiorIzquierda ? e.e.capas.superiorIzquierda : null
              })`,
            }}
          ></div>
        )}
        {e.e.capas.inferiorDerecha !== '' && (
          <div
            className="capa capa_tres inferiorDerecha"
            style={{
              backgroundImage: `url(${
                e.e.capas.inferiorDerecha ? e.e.capas.inferiorDerecha : null
              })`,
            }}
          ></div>
        )}
        {e.e.capas.inferiorIzquierda !== '' && (
          <div
            className="capa capa_cuatro inferiorIzquierda"
            style={{
              backgroundImage: `url(${
                e.e.capas.inferiorIzquierda ? e.e.capas.inferiorIzquierda : null
              })`,
            }}
          ></div>
        )}
      </div>
      {!e.last && <aside className="icon-scroll" onClick={moveSectionDown} />}
    </div>
  );
}
