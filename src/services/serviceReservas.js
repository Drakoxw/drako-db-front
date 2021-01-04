const API_ULR = 'http://localhost:9090/api/reservas'
let token = localStorage.getItem('token')

export const getReservas = async() => {
  try {
    const resp = await fetch(API_ULR, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      }
    });
    const datos = await resp.json();
    return datos
  } catch (err) {
    console.log(`err`, err);
  }
}


export const putReservas = async(id, reserva, method='POST') => {
  let url;
  try {
    if (method === 'POST') url = API_ULR;
    if (method === 'PUT') url = `${API_ULR}/${id}`;
    if (!url) throw new Error('No hay url');
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(reserva),
      mode: 'cors'
    });
    const datos = await resp.json();
    return datos
  } catch (err) {
    console.log(`err`, err);
  }
}


export const deleteReservas = async(id) => {
  try {
    const resp = await fetch(`${API_ULR}/${id}`,{
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      mode: 'cors'
    })
    const datos = await resp.json();
    return datos
  } catch (error) {
    console.log(`error`, error);
  }
}