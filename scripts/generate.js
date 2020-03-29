#!/usr/bin/env node
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const cheerio = require('cheerio')
const shortid = require('shortid')
var glob = require("glob")
const svgr = require('@svgr/core').default
const argv = require('yargs')
    .usage('Usage: $0 [options]')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Generate the filename in the raw-icons folder. (exclude the extension)')
    .alias('a', 'all')
    .nargs('a', 0)
    .describe('a', 'generate all files in the raw-icons folder')
    .help('h')
    .alias('h', 'help').argv

const readmePath = path.join(__dirname, '/componentReadme.hdb')
const readmeTemplate = Handlebars.compile(fs.readFileSync(readmePath, 'utf8'))
const indexPath = path.join(__dirname, '/index.hdb')
const indexTemplate = Handlebars.compile(fs.readFileSync(indexPath, 'utf8'))
const docPath = path.join(__dirname, '/docs.hdb')
const docTemplate = Handlebars.compile(fs.readFileSync(docPath, 'utf8'))

const rootIconDir = path.join(__dirname, '../src/icons')
if (!fs.existsSync(rootIconDir)){
    fs.mkdirSync(rootIconDir);
}

if (argv.f) {
    generateFile(`${argv.f}.svg`)
}

if (argv.a) {
    glob(path.join(__dirname, '/../raw-icons/*.svg'), (err, files) => {
        const componentNames = files.map(_ => {
            return generateFile(path.basename(_))
        })

        const indexContent = indexTemplate({componentNames})
        fs.writeFileSync(path.join(__dirname, '../src/index.ts'), indexContent)
        const docContent = docTemplate({componentNames})
        fs.writeFileSync(path.join(__dirname, '../docs-src/index.js'), docContent)

        console.log("Generation complete")
    })
}

function generateFile(filename) {
    const filePath = path.join(__dirname, '../raw-icons/', filename)
    if (!fs.existsSync(filePath)) {
        console.log(`file in ${filePath} does not exists.`)
        return 
    }

    const rawContent = fs.readFileSync(filePath, 'utf8')
    const baseName = path.basename(filename, '.svg');
    const componentName = _.chain(baseName).camelCase().upperFirst().value()
    console.log(componentName)
    const rootIconDir = path.join(__dirname, '../src/icons')
    const componentFileContent = processComponentContent(rawContent, componentName)

    const readmeFileContent = readmeTemplate({componentName})

    const iconDir = path.join(rootIconDir, componentName)
    if (!fs.existsSync(iconDir)){
        fs.mkdirSync(iconDir);
    }

    fs.writeFileSync(path.join(iconDir, 'index.tsx'), componentFileContent)
    fs.writeFileSync(path.join(iconDir, 'README.md'), readmeFileContent)

    console.log(`${componentName} generated`)
    return componentName
}

function processComponentContent(rawContent, componentName) {
    const $ = cheerio.load(rawContent)
    $('body>svg')
     .attr('xmlns', null)
     .attr('width', null)
     .attr('height', null)
    
    $('body>svg>title').remove()

    const fullHtmlOutput = $.html()
    const output = fullHtmlOutput
        .replace('<html>', '')
        .replace('</html>', '')
        .replace('<head>', '')
        .replace('</head>', '')
        .replace('<body>', '')
        .replace('</body>', '')
    
    const react = svgr.sync(output, { componentName, typescript: true })
    
    return react
}
