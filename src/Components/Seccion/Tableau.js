import React, {useRef, useEffect} from "react"
import ReactHtmlParser from 'react-html-parser';

const { tableau } = window;

export default function Tableau({ e, moveSectionDown }) {
    const ref = useRef(null)
    const options = {
      device: "default"
    }

    function initViz() {
      new tableau.Viz(ref.current, e.e.url, options);
    }

    useEffect(() => {
      initViz();
    },[])

    return (
      <div className="section tableau">
        <div className="viz" ref={ref}>
        </div>
      </div>
    );
  }