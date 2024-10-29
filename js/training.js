const navigationMenu = document.querySelectorAll('.tab')
const slides = document.querySelectorAll('.slide')
const desctop = document.querySelector('.desctop_ico')
const desctopSurface = document.querySelector('.desctop_surface')
desctop.addEventListener('click', ev=>{
    expandedWindows.splice(0, expandedWindows.length)
    refreshWindws()
})
const opendWindows = []
const expandedWindows = []

const innerWindows = document.querySelectorAll(".inner_window")
let consoleZindex = function(){
    console.log("====================")
    console.log(expandedWindows, opendWindows)
}
function refreshWindws(current) {
    opendWindows.forEach((str, zIndex)=>{
        let a = document.querySelector(`[data-window='${str}']`)
        a.style.zIndex = 0
    })
    opendWindows.forEach((str, zIndex)=>{
        if (expandedWindows.includes(opendWindows[zIndex])){
        let a = document.querySelector(`[data-window='${str}']`)
        a.style.zIndex = zIndex + 2
        }
    })
    consoleZindex()
    
}


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
taskBar.forEach(element=>{
    element.addEventListener('click', ev=>{
        
        let target = ev.target
        

        if(target.tagName == 'P'|| target.tagName == 'I'){
            target = target.parentNode
        }
        let index = opendWindows.indexOf(target.dataset.surface_id);
        if (!opendWindows.includes(target.dataset.surface_id)){
            opendWindows.push(target.dataset.surface_id)
        }
        
        else{
            opendWindows.splice(index, 1);
            opendWindows.push(target.dataset.surface_id);
        }
        index = expandedWindows.indexOf(target.dataset.surface_id)
        if (!expandedWindows.includes(target.dataset.surface_id)){
            expandedWindows.push(target.dataset.surface_id)
        }
        else if(index == expandedWindows.length - 1){
            expandedWindows.splice(index, 1);
            console.log(expandedWindows)
        }
        else{
            expandedWindows.splice(index, 1);
            expandedWindows.push(target.dataset.surface_id)
        }
        refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
        
        
    })
    
})




let windowsIsActive = false
const myWindow = document.querySelector('.window')
const windowsButton = document.querySelector('.windows')
console.log(document.getElementsByClassName('window')[0])
console.log(document.getElementsByClassName('window')[0] instanceof Node);
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

// const clickedWindows = [];
// document.querySelectorAll('*').forEach(el=>{
//     el.addEventListener('click', e=>{
//         if (e.target.classList.contains('w')){
//             if (!clickedWindows.includes('w')){
//                 clickedWindows.push('W');
//             }
//         }
//         if (e.target.classList.contains('ex')){
//             if (!clickedWindows.includes('ex')){
//                 clickedWindows.push('ex');
//             }
//         }
//         if (e.target.classList.contains('nb')){
//             if (!clickedWindows.includes('nb')){
//                 clickedWindows.push('nb');
//             }
//         }
//     //     if (document.getElementsByClassName('window')[0].contains(e.target)){
            
//     //     } else{
//     //         if (!e.target.classList.contains('w')){
//     //             myWindow.classList.remove('active_window')
//     //             windowsIsActive = false 
//     //         }
//     //         else{
//     //             myWindow.classList.add('active_window')
//     //             windowsIsActive = true;
//     //         }
            
//     //     }

//     //     if (document.getElementsByClassName('explorer_window')[0].contains(e.target)){
            
//     //     } else{
//     //         let index = opendWindows.indexOf('explorer_window');

//     //         if (!e.target.classList.contains('ex')){
//     //             expandedWindows.splice(index, 1);
//     //             console.log(expandedWindows)
//     //         }
//     //         else{
//     //             expandedWindows.push('explorer_window')
//     //         }
        
//     //     refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
             
//     //     }
//     console.log(clickedWindows)
//     clickedWindows.forEach(elem=>{
//         if(elem != 'W'){
//             myWindow.classList.remove('active_window')
//             windowsIsActive = false 
//         }
//         if(elem != 'ex'){
//             expandedWindows.splice(opendWindows.indexOf('explorer_window'), 1);
//             console.log(1)
//             refreshWindws()
//         }
        
//     })
//     })
    
        
// })

// document.querySelectorAll('*').forEach(el=>{

// })

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
const explorerIco = document.querySelector('.explorer_ico')
const browserIco = document.querySelector('.browser_ico')
explorerIco.addEventListener('dblclick', ev=>{
    let target = ev.target
    if(target.tagName == 'P'|| target.tagName == 'I'){
         target = target.parentNode
    }
    openWindowsOnDesktop(target)
    })


browserIco.addEventListener('dblclick', ev=>{
    let target = ev.target
    if(target.tagName == 'P'|| target.tagName == 'I'){
        target = target.parentNode
    }
    openWindowsOnDesktop(target)
    
})

noteBookIco.addEventListener('dblclick', ev=>{
    let target = ev.target
    if(target.tagName == 'P'|| target.tagName == 'I'){
        target = target.parentNode
    }
    openWindowsOnDesktop(target)
    
})


const openWindowsOnDesktop = function(target){
    
    let index = opendWindows.indexOf(target.dataset.icoid)
    // opendWindows.splice(index, 1);
    // expandedWindows.splice(index, 1)
    // opendWindows.push(target.dataset.icoid)
    // expandedWindows.push(target.dataset.icoid)
    // refreshWindws(target)
    if (!opendWindows.includes(target.dataset.icoid)){
        opendWindows.push(target.dataset.icoid)
        // refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
    }
    
    else{
        let index = opendWindows.indexOf(target.dataset.icoid)
        opendWindows.splice(index, 1);
        opendWindows.push(target.dataset.icoid)
        // refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
    }
    
    if (!expandedWindows.includes(target.dataset.icoid)){
        expandedWindows.push(target.dataset.icoid)
        // refreshWindws(document.querySelector(`[data-window='${target.dataset.surface_id}']`))
    }
    else{
        expandedWindows.splice(index, 1);
        expandedWindows.push(target.dataset.icoid)
        // refreshWindws(document.querySelector(`[data-window='${target.dataset.icoid}']`))
    }
    refreshWindws(document.querySelector(`[data-window='${target.dataset.icoid}']`))
}

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

const keyboardWindow = document.querySelector('.keyboard_window');
const taskKeyboard = document.querySelector('.task_keyboard');
document.querySelector('.task_keyboard').addEventListener('click', ev=>{
    if(keyboardWindow.classList.contains('keyboard_window_active')){
        keyboardWindow.classList.remove('keyboard_window_active');
        taskKeyboard.classList.remove('task_keyboard_pressed');

    }
    else{
        keyboardWindow.classList.add('keyboard_window_active');
        taskKeyboard.classList.add('task_keyboard_pressed');
    }
    
})

