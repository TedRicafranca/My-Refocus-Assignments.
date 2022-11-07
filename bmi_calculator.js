function calculateBMI(height, weight){
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let resultBMI = "";
    if (bmi < 18.6){
        resultBMI = `Under Weight : ${bmi}`;
    }else if (bmi >= 18.6 && bmi < 24.9){
        resultBMI = `Normal : ${bmi}`;
    }else{
        resultBMI = `Over Weight : ${bmi}`;
    }
    return resultBMI;   
}

//Height in inches
//Weight in kg
console.log(calculateBMI(180,65));