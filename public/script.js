if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(_reg => console.log('SW ok'))
  .catch(err => console.warn('ERROR en SW', err))
}

