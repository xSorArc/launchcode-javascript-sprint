// 23.7. EXERCISES: The DOM and Events
// Time to make a flight simulator for your fellow astronauts!
// For each exercise, the requirements and desired effect of the events is listed.
function flightSim() {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // 1) When the Take off button is clicked, the text The shuttle is on the ground changes to Houston, we have liftoff!. 
    // The Take off button has an id="liftoffButton" attribute.
    button.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    // 2) When the user's cursor goes over the Abort Mission button, the button's background turns red. The Abort Mission button has 
    //    id="abortMission".
    missionAbort.addEventListener("mouseover", event => {
        missionAbort.style.backgroundColor = "red";
    });

    // 3) When the user's cursor leaves the Abort Mission button, the button's background returns to its original state 
    //    (Hint: Setting the background color to the empty string, "", will force it to revert to the default browser styles.)
    missionAbort.addEventListener("mouseout", event => {
        missionAbort.style.backgroundColor = "";
    });

    // 4) When the user clicks the Abort Mission button, make a confirmation window that says Are you sure you want to abort the mission?. 
    //    If the user confirms that they want to abort, the text changes to Mission aborted! Space shuttle returning home.
    missionAbort.addEventListener("click", event => {
        if(confirm("Are you sure you want to abort the mission?") === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    });      
}

window.addEventListener("load", flightSim);