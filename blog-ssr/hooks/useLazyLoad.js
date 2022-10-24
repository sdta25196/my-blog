const lazyLoad = () => {
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  const lazyLoad = (allImg) => {
    return () => {
      allImg.forEach(img => {
        let distance = viewHeight - img.getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if (distance >= 0 && img.getAttribute('data-src')) {
          // 给元素写入真实的src，展示图片
          img.src = img.getAttribute('data-src')
          img.setAttribute('width', '80%')
          img.setAttribute('height', '100%')
        }
      })
    }
  }
  return [
    () => {
      let allImg = document.querySelectorAll('img')
      lazyLoad(allImg)()
      window.addEventListener('scroll', lazyLoad(allImg), false)
    },
    () => { window.removeEventListener('scroll', lazyLoad()) }
  ]
}

export default lazyLoad