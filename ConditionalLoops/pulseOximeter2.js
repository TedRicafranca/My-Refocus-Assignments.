function observation(pulseRate){
    var observationValue;
    if(pulseRate >= 40 && pulseRate <= 100){
        observationValue = "Normal Reading.";
    }
    else if(pulseRate >= 101 && pulseRate <= 109){
        observationValue = "Acceptable to continue home monitoring.";
    }
    else if(pulseRate >= 110 && pulseRate <= 130){
        observationValue = "Seek advice from health professionals.";
    }
    else if(pulseRate >= 131){
        observationValue = "Seek urgent medical advice.";
    }
    // this is for pulse rate lower than 40
    else{
        observationValue = "Abnormal Reading";
    }
    return observationValue;
}

console.log(observation(140))