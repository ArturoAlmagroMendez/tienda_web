export default(() =>{
    const editButtons = document.querySelectorAll('.edit-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const hamburger = document.querySelector('.admin-header-hamburger');
    const dropdownButton = document.querySelector('.admin-bar-icon');
    const cleanButton = document.querySelector('.admin-content-login-tabs-button-clean');
    const saveButton = document.querySelector('.admin-content-login-tabs-button-save');
    
      editButtons.forEach(editButton =>{
        editButton.addEventListener('click' , () => {
          console.log("Se ha presionado el botón para editar");
        });
      });
      deleteButtons.forEach(deleteButton =>{
        deleteButton.addEventListener('click' , () => {
          console.log("Se ha presionado el botón para borrar");
        });
      });
      hamburger.addEventListener('click' , () =>{
        console.log("Has clickado el menu hamburguesa");
      })
      dropdownButton.addEventListener('click' , () =>{
        console.log("Has clickado el boton desplegable");
      })
      cleanButton.addEventListener('click' , () =>{
        console.log("Has clickado el boton de limpiar");
      })
      saveButton.addEventListener('click' , () =>{
        console.log("Has clickado el boton de guardar");
      })
        

})();
  