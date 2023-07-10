// SPDX-License-Identifier: MIT

// version selection
pragma solidity ^0.8.1;

// creating contract
contract MoodDairy {
    
    // defining few var
    string mood;

    //Write & Read fn - Set Mood & Get Mood

    /*
    - setMood takes a string (_mood) stores it in memory (available only at runtime) 
    and sets the mood passed (any string)
    - Accesible from anywhere since a public fn
    */
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    /*
    - getMood is a public fn that strings value of mood stored in previoud fn (setMood)
    - The fn is gasless as its a view fn (dosen't modify state of block chain)
    - Accesible from anywhere as it is a public fn. 
    */
    function getMood() public view returns (string memory){
        return mood;
    }
}