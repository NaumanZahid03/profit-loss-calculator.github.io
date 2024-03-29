function calculateProfitOrLoss() {
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);

    if (sellingPrice > purchasePrice) {
        const profit = sellingPrice - purchasePrice;
        document.getElementById("result").innerText = `${profit} Rs Profit`;
    } else if (sellingPrice < purchasePrice) {
        const loss = Math.abs(sellingPrice - purchasePrice);
        document.getElementById("result").innerText = `${loss} Rs Loss`;
    } else {
        document.getElementById("result").innerText = "No Profit No Loss";
    }
}
