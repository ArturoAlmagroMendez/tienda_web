export default (() => {

    const minusBtn = document.getElementById("minus-btn");
    const plusBtn = document.getElementById("plus-btn");
    const inputValue = document.getElementById("input-value");
    let totalPrice = document.querySelector(".new-price span").textContent.replace("€", "");
    const totalPriceText = document.querySelector('.total-price p');
    const shipmentPrice = document.querySelector('.shipment p');

    
    
    minusBtn.addEventListener("click", function() {
        if (inputValue.value > 1) {
            inputValue.value--;
            totalPrice = 9.99 * inputValue.value;
            totalPriceText.innerHTML ="Precio total: " + totalPrice + "€";
            if(inputValue.value < 3){
                shipmentPrice.innerHTML = " + 4.99€ de envío.";
            }
        }
    });

    plusBtn.addEventListener("click", function() {
        inputValue.value++;
        setTotal(totalPrice);
        if(inputValue.value > 2){
            shipmentPrice.innerHTML = "Envío gratis";
        }
    });

    function setTotal(totalPrice){
        totalPrice = totalPrice * inputValue.value;
        let roundedPriceStr = totalPrice.toFixed(2);
        let roundedPrice = parseFloat(roundedPriceStr);
        totalPriceText.innerHTML ="Precio total: " + roundedPrice + "€";
    }
})();
