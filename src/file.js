import fs from 'fs'

export async function readFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8')
}
