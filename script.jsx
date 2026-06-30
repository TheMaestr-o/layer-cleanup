#target photoshop

function main(){
    app.displayDialogs = DialogModes.NO;
    var layercomps = false;
    var doc = app.activeDocument;
    if(!doc.saved){
            return;
        }
    }
    if(doc.layerComps.length != 0){
        } else {
            layercomps = true;
        }
    }


    selectAllLayers();
    var layersSelected = getSelectedLayersIdx();
    var layerIDs = [];
    for(var d = 0; d < layersSelected.length; d++){
    }

    for(var c = 0; c < doc.layerComps.length; c++){
        for(var z in layerIDs){
            if(getLayerVisibilityByIndex(Number(layerIDs[z][0])) || isLocked(Number(layerIDs[z][0])) || isLayerSet(Number(layerIDs[z][0]))){
            }
        }
    }
    deselectLayers();

	var clippingLayerIDs = [];
	for(var l in layerIDs) {
        if(layerIDs[l][1].toString() == "N") {
        	var clipInfo = isClippingLayer(LID);
        	if(clipInfo == 'bottomClippingLayer'){
        		while(isClippingLayer(LID)){
        			clipInfo = isClippingLayer(LID);
        			if(clipInfo != 'bottomClippingLayer'){
        				clippingLayerIDs.push([LID, "N"]);
						LID++;
        			} else {
        			}
        		}
        	}
        }
    }


    deselectLayers();
    var layersSelected = false;
    for(var l in layerIDs) {
        if(layerIDs[l][1].toString() == "N") {
        	layersSelected = true;
        }
    }
    if(layersSelected) {
    }





}














try{
	main();
} catch(err) {
	alert(err);
}
