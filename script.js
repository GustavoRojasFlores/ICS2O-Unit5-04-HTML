document.getElementById('sheep-btn').addEventListener('click', nextColor)
document.getElementById('img-toggle').addEventListener('click', toggleImage)
document.getElementById('bkg-color').addEventListener('click', randBkgColor)
document.getElementById('txt-toggle').addEventListener('click', toggleText)
const image = document.getElementById('image')
const text = document.getElementById('text')
let colorVal = 2
let imgVisible = true
let txtVisible = true

function nextColor () {
  if (colorVal === 1) {
    image.src = './images/Red_Sheep.png'
  }
  if (colorVal === 2) {
    image.src = './images/Green_Sheep.png'
  }
  if (colorVal === 3) {
    image.src = './images/Blue_Sheep.png'
  }
  if (colorVal === 4) {
    image.src = './images/Gray_Sheep.png'
  }
  if (colorVal === 4) {
    colorVal = 1
  } else {
    colorVal++
  }
}

function toggleImage () {
  if (imgVisible) {
    imgVisible = false
    image.style.display = 'none'
  } else {
    imgVisible = true
    image.style.display = 'block'
  }
}

function randBkgColor () {
  const r = Math.round(Math.random() * 256)
  const g = Math.round(Math.random() * 256)
  const b = Math.round(Math.random() * 256)
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function toggleText () {
  if (txtVisible) {
    txtVisible = false
    text.style.display = 'none'
  } else {
    txtVisible = true
    text.style.display = 'block'
  }
}
