const navigationMenu = document.querySelectorAll('.tab')
const slides = document.querySelectorAll('.slide')
const desctop = document.querySelector('.desctop_ico')
const desctopSurface = document.querySelector('.desctop_surface')
let dectopZindex = 0
console.log(desctop)
desctop.addEventListener('click', ev=>{
    desctopSurface.style.zIndex = 99
    dectopZindex = 0
})
const opendWindows = []
// const floating = [1, 3] 'browser', 'explorer', 'note_book', 'phyton'

const innerWindows = document.querySelectorAll(".inner_window")
let consoleZindex = function(){
    console.log("====================")
    opendWindows.forEach((str, zIndex)=>{
        console.log(str, zIndex + 2)
    })
    console.log('desctop', desctopSurface.style.zIndex)
}
function refreshWindws(current) {
    desctopSurface.style.zIndex = opendWindows.indexOf(current.dataset.window) - dectopZindex
    opendWindows.forEach((str, zIndex)=>{
        
        let a = document.querySelector(`[data-window='${str}']`)
        a.style.zIndex = zIndex + 2
 
    })
    consoleZindex()
    // console.log(opendWindows)
    // opendWindows.forEach(element => {
    //     document.querySelector('[=]').style.zIndex = zIndex
        
    //     zIndex += 1
    // });
}

function changeFocusWindow(e){
    if (!opendWindows.includes(this.dataset.window)) {
        opendWindows.push(this.dataset.window)
    }
    else{
        let index = opendWindows.indexOf(this.dataset.window)
        opendWindows.splice(index, 1);
        opendWindows.push(this.dataset.window)
    }
    refreshWindws(this)

    // console.log(document.querySelector(".note_book_window").childNodes)
    // console.log(document.querySelector(".note_book_window").contains(e.target))
}

innerWindows.forEach(e=>{e.addEventListener("click", changeFocusWindow)})


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
// let lastTaskBar = 0
taskBar.forEach(element=>{
    element.addEventListener('click', ev=>{
        
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        if (!opendWindows.includes(target.dataset.surface_id)){
            opendWindows.push(target.dataset.surface_id)
            refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
        }
        else{
            let index = opendWindows.indexOf(target.dataset.surface_id)
            opendWindows.splice(index, 1);
            opendWindows.push(target.dataset.surface_id)
            refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
        }
        // for (let i = 0; i < taskBar.length; i ++){
//             taskBar[i].classList.remove('selected')
//             taskBar[i].classList.remove('selected_hover')
            
//         }
//         for(let i = 0; i < surfaces.length; i ++){
//             surfaces[i].classList.remove('active_surface')
//         }
//         let target = ev.target
//         if(target.tagName == 'P'|| target.tagName == 'I'){
//             target = target.parentNode
//         }
//         target.classList.add('selected')
//         target.classList.add('selected_hover')
//         if (target.dataset.surface_id == 'none'){
//             surfaces[lastTaskBar].classList.add('active_surface')
//         }
//         else{
//             surfaces[parseInt(target.dataset.surface_id) - 1].classList.add('active_surface')
//             lastTaskBar = parseInt(target.dataset.surface_id) - 1
//             taskBar[parseInt(target.dataset.surface_id)].classList.add('slide_is_on')
//         }

        
    })
    
})




let windowsIsActive = false


const myWindow = document.querySelector('.window')
const windowsButton = document.querySelector('.windows')


windowsButton.addEventListener('click', ev=>{
    if (windowsIsActive){

        // myWindow.classList.remove('active_window')
        // windowsIsActive = false 
        
    }
    else{
        // myWindow.classList.add('active_window')
        // windowsIsActive = true
    }
})

document.querySelectorAll('*').forEach(el=>{

})

