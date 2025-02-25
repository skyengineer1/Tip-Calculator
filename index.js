document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", () => {
        const billAmount = parseFloat(document.getElementById("billAmount").value);
        const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
        
        if (isNaN(billAmount) || isNaN(tipPercentage)) {
            document.getElementById("tipResult").textContent = "Please enter valid numbers.";
            return;
        }
        
        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;
        
        document.getElementById("tipResult").textContent = `Tip: $${tipAmount.toFixed(2)}, Total: $${totalAmount.toFixed(2)}`;
    });
});
