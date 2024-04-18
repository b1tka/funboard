const navigationMenu = document.querySelectorAll('.tab')
const slides = document.querySelectorAll('.slide')

navigationMenu.forEach(element=>{
    
    element.addEventListener('click', ev=>{
        for (let i = 0; i < navigationMenu.length; i ++){
            navigationMenu[i].classList.remove('browser_selected')
            navigationMenu[i].classList.remove('browser_selected_hover')
            slides[i].classList.remove('active_slide')
        }
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        target.classList.add('browser_selected')
        target.classList.add('browser_selected_hover')
        slides[target.dataset.tabid - 1].classList.add('active_slide')
    })
})

const taskBar = document.querySelectorAll('.task_bar_slide')
const surfaces = document.querySelectorAll('.surface')
let lastTaskBar = 0
taskBar.forEach(element=>{
    element.addEventListener('click', ev=>{
        for (let i = 0; i < taskBar.length; i ++){
            taskBar[i].classList.remove('selected')
            taskBar[i].classList.remove('selected_hover')
            
        }
        for(let i = 0; i < surfaces.length; i ++){
            surfaces[i].classList.remove('active_surface')
        }
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        target.classList.add('selected')
        target.classList.add('selected_hover')
        if (target.dataset.surface_id == 'none'){
            surfaces[lastTaskBar].classList.add('active_surface')
        }
        else{
            surfaces[parseInt(target.dataset.surface_id) - 1].classList.add('active_surface')
            lastTaskBar = parseInt(target.dataset.surface_id) - 1
            taskBar[parseInt(target.dataset.surface_id)].classList.add('slide_is_on')
        }
        
    })
})
let windowsIsActive = false


const myWindow = document.querySelector('.window')
const windowsButton = document.querySelector('.windows')


windowsButton.addEventListener('click', ev=>{
    if (windowsIsActive){
        myWindow.classList.remove('active_window')
        windowsIsActive = false 
        
    }
    else{
        myWindow.classList.add('active_window')
        windowsIsActive = true
    }
})

for(let elem of document.querySelectorAll('*')){
    
    
        
        elem.addEventListener('click', ev=>{
            if (!(ev.target.classList.contains('windows')) && !(ev.target.classList.contains('fi-brands-windows'))){
                
            myWindow.classList.remove('active_window')
            windowsIsActive = false 
            }
        })
    
    
}

const noteBookWindow = document.querySelector('.note_book_window')
const noteBook = document.querySelector('.note_book')
let noteBookIsActive = false
noteBook.addEventListener('click', ev=>{
    if (noteBookIsActive){
        noteBookWindow.classList.remove('active_window')
        noteBookIsActive = false 
    }
    else{
        noteBookWindow.classList.add('active_window')
        noteBookIsActive = true
    }
})