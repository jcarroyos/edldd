import React, { Component } from 'react'

import data from  './data/data.json'

const  newdata = data.map((data) =>{
    return  (
      <div key= {data.capitulo.id}>{data.capitulo.titulo}
      </div>
    )
  }
)

export default class introAnimada extends Component {
    render() {
        return (
            <div className=" m-3 p-3 owncard "> {newdata} </div>
        )
    }
}

