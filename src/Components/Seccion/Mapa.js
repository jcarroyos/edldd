import React, { useEffect, useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import Modal from 'react-modal';
import Slide from './Slide';
import PDFViewer from 'pdf-viewer-reactjs';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiamNhcnJveW9zIiwiYSI6ImNqdzBnYnNnNzBhdjUzeXFqZXpscWFmaTMifQ.wIDKxTEiwP4QNwu2M9CtpQ',
  interactive: false,
});
Modal.setAppElement('#modal');

export default function Mapa({ e, moveSectionDown }) {
  const [center, setCenter] = useState([-74.2478945, 4.6486259]);
  const [zoom, setZoom] = useState([11]);
  const [modal, setModal] = useState(false);
  const [indexModal, setIndexModal] = useState(0);
  useEffect(() => {
    if (e.active) {
      setCenter(e.e.slide[e.slideIndex].mapa.center);
      setZoom([e.e.slide[e.slideIndex].mapa.zoom]);
    }
  }, [e.active, e.slideIndex]);

  function openModal(index) {
    setIndexModal(index);
    setModal(true);
    e.fullpageApi.setKeyboardScrolling(false);
    e.fullpageApi.setAllowScrolling(false);
  }

  function closeModal() {
    setModal(false);
    e.fullpageApi.setKeyboardScrolling(true);
    e.fullpageApi.setAllowScrolling(true);
  }

  return (
    <div
      className="section mapa"
      style={{ backgroundImage: `url(./${e.e.fondo ? e.e.fondo : null})` }}
    >
      <div className="container">
        <div className="textos">
          <Slide
            e={{ ...e, last: true, e: { ...e.e, fondo: '' } }}
            mapa={true}
          />
        </div>
        <div className="buttons">
          <button className="button despliegue" onClick={() => openModal(0)}>
            DESPLIEGUE
          </button>
          <button className="button pta" onClick={() => openModal(1)}>
            PTA
          </button>
          <button className="button avances" onClick={() => openModal(2)}>
            AVANCES
          </button>
        </div>
        <Map
          style="mapbox://styles/jcarroyos/ckg1dqdsl16ba19o7sj5kxvvr"
          containerStyle={{
            height: '100%',
            width: '100%',
          }}
          center={center}
          zoom={zoom}
        />
      </div>

      <Modal isOpen={modal} onRequestClose={closeModal}>
        <ContentModal e={e} indexModal={indexModal} />
      </Modal>
      {!e.last && (
        <aside className="icon-scroll u-scroll" onClick={moveSectionDown} />
      )}
    </div>
  );
}

function ContentModal({ e, indexModal }) {
  if (indexModal === 0) {
    return (
      <video controls autoPlay>
        <source src="./video/DespliegueTerritorialEdLDD.mp4" type="video/mp4" />
      </video>
    );
  } else if (indexModal === 1) {
    return <PDFViewer document={{ url: './MapaInteractivoPTA(3).pdf' }} />;
  } else {
    return <PDFViewer document={{ url: './infografia.pdf' }} />;
  }
}
