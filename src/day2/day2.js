import { readFile } from '../file.js'

const scoreMapper1 = {
    'A X' : 4,
    'B X' : 1,
    'C X' : 7,
    'A Y' : 8,
    'B Y' : 5,
    'C Y' : 2,
    'A Z' : 3,
    'B Z' : 9,
    'C Z' : 6
}

const scoreMapper2 = {
    'A X' : 3, //Z
    'B X' : 1, //X
    'C X' : 2, //Y
    'A Y' : 4, //X
    'B Y' : 5, //Y
    'C Y' : 6, //Z
    'A Z' : 8, //Y
    'B Z' : 9, //Z
    'C Z' : 7  //X
}

const main = async function() {
    const input = (await readFile('src/day2/input_day2.txt')).split('\n')

    let total1=0, total2=0

    input.forEach((round) => {
        total1 += scoreMapper1[round]
        total2 += scoreMapper2[round]
    }, 0)

    console.log(total1)
    console.log(total2)
}

main()

/*
A for Rock, 
B for Paper
C for Scissors

X for Rock (1) 
Y for Paper (2)
Z for Scissors (3)

total = sum of each round
round sum = shape_score + 0 ou 3(draw) ou 6
*/