import { readFile } from '../file.js'

const isUpperCase = (str) => {
    return str.toUpperCase() === str
}

const alphaVal = (s) => { 
    const val = s.toLowerCase().charCodeAt(0) - 97 + 1
    return (isUpperCase(s)) ? (val + 26) : val
}

const groupArrayByThree = (arr) => {
    return Array.from({length: arr.length/3}, () => arr.splice(0,3));
}

const main = async function() {
   const input = (await readFile('src/day3/input_day3.txt')).split('\n')
   /* first part
   const priorities = input.map(item => {
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
*/

  //second part
  const groupedArray = groupArrayByThree(input)
  const priorities = groupedArray.map((array) => {
    const duplicated = new Set()
    for(const i in array[0]) {
        if(array[1].includes(array[0][i]) && array[2].includes(array[0][i])) {
            duplicated.add(array[0][i])
        }
    }

    return [...duplicated].reduce((sum, value) => sum += alphaVal(value), 0)
  })


    const prioritiesSum = priorities.reduce((sum, value) => sum += value, 0)
    console.log(prioritiesSum)
}

main()
