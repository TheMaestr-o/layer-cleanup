#target photoshop

// Layer Cleanup Script
// Removes empty layers, invisible layers, and organizes document structure

function main() {
    if (!documents.length) return;
    
    var doc = app.activeDocument;
    
    if (!confirm("Proceed with layer cleanup?")) return;
    
    removeAllInvisibleLayers(doc);
    removeAllEmptyLayers(doc);
    
    alert("Layer cleanup completed!");
}

function removeAllInvisibleLayers(doc) {
    var layers = doc.layers;
    for (var i = layers.length - 1; i >= 0; i--) {
        if (!layers[i].visible && !layers[i].isBackgroundLayer) {
            layers[i].remove();
        }
    }
}

function removeAllEmptyLayers(doc) {
    var layers = doc.layers;
    for (var i = layers.length - 1; i >= 0; i--) {
        try {
            if (layers[i].bounds[0] == layers[i].bounds[2]) {
                layers[i].remove();
            }
        } catch (e) {}
    }
}

main();
