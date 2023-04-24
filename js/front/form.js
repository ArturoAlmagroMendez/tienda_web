export default(() =>{
    const buttons = document.querySelectorAll('.send-btn');

    buttons.forEach(button =>{
        button.addEventListener('click' , event => {
          event.preventDefault();
          let form = button.closest('form');
          validateForm(form.elements);          
        });
    });
})();

export let validateForm = formInputs => {

    let validForm = true;
    
    let validators = {
        "only-letters": {
            "regex": /^[a-zA-Z\s]+$/g,
            "message": "Solo letras."
        },
        "only-numbers": {
            "regex": /\d/g,
            "message": "Solo dígitos."
        },
        "email": {
            "regex": /\w+@\w+\.\w+/g,
            "message": "Email inválido."
        }
    }

    for (let i = 0; i < formInputs.length; i++) {

        if (formInputs[i].dataset.validate) {
            
            if(formInputs[i].value.match(validators[formInputs[i].dataset.validate].regex) == null) {
                formInputs[i].classList.add('invalid');
                validForm = false;
                let errorMessage = validators[formInputs[i].dataset.validate].                                 message;
                formInputs[i].value = '';
                formInputs[i].placeholder = errorMessage;
            }else{
                formInputs[i].classList.remove('invalid');
                console.log("Formulario enviado correctamente");
            }
        }
    }

    if(!validForm){
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Los datos del formulario no son válidos',
                type: 'error'
            }
        }));
    }

    return validForm;
};
