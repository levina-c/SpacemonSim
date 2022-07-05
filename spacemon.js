const fs = require('fs');

function spacemonSim(roster1, roster2) {
    while (true) {
        // console.log('loop');
        if (roster1.length == 0) {
            return false;
        } else if (roster2.length == 0) {
            return true;
        } else {
            fight(roster1, roster2);
        }
    }
}

function fight(roster1, roster2) {
    let p1 = roster1[0][0];
    let p2 = roster2[0][0];
    let p1Energy = roster1[0][1];
    let p2Energy = roster2[0][1];
    let p1Power = roster1[0][2];
    let p2Power = roster2[0][2];
    let p1NEnergy = p1Energy;
    let p2NEnergy = p2Energy;
    let type_mult = 0;
    let type_mult2 = 0;
    if (p1 == p2){
        type_mult = 1;
        type_mult2 = 1;
    } else if (p1 == 'Mercury' && p2 == 'Venus'){
        type_mult = 2;
        type_mult = 0.5;
    } else if (p1 == 'Venus' && p2 == 'Mercury'){
        type_mult = 0.5;
        type_mult2 = 2;
    } else if (p1 == 'Mercury' && p2 == 'Mars'){
        type_mult = 0.5;
        type_mult2 = 2;
    } else if (p1 == 'Mars' && p2 == 'Mercury'){
        type_mult = 2;
        type_mult2 = 0.5;
    } else if (p1 == 'Mercury' && p2 == 'Earth'){
        type_mult = 1;
        type_mult2 = 1;
    } else if (p1 == 'Earth' && p2 == 'Mercury'){
        type_mult = 1;
        type_mult2 = 1;
    } else if (p1 == 'Venus' && p2 == 'Earth'){
        type_mult = 2;
        type_mult2 = 0.5;
    } else if (p1 == 'Earth' && p2 == 'Venus'){
        type_mult = 0.5;
        type_mult2 = 2;
    } else if (p1 == 'Venus' && p2 == 'Mars'){
        type_mult = 1;
        type_mult2 = 1;
    } else if (p1 == 'Earth' && p2 == 'Mars'){
        type_mult = 2;
        type_mult2 = 0.5;
    } else if (p1 == 'Mars' && p2 == 'Earth'){
        type_mult = 0.5;
        type_mult2 = 2;
    }
    let p1Attack = type_mult * p1Power;
    let p2Attack = type_mult2 * p2Power;
    p2NEnergy = p1Attackp2(p1Attack,p2NEnergy);
    while (true){
        if (p2NEnergy>0){
            p1NEnergy = p2Attackp1(p2Attack,p1NEnergy);
        } else {
            try {
                roster2.shift();
                console.log(roster2);
                p2 = roster2[0][0];
                p2Power = roster2[0][2];
                p2Energy = roster2[0][1];
                break;
            } catch {
                return spacemonSim(roster1,roster2);
            }
        }
        if (p1NEnergy>0){
            p2NEnergy = p1Attackp2(p1Attack,p1NEnergy);
        } else {
            try {
                roster1.shift();
                p1 = roster1[0][0];
                p1Energy = roster1[0][1];
                p1Power = roster1[0][2];
                break;
            } catch {
                return spacemonSim(roster1,roster2);
            }
        }
    }
}

function p1Attackp2 (p1Attack,p2NEnergy){
    p2NEnergy = p2NEnergy - p1Attack;
    return p2NEnergy;
}

function p2Attackp1 (p2Attack,p1NEnergy){
    p1NEnergy = p1NEnergy - p2Attack;
    return p1NEnergy;
}

console.log(spacemonSim([['Earth',100,10], ['Earth',100,10]], [['Mercury',80,10], ['Venus',80,10]]));