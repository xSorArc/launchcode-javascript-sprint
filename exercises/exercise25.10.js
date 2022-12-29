// 25.10 EXERCISES: Forms
// 25.10.5 BONUS
// Use an event handler and the submit event to validate that all inputs have values. Do NOT let the form be submitted if inputs are empty.

// boosterCount = A positive number less than 10

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const testName = document.querySelector("input[name=testName]");
    const testDate = document.querySelector("input[name=testDate]");
    const boosterCount = document.querySelector("input[name=boosterCount]");
    const windRating = document.querySelector("input[name=windRating]");
    const button = document.getElementById("runSim");

    form.addEventListener("submit", (e) => {
        if (testName.value === "" || testDate.value === "" || boosterCount.value == "" || windRating.value == "") {
            alert("All fields are required!");
            e.preventDefault();
        }

        if (boosterCount.value <= 0 || boosterCount.value > 10) {
            alert("Rocket Boosters must be between 1 and 10.");
            e.preventDefault();
        }
    });
});