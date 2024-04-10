const navigationMenu = document.querySelectorAll('.tab')

navigationMenu.forEach(element=>{
    
    element.addEventListener('click', ev=>{
        for (let i = 0; i < navigationMenu.length; i ++){
            navigationMenu[i].classList.remove('selected')
            navigationMenu[i].classList.remove('selected_hover')
        }
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        target.classList.add('selected')
        target.classList.add('selected_hover')
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
    })
})

