export default (() => {
    function countCharacters(inputId, countId) {
        const input = document.getElementById(inputId);
        const count = document.getElementById(countId);
    
        const updateCount = () => {
            const charCount = input.value.length;
            count.textContent = `${charCount}/20`;
        
            if (charCount >= 20) {
                input.value = input.value.slice(0, 20);
            }
        };
        input.addEventListener('input', updateCount);
        input.addEventListener('keyup', updateCount);
    }
    countCharacters('name', 'nameCount');
    countCharacters('email', 'emailCount');
})();

    
  