const API_ULR = 'http://localhost:9090/api'

export const login = async (user, pass) => {
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
    await localStorage.setItem('token', token.token)
    return token
  } catch (err) {
    console.log(`error :`, err);
  }
}

export const cerrar = (ev) => {
  console.log(`cerrando`);
  localStorage.setItem('token', 'xxx')
  window.location.href="/"

} 
