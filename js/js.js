"use strict";
const z1 = document.getElementsByClassName("z-1")[0];
const z2 = document.getElementsByClassName("z-2")[0];
const z3 = document.getElementsByClassName("z-3")[0];

const ratio = 0.05;
let x;
let y;

document.addEventListener("mousemove", function (e) {
  x = e.pageX;
  y = e.pageY;
});

// requestAnimationFrame(function animation() {
//   z1.style.transform = "translate(" + x * ratio + "px," + y * ratio + "px)";

//   z2.style.transform =
//     "translate(" +
//     (x * ratio) / 2 +
//     "px," +
//     (y * ratio) / 2 +
//     "px) rotate(217deg)";

//   z3.style.transform =
//     "translate(" +
//     (x * ratio) / 3 +
//     "px," +
//     (y * ratio) / 3 +
//     "px) rotate(71deg)";

//   requestAnimationFrame(animation);
// });



const navigation = document.getElementById('slider_navigation');
const page = document.querySelector('.page')
const cube =  parseFloat(getComputedStyle(page).height)
const margin = parseFloat(getComputedStyle(page).margin) * 2
const sliders = document.querySelector('#slider_main').querySelectorAll('.slider_page')
navigation.addEventListener('wheel', function(e){
  e.preventDefault()
  if (e.deltaY < 0) {
    // navigation.scrollLeft += (cube + margin);
    navigation.scrollLeft += e.deltaY / 8;
  }
  else{
    navigation.scrollLeft += e.deltaY / 8;
    // navigation.scrollLeft -= (cube + margin);
  }
})


let pos = {top: 0, left: 0, x: 0, y: 0};


const mouseDownHandler = function(e){
  console.log()
  pos = {
    left: navigation.scrollLeft,
    top: navigation.scrollTop,
    x: e.clientX,
    y: e.clientY
  };
  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHamdler);
}

const mouseMoveHandler = function(e){
  
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;
  navigation.scrollTop = pos.top - dy;
  navigation.scrollLeft = pos.left - dx
};
const mouseUpHamdler = function(){
 
  document.removeEventListener('mousemove', mouseMoveHandler)
  document.removeEventListener('mouseup', mouseUpHamdler)

  navigation.style.coursor = 'grab';
  navigation.style.removeProperty('user-select');
};


navigation.addEventListener('mousedown', mouseDownHandler)



const navigationButtons = navigation.querySelectorAll('.page')
let lastElementId = 0
let lastElementClass 
let currentElementClass


for (let i = 1; i < sliders.length ;i++){
  if (navigationButtons[i].dataset.type == 'information'){
    navigationButtons[i].querySelector('i').classList.add('fi-br-information')
  }
  else if (navigationButtons[i].dataset.type == 'question'){
    navigationButtons[i].querySelector('i').classList.add('fi-br-question')
  }
  else if (navigationButtons[i].dataset.type == 'keyboard'){
    navigationButtons[i].querySelector('i').classList.add('fi-rr-keyboard')
  }
 
}

navigationButtons.forEach(element => {
  
  element.addEventListener('click', function(e){

    for (let i = 0; i < sliders.length ;i++){
      sliders[i].classList.remove('active')
      navigationButtons[i].classList.remove('active_page')
      navigationButtons[i].querySelector('i').classList.remove('fi-br-clock-three')
    }
    if (navigationButtons[lastElementId].dataset.type == 'information'){
      lastElementClass = 'fi-br-information'
    }
    else if (navigationButtons[lastElementId].dataset.type == 'question'){
      lastElementClass = 'fi-br-question'
    }
    else if (navigationButtons[lastElementId].dataset.type == 'keyboard'){
      lastElementClass = 'fi-rr-keyboard'
    }

    if (navigationButtons[Number(element.dataset.id) - 1].dataset.type == 'information'){
      currentElementClass = 'fi-br-information'
    }
    else if (navigationButtons[Number(element.dataset.id) - 1].dataset.type == 'question'){
      currentElementClass = 'fi-br-question'
    }
    else if (navigationButtons[Number(element.dataset.id) - 1].dataset.type == 'keyboard'){
      currentElementClass = 'fi-rr-keyboard'
    }
    navigationButtons[lastElementId].querySelector('i').classList.add(lastElementClass)
    lastElementId = Number(element.dataset.id) - 1
    navigationButtons[Number(element.dataset.id) - 1].classList.add('active_page')
    sliders[Number(element.dataset.id) - 1].classList.add('active')
    navigationButtons[Number(element.dataset.id) - 1].querySelector('i').classList.remove(currentElementClass)
    navigationButtons[Number(element.dataset.id) - 1].querySelector('i').classList.add('fi-br-clock-three')
    
  })
});



// const changeNavigationColor = function(){
  
// }
