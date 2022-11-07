function observation(oxygenSaturation){
    var observationValue;
    if(oxygenSaturation >= 96){
        observationValue = "Normal Reading.";
    }
    else if(oxygenSaturation == 95){
        observationValue = "Acceptable to continue home monitoring.";
    }
    else if(oxygenSaturation >= 93 && oxygenSaturation <= 94){
        observationValue = "Seek advice from health professionals."
    }
    else{
        observationValue = "Seek urgent medical advice."
    }
    return observationValue;
}

console.log(observation(93))