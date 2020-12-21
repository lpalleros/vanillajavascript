
const creator = (el,text = '') => {
    var el = document.createElement(el)
    var txt = document.createTextNode(text)
    el.appendChild(txt)
    return el;
}
class UI  {
    constructor(){
       
    }
    addItem = (e) => {
        e = e || window.event
        let input = document.querySelector('#UI_Input')
        console.log(e.target.value)
        if((e.key == "Enter" || e.type == "click") && input.value !== ""){
            // console.log(e)
            let uiText = document.querySelector('#UI_Input').value 
            let el = creator('h3',uiText)
            el.classList.add ('fw-light')
            list.appendChild(el)
            el = creator('small',new Date())
            el.classList.add('text-primary')
            list.appendChild(el)
            el = creator('button',"X")
            el.classList.add('btn')
            el.classList.add('btn-sm')
            el.classList.add('btn-danger')
            list.appendChild(el)
            input.value = ""
        }
    
    }
}


