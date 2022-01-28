
/* 

Step 1: Prompt User for their name
Step 2: Prompt if the user would like to play 3 holes or 6 holes, store in variable (holeCount),
        loop holeCount times
Step 3: Prompt the user the appropriate amount of times and require amount of putts played at hole
Step 4: Keep track of total number of putts, and at end, compare to total course par (3 for every hole)
Step 5: After last hole, display one of three messages depending on over, under, or on par
        • If over: "Nice try, (name)... Your total par was: +(par)"
        • If under: " Great job, (name)! Your total par was: -(par)"
        • If even: "Good game, (name)> Your total par was: 0"
*/



let userName = prompt("Welcome to GC mini-golf! What is your name?");

let holeCount = prompt ("Hi " + userName + "! Would you like to play 3 holes or 6 holes?")
let total = 0;
let parnum = 1;
let putnum = 1;
for (let i = 0; i < holeCount; i++) {
    let par = Number( prompt ("How many puts for hole " + putnum++ + "?   (par " + parnum++ + ")"));
    total += par;
}   

console.log(userName + "'s total par is " + total + ".")



if (total > holeCount*3) {
    alert ("Nice try, " + userName + "... Your total par was: +" + (total - holeCount*3) + ".")
}

else if (total < holeCount*3) {
    alert ("Great job, " + userName + "! Your total par was: " + (total - holeCount*3) + ".")
}

else (total = holeCount*3) ;{
    alert ("Good game, " + userName + ". Your total par was: 0")
}