function calcularFibonacci() {
    const input = document.getElementById("numeroInput").value;
    const numero = parseInt(input); //Analizar que el input sea un número

//Condicionales
    if (!isNaN(numero)) {
        if (numero <= 0) { //Verifica que sea un número positivo
            document.getElementById("resultado").textContent = "Ingresa un número válido.";
        } else {
            let fibonacci = [0, 1]; //Declarar y establecer la variable
//Bucle para la reiteración de los números en la secuencia, donde se repite tantas veces como la const numero sea 
            for (let i = 2; i < numero; i++) {
                let next = fibonacci[i - 1] + fibonacci[i - 2];
                fibonacci.push(next); // agrega el número al final del array
            }
            document.getElementById("resultado").textContent = "Secuencia de Fibonacci para " + numero + " números: " + fibonacci.join(", ");
        }
    } else {
        document.getElementById("resultado").textContent = "Ingresa un número válido.";
    }
}
