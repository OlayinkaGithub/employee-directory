const employee = document.querySelectorAll ('.employee')

const displayEmployees = (value) =>{
    employee.forEach (Element =>{
        Element.style.display = "none"
        const name = Element.children[1].innerHTML.toUpperCase();
        const position = Element.children[2].innerHTML.toUpperCase();
        const job_type = Element.children[3].innerHTML.toUpperCase();

        if (name.includes(value) || position.includes(value) || job_type.includes(value)){
            Element.style.display = "block"
        }

    })

}

searchEmployee.addEventListener('input', (e) =>{
    displayEmployees(e.target.value.toUpperCase())
})
