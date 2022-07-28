window.setYDUIStyle = function (param) {
  if (window.dispatchEvent) {
    window.dispatchEvent(
      new CustomEvent('YDUIStyleChange', {
        detail: param
      })
    )
  } else {
    window.fireEvent(
      new CustomEvent('YDUIStyleChange', {
        detail: param
      })
    )
  }
}
window.addEventListener('YDUIStyleChange', function (param) {
  if (param.detail === 'dark') {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  }
})
window.setYDUIStyle(
  navigator.userAgent.indexOf('YDUIStyle/Dark') > -1 ? 'dark' : 'light'
)
