console.log('index.js Loaded')
//
const app = document.querySelector('#app')
const list = document.querySelector('#list')
const UIEffects = new UI()

const addItem = (e) => {
    e = e || window.event
    if(e.key == "Enter"){
        console.log(e)
    }
  
}
const formulario = `
        <div class="container">
            <h1 class="display-3">Comentarios</h1>
            <div class="row">
                <div class="col-6 border border-primary rounded p-4">
                    <label class="form-label my-2">Comentario</label>
                    <input onkeydown="UIEffects.addItem()" id="UI_Input"class="form-control my-2" text="text">
                    <button class="btn btn-primary my-2" onclick="UIEffects.addItem()">Enviar</button>
                </div>
            </div>
        </div>
`



 
app.innerHTML = `
    ${formulario}
   
    `



