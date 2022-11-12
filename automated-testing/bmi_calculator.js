const bmi_functions = {
    calculateBMI : function calculateBMI(height, weight){
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let resultBMI = "";
        if (bmi < 16){
            resultBMI = `Severe Under Weight : ${bmi}`;
        }else if (bmi > 16 && bmi <= 17){
            resultBMI = `Moderate Under Weight : ${bmi}`;
        }else if (bmi > 17 && bmi <= 18.5){
            resultBMI = `Mild Under Weight : ${bmi}`;
        }else if (bmi > 18.5 && bmi <= 25){
            resultBMI = `Normal : ${bmi}`;
        }else if (bmi > 25 && bmi <= 30){
            resultBMI = `Over Weight : ${bmi}`;
        }else if (bmi > 30 && bmi <= 35){
            resultBMI = `Obese Class I : ${bmi}`;
        }else if (bmi > 35 && bmi <= 40){
            resultBMI = `Obese Class II : ${bmi}`;
        }else{
            resultBMI = `Obese Class III : ${bmi}`;
        }
        return resultBMI;   
    }
};

module.exports = bmi_functions;