const { LiteGraph } = require('./litegraph')
require('../css/litegraph.css')
require('../css/overwrite.css')

// Node
const SampleNode = require('./nodes/SampleNode')
LiteGraph.registerNodeType('sample/node', SampleNode)

// Editor
let div = document.createElement('div')
div.id = 'editor-container'
div.style.overflow = 'hidden'
document.body.appendChild(div)

const Editor = require('./litegraph-editor')
window.editor = new Editor('editor-container')
// Editor State
const state = require('./state')
window.editor.graph.configure(state)


function onresize(){
    window.editor.graphcanvas.resize(window.innerWidth, window.innerHeight-80) // 2 x 40 header n footer
}

window.onload = function(){

    window.onresize = onresize
    onresize()
}