const navigationMenu = document.querySelectorAll('.tab')
const slides = document.querySelectorAll('.slide')

navigationMenu.forEach(element=>{
    
    element.addEventListener('click', ev=>{
        for (let i = 0; i < navigationMenu.length; i ++){
            navigationMenu[i].classList.remove('selected')
            navigationMenu[i].classList.remove('selected_hover')
            slides[i].classList.remove('active_slide')
        }
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        target.classList.add('selected')
        target.classList.add('selected_hover')
        slides[target.dataset.tabid - 1].classList.add('active_slide')
    })
})

const taskBar = document.querySelectorAll('.task_bar_slide')
const surfaces = document.querySelectorAll('.surface')

taskBar.forEach(element=>{
    element.addEventListener('click', ev=>{
        for (let i = 0; i < taskBar.length; i ++){
            taskBar[i].classList.remove('selected')
            taskBar[i].classList.remove('selected_hover')
            surfaces[i].classList.remove('active_surface')
        }
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        target.classList.add('selected')
        target.classList.add('selected_hover')
        surfaces[parseInt(target.dataset.surface_id) - 1].classList.add('active_surface')
        myWindow.classList.remove('active_window')
        isActive = false 
            
    })
})

const myWindow = document.querySelector('.window')
const windowsButton = document.querySelector('.windows')
let isActive = false

windowsButton.addEventListener('click', ev=>{
    if (isActive){
        myWindow.classList.remove('active_window')
        isActive = false 
        
    }
    else{
        myWindow.classList.add('active_window')
        isActive = true

    }
})