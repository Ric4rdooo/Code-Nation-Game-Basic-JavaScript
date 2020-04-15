// Variables to set and use later on

let name = null;
let tome = null;
let gun = null;
let battery = null;
let batteryNum = null;
let pin = null;
let pinNum1 = null;
let pinNum2 = null;
let pinNum3 = null;
let pinNum4 = null;
let pinNum1Collected = null;
let pinNum2Collected = null;
let gen1 = "1";
let gen2 = "2";
let gen3 = "3";
let gen4 = "4";


// optionPicked variable to be checked against the optionArray and alreadyPicked array

let optionPicked = null;
let optionArray = [];
let alreadyPicked = [];


// Checks if the right generator has been selected

const checkGenPicked = (gen) => {
    if (batteryNum === gen) {
        return true
    } else {

    }
};


// Checks if the first 2 codes were collected and updates border color of pinNum DIV's

const allPinCodesCollected = () => {
    if (pinNum1Collected === true && pinNum2Collected === true) {
        let pinNum1Div = document.getElementById("pinNum1");
        let pinNum2Div = document.getElementById("pinNum2");
        let pinNum3Div = document.getElementById("pinNum3");
        let pinNum4Div = document.getElementById("pinNum4");
        pinNum1Div.classList.add("hasPin");
        pinNum2Div.classList.add("hasPin");
        pinNum3Div.classList.add("hasPin");
        pinNum4Div.classList.add("hasPin");
    }else {

    }
};


// Checks if the pin code is correct

const checkPinIsCorrect = (answer) => {
    if (pin === answer) {
        return true
    } else {

    }
};


// Checks if the option selected has already moved into the alreadyPicked array

const checkIfOptionHasBeenSelected = (option) => {
    let optionIndex = alreadyPicked.indexOf(option);
    console.log(optionIndex);
    if (alreadyPicked[optionIndex] === option) {
        console.log(optionPicked);
        return true;
    } else {
        return false
    }
};


// Updates all DIV's in the inventory section of the DOM depending on what needs to be updated

const updateInventory = (item) => {
    if (item === "name") {
        let nameDiv = document.getElementById("name");
        nameDiv.textContent = `Aurora ID: ${name}`;
    } else if (item === "tome" && tome === true) {
        document.getElementById("noTome").style.display = "none";
        document.getElementById("hasTome").style.display = "block";
    } else if (item === "gun" && gun === true) {
        document.getElementById("noGun").style.display = "none";
        document.getElementById("hasGun").style.display = "block";
    } else if (item === "battery" && battery === true) {
        document.getElementById("noBattery").style.display = "none";
        document.getElementById("hasBattery").style.display = "block";
        batteryNum = Math.floor(Math.random() * 3) + 1;
        batteryNum = batteryNum.toString();
        let batteryNumDiv = document.getElementById("batteryNum");
        batteryNumDiv.textContent = batteryNum.toString();
    } else if (item === "pinNum1" && pin != null) {
        let pinNum1Div = document.getElementById("pinNum1");
        pinNum1Div.textContent = pinNum1;
    } else if (item === "pinNum2" && pin != null) {
        let pinNum2Div = document.getElementById("pinNum2");
        pinNum2Div.textContent = pinNum2;
    } else if (item === "pinNum3" && pin != null) {
        let pinNum3Div = document.getElementById("pinNum3");
        pinNum3Div.textContent = pinNum3;
    } else if (item === "pinNum4" && pin != null) {
        let pinNum4Div = document.getElementById("pinNum4");
        pinNum4Div.textContent = pinNum4;
    } else {
        document.getElementById("hasTome").style.display = "none";
        document.getElementById("noTome").style.display = "block";
        document.getElementById("hasGun").style.display = "none";
        document.getElementById("noGun").style.display = "block";
        document.getElementById("hasBattery").style.display = "none";
        document.getElementById("noBattery").style.display = "block";
        let pinNum1Div = document.getElementById("pinNum1");
        pinNum1Div.textContent = "-";
        let pinNum2Div = document.getElementById("pinNum2");
        pinNum2Div.textContent = "-";
        let pinNum3Div = document.getElementById("pinNum3");
        pinNum3Div.textContent = "-";
        let pinNum4Div = document.getElementById("pinNum4");
        pinNum4Div.textContent = "-";
        let batteryNumDiv = document.getElementById("batteryNum");
        batteryNumDiv.textContent = "-";
        name = null;
        tome = null;
        gun = null;
        battery = null;
        batteryNum = null;
        pin = null;
        pinNum1 = null;
        pinNum2 = null;
        pinNum3 = null;
        pinNum4 = null;
    }
};


// Where are adventure begins

