import React from 'react';

export default function Normal({ e, moveSectionDown }) {
  return (
    <div
      className="section normal"
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="veladura"></div>
      <div className="container">
        <div className="row col-xs-12 col-sm-8 col-md-offset-2">
          {typeof e.e.titulo !== 'undefined' && e.e.titulo !== '' && (
            <h2>{e.e.titulo}</h2>
          )}
          <div className="textos">
            {Boolean(e.e.textos)
              ? e.e.textos.map((t) => (
                  <div className="parrafo hidden" key={t.parrafo}>
                    {t.parrafo}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {!e.last && <aside className="icon-scroll" onClick={moveSectionDown} />}
    </div>
  );
}
