
// supported callbacks:
// + onAdded: when added to graph (warning: this is called BEFORE the node is configured when loading)
// + onRemoved: when removed from graph
// + onStart:	when the graph starts playing
// + onStop:	when the graph stops playing
// + onDrawForeground: render the inside widgets inside the node
// + onDrawBackground: render the background area inside the node (only in edit mode)
// + onMouseDown
// + onMouseMove
// + onMouseUp
// + onMouseEnter
// + onMouseLeave
// + onExecute: execute the node
// + onPropertyChanged: when a property is changed in the panel (return true to skip default behaviour)
// + onGetInputs: returns an array of possible inputs
// + onGetOutputs: returns an array of possible outputs
// + onBounding: in case this node has a bigger bounding than the node itself (the callback receives the bounding as [x,y,w,h])
// + onDblClick: double clicked in the node
// + onInputDblClick: input slot double clicked (can be used to automatically create a node connected)
// + onOutputDblClick: output slot double clicked (can be used to automatically create a node connected)
// + onConfigure: called after the node has been configured
// + onSerialize: to add extra info when serializing (the callback receives the object that should be filled with the data)
// + onSelected
// + onDeselected
// + onDropItem : DOM item dropped over the node
// + onDropFile : file dropped over the node
// + onConnectInput : if returns false the incoming connection will be canceled
// + onConnectionsChange : a connection changed (new one or removed) (LiteGraph.INPUT or LiteGraph.OUTPUT, slot, true if connected, link_info, input_info )
// + onAction: action slot triggered
// + getExtraMenuOptions: to add option to context menu
class SampleNode {
    constructor() {
        // define inputs
        this.addInput("A")
        this.addInput("B")

        // define outputs
        this.addOutput("A ^ B")

        this.button = this.addWidget('button', '+', null, () => this.addOutput("next"))
        this.serialize_widgets = true
    }

    onStart() {
        console.log("Node Started")
        this.triggerSlot(0, 1)
    }

    onConfigure() {
        console.log("Node Configured")
    }

    // callback on input slot triggered
    onAction(type, data) {
        console.log("Node Input Triggered", { type, data })
    }

    getMenuOptions() {
        return [
            {
                content: "log graph",
                has_submenu: false,
                disabled: false,
                callback: () => {
                    console.log(
                        JSON.stringify(
                            this.graph.serialize()
                        )
                    )
                }
            }
        ]
    }
}

SampleNode.title = "XOR"
SampleNode.bgcolor = "#fff000"
SampleNode.boxcolor = "#00ffff"
SampleNode.color = "#ff00ff"
SampleNode.title_text_color = "#fff000"
SampleNode.shape = 1

module.exports = SampleNode