const room1 = () => {
    if (optionArray.length > 0) {

    } else {
        optionArray.push("A - Use computer");
        optionArray.push("B - Check storage");
        optionArray.push("C - Go to broken door");
        alert("After stumbing out of the cyro pod, I see multiple points of interest.");
        alert("Where should I explore first?");
        console.log(optionArray);
    }

    let optionPicking = prompt(`Choose an option: ${optionArray.join(" or ")}`);
    let optionPicked = optionPicking.toUpperCase();

    if (optionPicked === "A") {
        if (checkIfOptionHasBeenSelected("A - Use computer") === false) {
            alert("Use computer");
            alert("After running some error logs, I am finally able to root around and figure some information out. I am on UNM Aurora, bound for Planet #4534b, but something seems to have altered our path. It would appear that the ship is barely running on auxiliary power. There's also logs of one unjettisoned escape pod! That's my ticket off this ship, but I'll need to return power to the ship to be able to launch it properly.");
            alert(`The computer also spits out a singular number: ${pinNum1} This seems to be everything I can gather from this terminal`);
            updateInventory("pinNum1");
            pinNum1Collected = true;
            let indexNum = optionArray.indexOf("A - Use computer");
            optionArray.splice(indexNum, 1);
            alreadyPicked.push("A - Use computer");
            room1()
        } else {
            alert("You have already picked this option, please chose another");
            room1()
        }
    } else if (optionPicked === "B") {

        if (checkIfOptionHasBeenSelected("B - Check storage", alreadyPicked) === false) {

            alert("Check storage");
            alert("You have obtained A Gun and a... Tome?");
            tome = true;
            gun = true;
            updateInventory("tome");
            updateInventory("gun");
            let indexNum = optionArray.indexOf("B - Check storage");
            optionArray.splice(indexNum, 1);
            alreadyPicked.push("B - Check storage");
            room1()
        } else {
            alert("You have already picked this option, please chose another");
            room1()
        }

    } else if (optionPicked === "C") {
        if (checkIfOptionHasBeenSelected("C - Go to broken door", alreadyPicked) === false) {
            alert("Go to broken door");
            let advance = prompt("Do you want to continue through the door? Y/N");
            let answer = advance.toUpperCase();
            if (answer === "Y") {
                optionArray = [];
                alreadyPicked = [];
                room2()
            } else {
                room1()
            }
        } else {
            alert("You have already picked this option, please chose another");
            room1()
        }
    } else if (optionPicked !== "A" || optionPicked !== "B" || optionPicked !== "C") {
        alert("Option is not valid, please enter A, B or C");
        room1()
    }
};


// Second chapter of the adventure

const room2 = () => {
    if (optionArray.length > 0) {

    } else {
        optionArray.push("A - Look out window");
        optionArray.push("B - Go to airlock");
        alert("Prying open the door was easy enough. I find myself in a corridor, with a window I'm able to look out of and an airlock.");
        alert("Where should I explore next?");
        console.log(optionArray);
    }

    let optionPicking = prompt(`Choose an option: ${optionArray.join(" or ")}`);
    let optionPicked = optionPicking.toUpperCase();

    if (optionPicked === "A") {
        if (checkIfOptionHasBeenSelected("A - Look out window") === false) {
            alert("Look out window");
            alert("Well, the Wormhole warning wasn’t wrong. There are all sorts of super strange things out there. Pirate Ships, Zombies and a whole whale are floating out there.");
            alert(`The whole ship has no power too. Thankfully, I’m probably able to jump from where I am to where the generators are. There's also another singular number on the window: ${pinNum2}`);
            updateInventory("pinNum2");
            pinNum2Collected = true;
            let indexNum = optionArray.indexOf("A - Look out window");
            optionArray.splice(indexNum, 1);
            alreadyPicked.push("A - Look out window");
            room2()
        } else {
            alert("You have already picked this option, please chose another");
            room2()
        }
    } else if (optionPicked === "B") {
        if (checkIfOptionHasBeenSelected("B - Go to airlock", alreadyPicked) === false) {
            alert("Go to Airlock");
            alert("The input terminal to open the airlock is flying sparks out. How could I fix this?");
            if (tome === true && gun === true) {
                let advance = prompt("Choose an option: A - Gun or B - Tome");
                let answer = advance.toUpperCase();
                if (answer === "B") {
                    alert("The tome sends lightning to the terminal!");
                    alert("Success! I can go into the airlock now!");
                    optionArray = [];
                    alreadyPicked = [];
                    room3()
                } else {
                    alert("Both doors opened and exposed me to the harshness of space.");
                    alert("Game Over!");
                    updateInventory();
                }
            } else {
                alert("You have nothing to fix the terminal with, seems like a dead end");
                alert("Game Over!");
                updateInventory()
            }
        } else {
            alert("You have already picked this option, please chose another");
            room2()
        }
    } else if (optionPicked !== "A" || optionPicked !== "B") {
        alert("Option is not valid, please enter A or B");
        room2()
    }
};


