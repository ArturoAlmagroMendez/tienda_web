export default (() => {
    const inputs = document.querySelectorAll('.limited');
  
    inputs.forEach(input => {
      const spanElement = document.createElement('span');
      spanElement.textContent = "0/20";
      input.insertAdjacentElement('afterend', spanElement);
      const count = input.nextElementSibling;
      const updateCount = () => {
        const charCount = input.value.length;
        count.textContent = `${charCount}/20`;
        if (charCount >= 20) {
          input.value = input.value.slice(0, 20);
        }
      };
      input.addEventListener('input', updateCount);
      input.addEventListener('keyup', updateCount);
    });
  })();
  