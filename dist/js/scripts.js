const btn = document.getElementById("send");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const temperature = document.querySelector("#temperature").value;

    const tipo = document.getElementById("celFah").value;

    // console.log(temperature);

    var Temperatura = Formula(tipo, Number(temperature));

    var result = document.getElementById("result").innerHTML;

    document.getElementById("result").innerHTML = `${result} ${Temperatura}`;

});

function Formula(type, temperature) {

    if (type === 'fah') {
        return (((temperature - 32) / 9) * 5);

    } else {
        return ((temperature / 5) * 9) + 32;
    }
}