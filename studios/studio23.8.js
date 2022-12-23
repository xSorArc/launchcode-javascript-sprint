// 23.8 STUDIO: The DOM and Events
// 23.8.2. The Requirements
// 1) Use the window load event to ensure all elements have loaded before attaching event handlers.
// 2) When the "Take off" button is clicked, the following should happen:
//    a) A window confirm should "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//    b) The flight status should change to "Shuttle in flight."
//    c) The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//    d) The shuttle height should increase by 10,000 miles.
function flightSim () {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const shuttleWidth = document.getElementById("spaceShuttleWidth");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
    takeoff.addEventListener("click", event => {
        if (confirm("Confirm that the shuttle is ready for takeoff.")) {        // 2.a
            flightStatus.innerHTML = "Shuttle in flight.";                      // 2.b
            shuttleBackground.style.backgroundColor = "blue";                   // 2.c
            shuttleHeight.innerHTML = 10000;                                    // 2.d
        }
    });

    // 3) When the "Land" button is clicked, the following should happen:
    //    a) A window alert should let the user know "The shuttle is landing. Landing gear engaged."
    //    b) The flight status should change to "The shuttle has landed."
    //    c) The background color of the shuttle flight screen should change from blue to green.
    //    d) The shuttle height should go down to 0.
    land.addEventListener("click", event => {
        alert("The shuttle is landing. Landing gear engaged.");                 // 3.a
        flightStatus.innerHTML = "The shuttle has landed.";                     // 3.b
        shuttleBackground.style.backgroundColor = "green";                      // 3.c
        shuttleHeight.innerHTML = 0;                                            // 3.d
        rocket.style.left = '160px';                                            // Bonus
        rocket.style.bottom = '0px';                                           
    });

    // 4) When the "Abort Mission" button is clicked, the following should happen:
    //    a) A window confirm should "Confirm that you want to abort the mission." If user wants to abort the mission, then add parts b-d. 
    //    b) The flight status should change to "Mission aborted."
    //    c) The background color of the shuttle flight screen should change from blue to green.
    //    d) The shuttle height should go to 0.
    abort.addEventListener("click", event => {
        if(confirm("Confirm that you want to abort the mission.")) {            // 4.a
            flightStatus.innerHTML = "Mission aborted.";                        // 4.b
            shuttleBackground.style.backgroundColor = "green";                  // 4.c
            shuttleHeight.innerHTML = 0;                                        // 4.d
            rocket.style.left = '160px';                                        // Bonus
            rocket.style.bottom = '0px'; 
        }
    });

    // 5) When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    //    a) The rocket image should move 10 px in the direction of the button that was clicked.
    //    b) If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    rocket.style.position = 'absolute';
    rocket.style.left = '160px';
    rocket.style.bottom = '0px';

    up.addEventListener("click", event => {
        parseInt(shuttleHeight.innerHTML) + 10000;
        if (shuttleHeight.innerHTML != "250000") {
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    down.addEventListener("click", event => {
        parseInt(shuttleHeight.innerHTML) - 10000;
        if (shuttleHeight.innerHTML != "0") {                                                     
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px';
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    })
   
    left.addEventListener("click", event => {
        parseInt(shuttleWidth.innerHTML) - 10000;
        if (shuttleWidth.innerHTML != "-170000") {                                                
            rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
        }
    })

    right.addEventListener("click", event => {
        parseInt(shuttleWidth.innerHTML) + 10000;
        if (shuttleWidth.innerHTML != "170000") {                                                   
            rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
        }
    })
}

window.addEventListener("load", flightSim);
/* NOTE: 
When you are moving the shuttle, you want to use absolute positioning in CSS. Absolute positioning means positioning the object based on 
its location in the parent object. In the case of our flight simulator, the parent object is a div with the id, shuttleBackground. 
Relative positioning means positioning the object based on its fellow child objects. We might use relative positioning if there were 
planet objects within our shuttleBackground div. When setting the position of an object in CSS, you use a string that ends in "px". So 
the position of 10 pixels is "10px". To add a number of pixels to the position, you may first have to use parseInt to convert the 
current position to a number.*/

// 23.8.3. Bonus Mission
// If you are done with the above and have some time left during class, there are a few problems that you can tackle for a bonus mission.
// 1) Keep the rocket from flying off of the background.
// 2) Return the rocket to its original position on the background when it has been landed or the mission was aborted.*/