import fs from 'fs'
import path from 'path'
let name = process.argv[2]
let cwd  = process.argv[3].replace(/\\/g, '/')
if(!name) throw new Error('name is required')
if(!cwd ) throw new Error('cwd is required')

// get src and dst paths
let files = fs.globSync(`${cwd}/template/**/*.*`)
.map(f => f.replace(/\\/g, '/'))
.map(f => ({relaive:f.split(`${cwd}/template/`).pop(), src: f}))
.map(f => ({src: f.src, dst: `${cwd}/${name}/${f.relaive}`}))

// console.log(name, files)

files.forEach(({src,dst}) => {
    const content    = fs.readFileSync(src, 'utf-8')
    const newContent = content.replace(/{{\s*\.NAME\s*}}/g, name)
    let dir = path.dirname(dst)
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true})
    fs.writeFileSync(dst, newContent)
})
