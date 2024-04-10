const keys = document.querySelectorAll('.keyboard_row>div')
// console.log(document.querySelector())
// console.log(keys)    
let keyboard_row
let dictKeysCode = {'0':'', '1':'','2':''}
document.addEventListener('keydown', function (event) {
    event.preventDefault()
    console.log(event)
    for(let i = 0; i < keys.length; i++){
        if (keys[i].dataset.keycode == event.keyCode){
            keys[i].classList.add('button_pressed')
            
        }
        
    }
  });
  document.addEventListener('keyup', function (event) {
    event.preventDefault()
    for(let i = 0; i < keys.length; i++){
        if (keys[i].dataset.keycode == event.keyCode){
            keys[i].classList.remove('button_pressed')
            
        }   
        
    }
    
    
  });