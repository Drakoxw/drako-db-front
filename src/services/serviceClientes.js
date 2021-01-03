const API_ULR = 'http://localhost:9090/api/clientes'

export const getClientes = async () => {
  try {
    const resp = await fetch(`${API_ULR}`)
    const datos = resp.json()
    return datos
  } catch (err) {
    console.log(`err`, err);
  }
}

export const putCliente = async(id, cliente, method='POST') => {
  let url;
  console.log(cliente);
  try {
    if (method ==='POST') {
      url = API_ULR
    } else if (method === 'PUT' && id) {
      url = `${API_ULR}/${id}`
    } 
    if (!url){
      throw new Error('No hay url')
    }
    
    const resp = await fetch(url,{
      method,
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors"
    });
    const datos = await resp.json();
    return datos;

  } catch (err) {
    console.log(`err`);
  }
} 

/**
 * Nombre, Telefono, Discoteca,Correo,Sexo,Dia,
    Mes, Año,ContactoActivo,EstadoReserva
 */