import React from 'react';
import { jsonToExcel } from '../../services/converterExcel'

function btnDowmloader({ data }) {
  return (
    <button type="button" className="btn  toexcel" 
    onClick={()=> jsonToExcel(data)} >
      Descargar en formato excel
    </button>
  )
}


export default btnDowmloader;