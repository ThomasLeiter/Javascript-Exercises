const inputForm = document.getElementById("inputForm");

const boilingTime = document.getElementById("boilingTime");

function checkInput(temperatureYolkEnd, massOfEgg, altitude){
    let errorMsg = "";
    if (temperatureYolkEnd < 62 || temperatureYolkEnd > 82){
        errorMsg += "Endtemperatur Eigelb muss zwischen 62° und 82° liegen.\n";
    }
    if (massOfEgg < 30 || massOfEgg > 100){
        errorMsg += "Masse des Eis muss zwischen 30 und 100g liegen.\n";
    }
    if (altitude < 0 || altitude > 4000){
        errorMsg += "Höhe über NN muss zwischen 0 und 4000m liegen.\n";
    }
    return errorMsg;
}

function calculateBoilingTime() {
    let temperatureYolkEnd = parseFloat(inputForm.temperatureYolkEnd.value);
    let massOfEgg = parseFloat(inputForm.massOfEgg.value);
    let altitude = parseFloat(inputForm.altitude.value);

    let errorMsg = checkInput(temperatureYolkEnd, massOfEgg, altitude);
    if (errorMsg.length > 0){
        alert(errorMsg);
        return;
    }

    // Copyright by GAM
    let temperatureEggBeginning = 4; // TStart - Temperatur des Eis bei Beginn des Kochvorgangs [Kühlschrank ≈ 4 °C … Zimmertemperatur ≈ 20 °C]
    //let temperatureYolkEnd = 63; // TInnen - Temperatur des gekochten Eigelbs im gewünschten Zustand [weich ≈ 62 °C … hart ≈ 82 °C]
    let temperatureBoilingWaterAtZero = 100;
    //let massOfEgg = 57; //M das Gewicht des Eis in Gramm medium = 57
    //let altitude = 0;
    let meterBoilingPoint = 285; // Siedepunkt sinkt um 1 °C pro 285 m. // K  thermalConductivityEgg / 60 from https://khymos.org/2009/04/09/towards-the-perfect-soft-boiled-egg/
    let temperatureBoilingWater =
        temperatureBoilingWaterAtZero - altitude / meterBoilingPoint; // TWater

    let eggC = 3.7; // from https://newton.ex.ac.uk/teaching/CDHW/egg/CW061201-1.pdf
    let eggP = 1.038; // from https://newton.ex.ac.uk/teaching/CDHW/egg/CW061201-1.pdf
    let eggK = 5.4 * Math.pow(10, -3); // from https://newton.ex.ac.uk/teaching/CDHW/egg/CW061201-1.pdf

    let thermalConductivityEgg =
        (eggC * Math.pow(eggP, 1 / 3)) /
        (eggK * Math.pow(Math.PI, 2) * Math.pow(4 * (Math.PI / 3), 2 / 3));

    let timeInSeconds =
        thermalConductivityEgg *
        Math.pow(massOfEgg, 2 / 3) *
        Math.log(
            (0.76 * (temperatureEggBeginning - temperatureBoilingWater)) /
            (temperatureYolkEnd - temperatureBoilingWater)
        );

    let timeInMinutes = timeInSeconds / 60;

    boilingTime.innerHTML = timeInMinutes;

}