// Our first puzzle to figure out

const room3 = () => {
    if (optionArray.length > 0) {

    } else {
        optionArray.push("A - Gen1");
        optionArray.push("B - Gen2");
        optionArray.push("C - Gen3");
        optionArray.push("D - Gen4");
        alert("When I reach the overview of the generator room, I find a large battery on the floor");
        battery = true;
        updateInventory("battery");
        alert("It probably needs to be fitted into one of the 4 generators to get the power working again. Which generator should I attempt to put the battery in?");
        console.log(optionArray);
    }

    let optionPicking = prompt(`Choose an option: ${optionArray.join(" or ")}`);
    let optionPicked = optionPicking.toUpperCase();

    if (optionPicked === "A") {
        if (checkGenPicked(gen1) === true) {
            alert("Thankfully, nothing went wrong as I put the new battery in. Power restores to the ship, and the door to the escape pods has opened.");
            optionArray = [];
            alreadyPicked = [];
            room4()
        } else {
            alert("As I attempted to put in the new battery, lightning jumps from the generator to the battery and by proximity, me");
            alert("Game Over!");
            updateInventory();
        }
    } else if (optionPicked === "B") {
        if (checkGenPicked(gen2) === true) {
            alert("Thankfully, nothing went wrong as I put the new battery in. Power restores to the ship, and the door to the escape pods has opened.");
            optionArray = [];
            alreadyPicked = [];
            room4()
        } else {
            alert("As I attempted to put in the new battery, lightning jumps from the generator to the battery and by proximity, me");
            alert("Game Over!");
            updateInventory();
        }
    } else if (optionPicked === "C") {
        if (checkGenPicked(gen3) === true) {
            alert("Thankfully, nothing went wrong as I put the new battery in. Power restores to the ship, and the door to the escape pods has opened.");
            optionArray = [];
            alreadyPicked = [];
            room4()
        } else {
            alert("As I attempted to put in the new battery, lightning jumps from the generator to the battery and by proximity, me");
            alert("Game Over!");
            updateInventory();
        }
    } else if (optionPicked === "D") {
        if (checkGenPicked(gen4) === true) {
            alert("Thankfully, nothing went wrong as I put the new battery in. Power restores to the ship, and the door to the escape pods has opened.");
            optionArray = [];
            alreadyPicked = [];
            room4()
        } else {
            alert("As I attempted to put in the new battery, lightning jumps from the generator to the battery and by proximity, me");
            alert("Game Over!");
            updateInventory();
        }
    }
};


// The end of the adventure

const room4 = () => {

    alert("I open the pod and sit down at the front, greeted by a computer");
    alert(`There's a torn piece of paper with 2 digits on them: ${pinNum3}, ${pinNum4}. Hmm I wonder if these are the last 2 digits for the escape pod pin`);
    updateInventory("pinNum3");
    updateInventory("pinNum4");
    allPinCodesCollected();
    alert("There's a code I need to enter into the terminal");
    alert("Input Code:");
    let advance = prompt("The Computer awaits the pin code.");
    let answer = advance.toString();
    if (checkPinIsCorrect(answer) === true) {
        alert("The computer releases all the controls and is now ready for take off. Time to finally get out of here!");
        alert("You Win!");
        alert("Thanks for playing!");
    } else {
        alert("The computer locks me out and I'm no longer able to access it.");
        alert("Game Over! So Close!");
    }
};


// Resets all variables, sets the pin number and asks the player for there name

const nameRequest = () => {
    // Set name as a prompt
    let pinNum1Div = document.getElementById("pinNum1");
    let pinNum2Div = document.getElementById("pinNum2");
    let pinNum3Div = document.getElementById("pinNum3");
    let pinNum4Div = document.getElementById("pinNum4");
    pinNum1Div.classList.remove("hasPin");
    pinNum2Div.classList.remove("hasPin");
    pinNum3Div.classList.remove("hasPin");
    pinNum4Div.classList.remove("hasPin");
    updateInventory();
    pin = Math.floor(Math.random() * 8999) + 1000;
    pin = pin.toString();
    pinNum1 = pin.charAt(0);
    pinNum2 = pin.charAt(1);
    pinNum3 = pin.charAt(2);
    pinNum4 = pin.charAt(3);
    name = prompt("this is Aurora AI on board assistance. Please enter your credentials!");
    updateInventory("name");
    alert(`Hello ${name}, Welcome to the Aurora, the premium vessel to transport you through the stars and beyond. Running various systems now to improve your user experience... `);
    room1();
};


// Displays the introduction, start button and sets the random pin number

const startGame = () => {
    document.getElementById("startGame").style.display = "none";
    document.getElementById("intro").style.display = "block";
};