// for(let elem of document.querySelectorAll('*')){
//         elem.addEventListener('click', ev=>{
//             // if (windowsIsActive){
//             //     if (!(ev.target.classList.contains('windows')) && !(ev.target.classList.contains('fi-brands-windows'))){
//             //         // myWindow.classList.remove('active_window')
//             //         windowsIsActive = false
//             //     }
//             // }
//             // if (noteBookIsActive){
//             //     if (!(ev.target.classList.contains('nb'))){
//             //         noteBookWindow.classList.remove('active_window')
//             //         noteBookIsActive = false 
//             //         noteBook.classList.remove('selected')
//             //         noteBook.classList.remove('selected_hover')
//             //     }
//             // }
//             // if (explorerIsActive){
//             //     if (!(ev.target.classList.contains('ex'))){
//             //         explorerWindow.classList.remove('active_window')
//             //         explorerIsActive = false 
//             //         explorer.classList.remove('selected')
//             //         explorer.classList.remove('selected_hover')
//             //     }
//             // }
//             let shift = 0
//             let windowIndex = 0
//             let flag = true
//             if (!(ev.target.classList.contains('nb'))){
//                 if (opendWindows[opendWindows.length - 1] == 1 && opendWindows[opendWindows.length - 2] != 5){
//                     opendWindows.forEach(element => {
//                         console.log(element)
//                         if (floating.includes(element) && flag){
//                             shift += 1
//                             console.log(1)
//                         }
//                         else{
//                             flag = false
//                         }
//                     });
//                     console.log(shift)
//                     windowIndex = opendWindows.indexOf(opendWindows.length - shift)
//                     console.log(windowIndex)
//                     console.log(opendWindows.length - shift)
//                     opendWindows.splice(opendWindows.length - shift, 1)
//                     opendWindows.push(windowIndex)
//                     refreshWindws()
//                     // break
//                 }
//             }
//             flag = true
//             shift = 0
//             windowIndex = 0
//             if (!(ev.target.classList.contains('ex'))){
//                 if (opendWindows[opendWindows.length - 1] == 3 && opendWindows[opendWindows.length - 2] != 5){
//                     opendWindows.forEach(element => {
//                         if (floating.includes(element) && flag){
//                             shift += 1
//                         }
//                         else{
//                             flag = false
//                         }
//                     });
//                     windowIndex = opendWindows.indexOf(opendWindows.length - shift)
//                     console.log(windowIndex)
//                     console.log(opendWindows.length - shift)
//                     opendWindows.splice(opendWindows.length - shift , 1)
//                     opendWindows.push(windowIndex)
//                     refreshWindws()
//                 }
//             }
            
            
//         })
    
    
// }

const noteBookWindow = document.querySelector('.note_book_window')
const explorerWindow = document.querySelector('.explorer_window')
const noteBook = document.querySelector('.note_book')
const explorer = document.querySelector('.explorer')
let noteBookIsActive = false
let explorerIsActive = false

// explorer.addEventListener('mousedown', ev=>{
    

//     if (explorerIsActive){
//         explorerWindow.classList.remove('active_window')
//         explorerIsActive = false 
//         explorer.classList.remove('selected')
//         explorer.classList.remove('selected_hover')
//         console.log(1)
//     }
//     else{
//         explorerWindow.classList.add('active_window')
//         explorerIsActive = true

//     }
// })

// noteBook.addEventListener('mousedown', ev=>{
//     if (noteBookIsActive){
//         noteBookWindow.classList.remove('active_window')
//         noteBookIsActive = false 
//         noteBook.classList.remove('selected')
//         noteBook.classList.remove('selected_hover')
//     }
//     else{
//         noteBookWindow.classList.add('active_window')
//         noteBookIsActive = true
//     }
    
// })

const noteBookIco = document.querySelector('.note_book_ico')
const explorerIco = document.querySelectorAll('.explorer_ico')
explorerIco.forEach(element => {
    element.addEventListener('dblclick', ev=>{
        let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        let index = opendWindows.indexOf(target.dataset.icoid)
        opendWindows.splice(index, 1);
        opendWindows.push(target.dataset.icoid)
        refreshWindws(target)

        // let target = ev.target
        // if(target.tagName == 'P'|| target.tagName == 'I'){
        //     target = target.parentNode
        // }
        // let index = opendWindows.indexOf(target.dataset.surface_id)
        // opendWindows.splice(index, 1);
        // opendWindows.push(target.dataset.surface_id)
        // refreshWindws(target)
    })
});

noteBookIco.addEventListener('dblclick', ev=>{
    let target = ev.target
        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        let index = opendWindows.indexOf(target.dataset.icoid)
        opendWindows.splice(index, 1);
        opendWindows.push(target.dataset.icoid)
        refreshWindws(target)
    
})

// const ico = document.querySelectorAll('.ico')

// ico.forEach(element => {
//     element.addEventListener('dblclick', ev => {
        // for (let i = 0; i < taskBar.length; i ++){
        //     taskBar[i].classList.remove('selected')
        //     taskBar[i].classList.remove('selected_hover')
            
        // }
        // for(let i = 0; i < surfaces.length; i ++){
        //     surfaces[i].classList.remove('active_surface')
        // }
        // let target = ev.target
        // if(target.tagName == 'P'|| target.tagName == 'I'){
        //     target = target.parentNode
        // }
        // target.classList.add('selected')
        // target.classList.add('selected_hover')
        // if (target.dataset.icoid == 'none'){
        //     surfaces[lastTaskBar].classList.add('active_surface')
        // }
        // else{
        //     surfaces[parseInt(target.dataset.icoid) - 1].classList.add('active_surface')
        //     lastTaskBar = parseInt(target.dataset.icoid) - 1
        //     taskBar[parseInt(target.dataset.icoid)].classList.add('slide_is_on')
        // }
//     })
// })
    