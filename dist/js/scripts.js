const btn = document.querySelector("#sendTemperature", "#sendType");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const temperature = document.querySelector("#temperature");

    const value = temperature.value;

    console.log(value);

});