import React from 'react';
import Animada from './Animada';
import Normal from './Normal';
import Slide from './Slide';
import Video from './Video';
import Mapa from './Mapa';

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
    default:
      return <Normal e={e} moveSectionDown={moveSectionDown} />;
  }
}
