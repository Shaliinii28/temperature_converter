const calculateTemp = () => {
    const inputTemp = document.getElementById('temperature').value;

    const tempSelected = document.getElementById('select1');
    const valueTemp = select1.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celsToFahr = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahrToCels = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celsToFahr(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahrToCels(inputTemp) + "&#176; Celsius";
    }
}