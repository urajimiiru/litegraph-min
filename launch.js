const { LiteGraph } = require('./src/litegraph')
require('./css/litegraph.css')

// Node
const SampleNode = require('./src/nodes/SampleNode')
LiteGraph.registerNodeType('sample/node', SampleNode)

// Editor
let div = document.createElement('div')
div.id = 'editor-container'
document.body.appendChild(div)

const Editor = require('./src/litegraph-editor')
window.editor = new Editor('editor-container')

// State
const state = { "last_node_id": 2, "last_link_id": 0, "nodes": [{ "id": 1, "type": "sample/node", "pos": [198, 101], "size": { "0": 140, "1": 26 }, "flags": {}, "order": 0, "mode": 0, "inputs": [{ "name": "Input", "type": 0, "link": null }], "properties": {} }, { "id": 2, "type": "sample/node", "pos": [199, 201], "size": { "0": 140, "1": 26 }, "flags": {}, "order": 1, "mode": 0, "inputs": [{ "name": "Input", "type": 0, "link": null }], "properties": {} }], "links": [], "groups": [], "config": {}, "extra": {}, "version": 0.4 }
window.editor.graph.configure(state)
