import fs from 'fs'

export function readFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8')
}
