import React from 'react';
import Animada from './Animada';
import Normal from './Normal';
import Slide from './Slide';
import Video from './Video';
import Mapa from './Mapa';
import Audio from './Audio';
import Tableau from './Tableau';

export default function Seccion(e) {
  function moveSectionDown() {
    if (typeof e !== 'undefined') {
      if (typeof e.fullpageApi !== 'undefined') {
        e.fullpageApi.moveSectionDown();
      }
    }
  }
  switch (e.e.tipo) {
    case 'animada':
      return <Animada e={e} moveSectionDown={moveSectionDown} />;
    case 'solovideo':
      return <Video e={e} moveSectionDown={moveSectionDown} />;
    case 'slide':
      return <Slide e={e} moveSectionDown={moveSectionDown} />;
    case 'mapa':
      return <Mapa e={e} moveSectionDown={moveSectionDown} />;
    case 'audio':
      return <Audio e={e} moveSectionDown={moveSectionDown} />;
    case 'tableau':
      return <Tableau e={e} moveSectionDown={moveSectionDown} />;
    default:
      return <Normal e={e} moveSectionDown={moveSectionDown} />;
  }
}
