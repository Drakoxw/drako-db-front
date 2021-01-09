//const API_ULR = 'http://localhost:9090/api/clientes'
const API_ULR = 'https://drako-db.herokuapp.com/api/clientes'
let token = localStorage.getItem('token')

export const getClientes = async () => {
  try {
    const resp = await fetch(`${API_ULR}`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      }
    })
    const datos = await resp.json()
    return datos
  } catch (err) {
    console.log(`err`, err);
  }
}

export const putCliente = async(id, cliente, method='POST') => {
  let url;
  try {
    if (method ==='POST') {
      url = API_ULR
    } else if (method === 'PUT' && id) {
      url = `${API_ULR}/${id}`
    } 
    if (!url){
      throw new Error('No hay url')
    }
    console.log(`cliente`, cliente);
    const resp = await fetch(url,{
      method,
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      mode: "cors"
    });
    const datos = await resp.json();
    return datos;
  } catch (err) {
    console.log(`err`);
  }
} 

export const deleteCliente = async(id) => {
  try {
    const resp = await fetch(`${API_ULR}/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: token,},
      mode: 'cors'
    })
    return resp
  } catch (error) {
    console.log(`error`, error);
  }
}
