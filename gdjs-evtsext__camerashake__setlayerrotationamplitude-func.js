
if (typeof gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude !== "undefined") {
  gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude = {};


gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString(eventsFunctionContext.getArgument("Layer"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Layer") == "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName").setString("__BaseLayer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__CameraShake").getChild("Layers").getChild(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("__CameraShake").getChild("LayerName"))).getChild("AmplitudeAngle").setNumber(eventsFunctionContext.getArgument("AmplitudeAngle"));
}}

}


};

gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.func = function(runtimeScene, AmplitudeAngle, Layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AmplitudeAngle") return AmplitudeAngle;
if (argName === "Layer") return Layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.registeredGdjsCallbacks = [];