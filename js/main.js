window.addEventListener('load', () => {
    const formulario = document.querySelector("#form-nueva-tarea")
    const input = document.querySelector("#input-nueva-tarea")
    const tareas = document.querySelector("#tareas")

    /*Envio del formulario*/
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const tarea = input.value
        if(!tarea){
            alert('Por favor agrega una tarea')
            return
        }

        /*Creando la tarea*/
        const tarea_nueva = document.createElement("div")
        tarea_nueva.classList.add("tarea")

        const contenido_tarea = document.createElement("div")
        contenido_tarea.classList.add("contenido")

    
        const input_tarea = document.createElement("input")
        input_tarea.classList.add("texto")
        input_tarea.type = "text"
        input_tarea.value = tarea
        input_tarea.setAttribute("readonly", "readonly")

        const acciones_tarea = document.createElement("div")
        acciones_tarea.classList.add("acciones")

        const editar = document.createElement("button")
        editar.classList.add("editar")
        editar.innerHTML = "Editar"

        const eliminar = document.createElement("button")
        eliminar.classList.add("eliminar")
        eliminar.innerHTML = "Eliminar"

        acciones_tarea.appendChild(editar)
        acciones_tarea.appendChild(eliminar)
        contenido_tarea.appendChild(input_tarea)
        tarea_nueva.appendChild(contenido_tarea)
        tarea_nueva.appendChild(acciones_tarea)
        tareas.appendChild(tarea_nueva)

        input.value = ""

        editar.addEventListener('click', () =>{
            if(editar.innerText.toLowerCase() == "editar"){
                input_tarea.removeAttribute("readonly")
                input_tarea.focus()
                editar.innerText = "Guardar"
                
            }else{
               input_tarea.setAttribute("readonly", "readonly")
               editar.innerText = "Editar" 
            }
        })
        eliminar.addEventListener('click', () => {
            
            if(confirm("¿Estás seguro?")){
                tareas.removeChild(tarea_nueva)
            }
        })
    })
})