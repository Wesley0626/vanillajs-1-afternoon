let game = []

function play(id){
  let playerSpan = document.getElementById('player')
  let clickedId = document.getElementById(id)

  if(playerSpan.innerText === 'X'){
    playerSpan.innerText = "O"
    clickedId.innerText = 'X'
    game[id] = 'X'
  }
   else{ 
     playerSpan.innerText = "X"
     clickedId.innerText = 'O'
     game[id] = 'O'
  }

let topLeft = game[0]
let topMiddle = game[1]
let topRight = game[2]
let centerLeft = game[3]
let centerMiddle = game[4]
let centerRight = game[5]
let bottomLeft = game[6]
let bottomMiddle =  game[7]
let bottomRight = game[8]

if(topRight !== undefined && topRight === topMiddle && topRight === topLeft){
  alert(`Holy shit ${topRight} won!`)
  return
}
if(centerRight !== undefined && centerRight === centerMiddle && centerRight === centerLeft){
  alert(`Holy shit ${centerRight} won!`)
  return
}
if(bottomRight !== undefined && bottomRight === bottomMiddle && bottomRight === bottomLeft){
  alert(`Holy shit ${bottomRight} won!`)
  return
}
if(topRight !== undefined && topRight === centerRight && topRight === bottomRight){
  alert(`Holy shit ${topRight} won!`)
  return
}
if(topMiddle !== undefined && topMiddle === centerMiddle && topMiddle === bottomMiddle){
  alert(`Holy shit ${topMiddle} won!`)
  return
}
if(topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
  alert(`Holy shit ${topLeft} won!`)
  return
}
if(topLeft !== undefined && topLeft === centerMiddle && topLeft === bottomRight){
  alert(`Holy shit ${topLeft} won!`)
    return
}
if(topRight !== undefined && topRight === centerMiddle && bottomLeft === topRight){
  alert(`Holy shit ${topRight} won!`)
  return
}
let boardFull = true
for(let i = 0; i < 9; i++){
  if(game[i] === undefined){
  boardFull = false
  }
  }
  if(boardFull){
    alert(`Ya'll suck, no one wins!`)
}
}
