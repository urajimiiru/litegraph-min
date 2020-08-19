

class SampleNode {
    
    constructor() {
        this.addInput("Input")
    }
    onAction(type, data) {
        console.log({ type, data })
    }
}

SampleNode.title = "Node Title"

module.exports = SampleNode