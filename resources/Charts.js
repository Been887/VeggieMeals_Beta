document.addEventListener("DOMContentLoaded", function () {
    let xValues = ["poultry", "pigmeat", "beef", "sheep/goat"];
    let yValues1 = [16.96, 13.89, 9.35, 1.98];
    let barColours1 = ["red", "brown", "orange", "yellow"];

    new Chart(document.getElementById("foodsPearYear"), { 
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColours1,
                data: yValues1
            }]
        }
    });

    let yValues2 = [9.87, 12.31, 99.48, 39.72];
    let barColours2 = ["red", "brown", "orange", "yellow"];

    new Chart(document.getElementById("emissionsPerKG"), {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColours2, 
                data: yValues2
            }]
        }
    });
});
