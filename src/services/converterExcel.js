import XLSX from 'xlsx';
import * as Filesaver from 'file-saver';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let date = new Date().getTime()


export function jsonToExcel(data){
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = {
    Sheets: {
      'data': worksheet
    },
    SheetNames: ['data']
  };
  const excelBoofer = XLSX.write(workbook,{bookType: 'xlsx', type: 'array'});
  saveAsEx(excelBoofer, 'file_'+date+'_data_json')
}
function saveAsEx(buf, filename){
  const data = new Blob([buf], {type: EXCEL_TYPE});
  Filesaver.saveAs(data, filename+EXCEL_EXTENSION)
}
