document.getElementById("btnCalcular").addEventListener("click", function() {
    let monto = parseFloat(document.getElementById("billAmount").value);
    let porcentaje = parseFloat(document.getElementById("tipPercentage").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(monto) || isNaN(porcentaje) || monto <= 0 || porcentaje < 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    let propina = monto * (porcentaje / 100);

    // Si propina es menor a Q2 → alerta y mínimo Q5
    if (propina < 2) {
        alert("La propina calculada es menor a Q2. Se aplicará un mínimo de Q5.");
        propina = 5;
    }

    let total = monto + propina;

    // Color según monto de la propina
    let color = "black";
    if (propina < 5) {
        color = "green"; // bajo
    } else if (propina <= 25) {
        color = "orange"; // medio
    } else {
        color = "red"; // alto
    }

    resultadoDiv.innerHTML = `
        <p>Propina: <span style="color:${color}">Q${propina.toFixed(2)}</span></p>
        <p>Total a pagar: <strong>Q${total.toFixed(2)}</strong></p>
    `;
});
