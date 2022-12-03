import { readFile } from '../file.js'

const isUpperCase = (str) => {
    return str.toUpperCase() === str
}

const alphaVal = (s) => { 
    const val = s.toLowerCase().charCodeAt(0) - 97 + 1
    return (isUpperCase(s)) ? (val + 26) : val
}

const main = async function() {
   const input = (await readFile('src/day3/input_day3.txt')).split('\n').map(item => {
        const middle = item.length/2
        const firstHalf = item.substring(0, middle)
        const secondHalf = item.substring(middle)

        const duplicated = new Set()

        for(const i in firstHalf) {
            if(secondHalf.includes(firstHalf[i])) {
                duplicated.add(firstHalf[i])
            }
        }

        return [...duplicated].reduce((sum, value) => {
            return sum += alphaVal(value)
        }, 0)
    })

    const result = input.reduce((sum, value) => sum += value)
}

main()
