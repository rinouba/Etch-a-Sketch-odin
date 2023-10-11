// Put Three Buttons 1  Change a Color To Normaol 2 To Rgb 3 To defualt /

const container = document.querySelector(".container")

// called Three Buttons
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

//  Create Square Inside Container
const createSquare = () => {
    const div = document.createElement("div")
    div.classList.add("square")
    container.appendChild(div)
    btn1.addEventListener("click",() => {
      changeColorSquare(div)
    })
    btn3.addEventListener("click",() => {
      resetColorSquare(div)
    })
    btn2.addEventListener("click",() => {
      changeColorSquareRgb(div)
    })
}



const createHowMuchSqoures = () => {
  const squares = prompt("How Mush squares?")
  if (squares > 100) {
    alert("Please Put a Number Under 100!")
    location.reload()
  }else if (squares === ""){
    alert("Put a Number Please!")
    location.reload()
  }else{
    container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`
    container.style.gridTemplateRows = `repeat(${squares}, 1fr)`
  
    for (let i = 0; i < squares*squares; i++) {
      createSquare()
      }
    }
}


// change Background Color To Normal Color
const changeColorSquare = (div) => {
  div.addEventListener("mouseover",(e) => {
    e.target.style.backgroundColor = '#BEADFA'
})
}

// Delete Colors
const resetColorSquare = (div) => {
  div.addEventListener("mouseover",(e) => {
    e.target.style.backgroundColor= '#dfccfb'
  })
}

// Change Background Color To Rgb
const changeColorSquareRgb = (div) => {
  div.addEventListener("mouseover",(e) => {
    e.target.style.backgroundColor = getRandomRgb()
  })
}

// Random Colors
function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return `rgb(${r},${g},${b})`; 
}

createHowMuchSqoures()