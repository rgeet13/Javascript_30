const canvas = document.getElementById('draw')

const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = 'BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100

let isDrwaing = false
let lastX 
let lastY
let hue = 0

function draw(e) {
  
  if (!isDrwaing) return // Stop the function running when they are not drawing

  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath()
  // Start From
  ctx.moveTo(lastX, lastY)
  // Go To
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}


canvas.addEventListener('mousedown', (e) => {
  isDrwaing = true
  [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => {
  isDrwaing = false
})
canvas.addEventListener('mouseout', () => {
  isDrwaing = false
})
canvas.addEventListener('mousemove', draw)

