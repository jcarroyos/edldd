import React, { useEffect, useState } from 'react';
import AudioPlayer, { toggleAudio } from 'react-playlist-player';
import PageAnimation from '../PageAnimation';
import ReactHtmlParser from 'react-html-parser';

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
      style={{ backgroundImage: `url(${e.e.fondo ? e.e.fondo : ''})` }}
    >
      <div className="container">
        <AudioPlayer currentPlayList={currentPlayList} />

        {typeof e.e.ayuda !== 'undefined' && e.e.ayuda !== '' && (
        <div className="ayuda">
          {ReactHtmlParser(e.e.ayuda)}
          </div>
        )}
      </div>
      
      {e.e.capas ? <PageAnimation e={e} /> : null}
      {!e.last && <aside className="icon-scroll" onClick={moveSectionDown} />}
    </div>
  );
}
