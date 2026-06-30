#target photoshop

function main() {
    if (!documents.length) return;
    
    var doc = app.activeDocument;
    
    if (!confirm("Proceed with layer cleanup?\n\nThis will remove invisible and empty layers.")) {
        return;
    }
    
    removeInvisibleLayers(doc);
    removeEmptyLayers(doc);
    removeEmptyLayerGroups(doc);
    
    alert("Layer cleanup completed successfully!");
}

function removeInvisibleLayers(doc) {
    var layers = doc.layers;
    for (var i = layers.length - 1; i >= 0; i--) {
        if (!layers[i].visible) {
            layers[i].remove();
        }
    }
}

function removeEmptyLayers(doc) {
    var layers = doc.layers;
    for (var i = layers.length - 1; i >= 0; i--) {
        if (layers[i].kind == LayerKind.NORMAL) {
            try {
                if (layers[i].bounds[0] == layers[i].bounds[2]) {
                    layers[i].remove();
                }
            } catch (e) {}
        }
    }
}

function removeEmptyLayerGroups(doc) {
    var layers = doc.layers;
    for (var i = layers.length - 1; i >= 0; i--) {
        if (layers[i].typename == "LayerSet" && layers[i].layers.length == 0) {
            layers[i].remove();
        }
    }
}

main();
