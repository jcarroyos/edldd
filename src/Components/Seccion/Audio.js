import React, { useEffect, useState } from 'react';
import AudioPlayer, { toggleAudio } from 'react-playlist-player';

export default function Audio({ e, moveSectionDown }) {
  const [currentPlayList, setCurrentPlayList] = useState({});
  useEffect(() => {
    if (e.active) {
      setCurrentPlayList(e.e.audios);
    } else {
      setCurrentPlayList({});
    }
    toggleAudio();
  }, [e.active]);
  return (
    <div
      className="section audios"
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="container">
        <AudioPlayer
          currentPlayList={currentPlayList}
          onToggle={({ audioPlaying }) => console.log({ audioPlaying })}
        />
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
              backgroundImage: `url(${e.e.capas.tres ? e.e.capas.tres : null})`,
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
      {!e.last && <aside className="icon-scroll" onClick={moveSectionDown} />}
    </div>
  );
}
