//const API_ULR = 'http://localhost:9090/api'
const API_ULR = 'https://drako-db.herokuapp.com/api'


export const login = async(user, pass) => {
  try {
    const resp = await fetch(`${API_ULR}/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Email: user,
        Pass: pass
      }),
      mode: "cors"
    })
    const token = await resp.json();
    localStorage.setItem('token', token.token)
    if (token.token) {
      const datUser = await fetch(`${API_ULR}/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: token.token,
        },
      })
      const datoUser = await datUser.json();
      localStorage.setItem('user', datoUser.Email);
      localStorage.setItem('role', datoUser.Role);
    }
    return 'ok';
  } catch (err) {
    console.log(`error :`, err);
  }
}

export const cerrar = (_ev) => {
  localStorage.setItem('token', 'xxx');
  localStorage.setItem('user', 'xx');
  localStorage.setItem('role', 'x');
  window.location.href="/"

} 
