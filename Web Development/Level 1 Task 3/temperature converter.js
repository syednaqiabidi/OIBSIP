function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

function convertTemperature() {
    const Temperature = parseFloat(document.getElementById('input').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    let result;

    if (isNaN(Temperature)) {
        result = 'Please enter a valid temperature.';
    } else {
        if (from === to) {
            result = Temperature;
        } else {
            switch (from + 'To' + to) {
                case 'CToF':
                    result = celsiusToFahrenheit(Temperature);
                    break;
                case 'FToC':
                    result = fahrenheitToCelsius(Temperature);
                    break;
                case 'CToK':
                    result = celsiusToKelvin(Temperature);
                    break;
                case 'KToC':
                    result = kelvinToCelsius(Temperature);
                    break;
                case 'FToK':
                    result = fahrenheitToKelvin(Temperature);
                    break;
                case 'KToF':
                    result = kelvinToFahrenheit(Temperature);
                    break;
                default:
                    result = 'Invalid conversion type.';
            }
        }
    }

    document.getElementById('result').value = result.toFixed(2);
}

function clearFields() {
    document.getElementById('input').value = '';
    document.getElementById('result').value = '';
}
