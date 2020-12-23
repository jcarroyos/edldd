import React from 'react';

export default function Seccion(e) {
  if (e.e.tipo === 'animada') {
    return (
      <div className="section animada">
        <div className="container">
          <div className="row">
            <div className="textos col-sm-10">
              {e.e.titulo !== '' && (
                <h2 className="titulo hidden">{e.e.titulo}</h2>
              )}
              {e.e.subtitulo !== '' && (
                <h3 className="subtitulo hidden">{e.e.subtitulo}</h3>
              )}
              {Boolean(e.e.textos)
                ? e.e.textos.map((t) => (
                    <div className="txt" key={t.parrafo}>
                      {t.parrafo}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className="page_Animation">
          {e.e.capas.uno !== '' && (
            <div
              className="capa capa_uno"
              style={{
                backgroundImage: `url(${e.e.capas.uno ? e.e.capas.uno : null})`,
              }}
            ></div>
          )}
          <div className="veladura"></div>
          {e.e.capas.dos !== '' && (
            <div
              className="capa capa_dos"
              style={{
                backgroundImage: `url(${e.e.capas.dos ? e.e.capas.dos : null})`,
              }}
            ></div>
          )}
          {e.e.capas.tres !== '' && (
            <div
              className="capa capa_tres"
              style={{
                backgroundImage: `url(${
                  e.e.capas.tres ? e.e.capas.tres : null
                })`,
              }}
            ></div>
          )}
          {e.e.capas.cuatro !== '' && (
            <div
              className="capa capa_cuatro"
              style={{
                backgroundImage: `url(${
                  e.e.capas.cuatro ? e.e.capas.cuatro : null
                })`,
              }}
            ></div>
          )}
          {e.e.capas.cinco !== '' && (
            <div
              className="capa capa_cinco"
              style={{
                backgroundImage: `url(${
                  e.e.capas.cinco ? e.e.capas.cinco : null
                })`,
              }}
            ></div>
          )}
        </div>
      </div>
    );
  } else if (e.e.tipo === 'solovideo') {
    return (
      <div className="section">
        {e.e.video !== '' && (
          <video id={e.e.index} data-autoplay>
            <source data-src={e.e.video_mp4} type="video/mp4" />
            <source data-src={e.e.video_webm} type="video/webm" />
          </video>
        )}
      </div>
    );
  } else if (e.e.tipo === 'slide') {
    return (
      <div
        className="section carousel"
        style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
      >
        <div className="veladura"></div>
        <div className="container">
          <div className="row">
            {e.e.titulo !== '' && <h3 className="titulo">{e.e.titulo}</h3>}
            {e.e.slide.map((item, index) => (
              <div key={index} className="slide">
                <div className="col-xs-12 col-sm-8 col-md-offset-2">
                  <h4>{item.titulo}</h4>
                  <p>{item.descripcion}</p>
                  <ul>
                    {Boolean(item.lista)
                      ? item.lista.map((li) => (
                          <li key={li.texto}>{li.texto}</li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (e.e.tipo === 'normal') {
    return (
      <div
        className="section normal"
        style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
      >
        <div className="veladura"></div>
        <div className="container">
          <div className="row col-xs-12 col-sm-8 col-md-offset-2">
            {e.e.titulo !== '' && <h2>{e.e.titulo}</h2>}
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
      </div>
    );
  }
}
