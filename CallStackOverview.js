// This is overview of callstack and how it work.  The step by step process it take to invoke the function given in execution context.

function showering() {
    let taking = takeHotWater();
    return "showering,  its Hot!";
}

function takeHotWater() {
    let startGyser;
    for(i=0; i< 5; i++) {
        console.log(i);
    }
    startGyser = "Water is Hot now";
    return startGyser;
}

function takeMeal() {
    let meals = ["PanCake" , "Dam Aloo", "Pav Bahji", "PeanutButter"];
    return meals[Math.floor(Math.random()*meals.length)];
}

function MorningExercise() {
    let exercises = ["Yoga", "Pushups", "Pullups", "Burpies", "Core Exrecises"];
    return exercises[Math.floor(Math.random()*exercises.length)];
}

function eatBreakfast() {
    let meals = takeMeal();
    return `Eating ${meals}`;
}

function freshUp() {
    return "taken hot Water and FreshenUp";
}

function wakeUp() {
    freshUp();
    MorningExercise();
    showering();
    eatBreakfast();
    console.log("Ok ready to go to Work!");
}

wakeUp();
// paste this code in Devtool of crome browser, start the function by ctrl enter, then keep your eye on call stack console given on the left side and keep pressing arrow dot button given at the top or press f9.
