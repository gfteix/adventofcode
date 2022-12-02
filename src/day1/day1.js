import { readFile } from '../file.js'

const buildCaloriesArray = (input) => {
    let currentSum = 0
    return input.reduce((calories, item, index) => {
        const value = Number(item)
        currentSum += value 

        if (value === 0 || (index === input.length - 1)){ 
            calories.push(currentSum) 
            currentSum = 0
        }

        return calories

    }, []).sort((a, b) => b - a)
}

const main = async function() {
        const input = (await readFile('src/day1/input_day1.txt')).split('\n')
        const result = buildCaloriesArray(input)

        console.log({
            first: result[0],
            second: result[1],
            third: result[2],
            sum: result[0] + result[1] + result[2]
        })
}

main()
