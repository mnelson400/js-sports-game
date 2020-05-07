// Reset Button Sart 

    const numResets = document.querySelector("#num-resets");
    // ^Declares constant variable "numResets" = HTML span id "num-resets".

    const resetButton = document.querySelector("#reset-button");
    // ^Declares constant variable "resetButton" = HTML button id "reset-button".

    resetButton.addEventListener("click", function () {
        const newTotal = Number (numResets.innerHTML) + 1;
        // ^Declares variable "newTotal" = number(not string) adds literal 1 to 
        //  the current value of the variable "numResets(declared on line 3)".

        numResets.innerHTML = newTotal;
        // ^Sets value of variable "numResets/HTML spad id num-resets" =
        //  variable "newTotal(declared on line 11)".

        team1shots.innerHTML = Number (0);
        // ^Resets the "Team 1/SHOTS TAKEN:" value to the number 0.

        team1goals.innerHTML = Number (0);
        // ^Resets the "Team 1/GOALS:" value to the number 0.

        team2shots.innerHTML = Number (0);
        // ^Resets the "Team 2/SHOTS TAKEN:" value to the number 0.

        team2goals.innerHTML = Number (0);
        // ^Resets the "Team 2/GOALS:" value to the number 0.

        console.log ("Reset button clicked");
        // ^Displays "reset button clicked" in the console.
        })
    // ^Instructs what to do when "reset-button" is clicked.

// Reset Button End

// Team 1 Start

    let team1shots = document.querySelector ("#teamone-numshots");
    // ^Declares the variable "team1shots" = HTML span id "teamone-numshots".

    let team1shoot = document.querySelector ("#teamone-shoot-button");
    // ^Declares the variable "team1shoot" = HTML button id "teamone-shoot-button".

    let team1goals = document.querySelector ("#teamone-numgoals");
    // ^Declares the variable "team1goals" = HTML span id "teamone-numgoals".

    team1shoot.addEventListener("click", function () {
    // ^Instructs what to do when "teamone-shoot-button" is clicked.
        
        console.log ("Team 1 shoot button clicked");
        // ^Displays "Team 1 shoot button clicked" in the console.
        
        let team1shotTotal = Number (team1shots.innerHTML) + 1;
        // ^Declares variable "team1shotTotal" = number(not string) adds literal 1 to 
        //  the current value of the variable "team1shots(declared on line 40)".

        team1shots.innerHTML = team1shotTotal;
        // ^Sets value of variable "team1shots/HTML span id teamone-numshots" =
        //  variable "team1shotTotal(declared on line 50)".

        
        let random1goals = Math.floor(Math.random() * 10);
        // ^Declares variable "random1goals" = to a randomly generated number.
        
            if (random1goals % 2 == 0) {
            // ^If "random1goals" is an even number then:

                let goal = Number (team1goals.innerHTML) + 1;
                // ^Declares the variable "goal" = current number of goals + number 1.

                team1goals.innerHTML = goal;
                // ^Changes the score.

                document.getElementById('fhk_score').play();
                // ^Play fhk "score" sound.

                // alert ("Front-Half Kenzie - Nothing but net!!!!")
                // ^Pop-up that says, "Front-Half Kenzie - Nothing but net!!!!"

                console.log ("If triggered/Great shot!");
                // ^Displays "If triggered/Great shot!" in the console.
            }

            else {
            // ^If "random1goals" is an odd number then:

                document.getElementById('fhk_miss').play();
                // ^Play fhk "miss" sound.

                // alert ("Front-Half Kenzie - You missed...")
                // ^Pop-up that says, "Front-Half Kenzie - You missed..."

                console.log ("Else triggered/Miss!");
                // ^Displays "else triggered/Miss!" in the console.
            }

    })

// Team 1 End

// Team 2 Start

let team2shots = document.querySelector ("#teamtwo-numshots");
// ^Declares the variable "team2shots" = HTML span id "teamtwo-numshots".

let team2shoot = document.querySelector ("#teamtwo-shoot-button");
// ^Declares the variable "team2shoot" = HTML button id "teamtwo-shoot-button".

let team2goals = document.querySelector ("#teamtwo-numgoals");
// ^Declares the variable "team2goals" = HTML span id "teamtwo-numgoals".

team2shoot.addEventListener("click", function () {
// ^Instructs what to do when "teamtwo-shoot-button" is clicked.
    
    console.log ("Team 2 shoot button clicked");
    // ^Displays "Team 2 shoot button clicked" in the console.

    let team2shotTotal = Number (team2shots.innerHTML) + 1;
    // ^Declares variable "team2shotTotal" = number(not string) adds literal 1 to 
    //  the current value of the variable "team2shots(declared on line 96)".

    team2shots.innerHTML = team2shotTotal;
    // ^Sets value of variable "team2shots/HTML span id teamtwo-numshots" =
    //  variable "team2shotTotal(declared on line 106)".
    
    let random2goals = Math.floor(Math.random() * 10);
    // ^Declares variable "random2goals" = to a randomly generated number.

        if (random2goals % 2 == 0) {
        // ^If "random2goals" is an even number then:

            let goal = Number (team2goals.innerHTML) + 1;
            // ^Declares the variable "goal" = current number of goals + number 1.

            team2goals.innerHTML = goal;
            // ^Changes the score.

            document.getElementById('bhk_score').play();
            // ^Plays fhk "score" sound.

            // alert ("Back-Half Kenzie - Nothing but net!!!!")
            // ^Pop-up that says, "Back-Half Kenzie - Nothing but net!!!!"

            console.log ("If triggered/Great shot!");
            // ^Displays "If triggered/Great shot!" in the console.
        }

        else {
        // ^If "random2goals" is an odd number then:

            document.getElementById('bhk_miss').play();
            // ^Plays bhk "miss" sound.

            // alert ("Back-Half Kenzie - You missed...")
            // ^Pop-up that says, "Back-Half Kenzie - You missed..."

            console.log ("Else triggered/Miss!");
            // ^Displays "else triggered/Miss!" in the console.
        }

})

// Team 2 End