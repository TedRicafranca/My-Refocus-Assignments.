const _bmi = require("./bmi_calculator");

//weight / ((height * height) / 10000)  BMI Formula
// 40/((180 * 180) / 10000) = 12.35     bmi < 16   Severe Under Weight
// 55/((180 * 180) / 10000) = 16.98     bmi > 16 && bmi <= 17   Moderate Under Weight
// 58/((180 * 180) / 10000) = 17.90     bmi > 17 && bmi <= 18.5   Mild Under Weight
// 60/((180 * 180) / 10000) = 18.52     bmi > 18.5 && bmi <= 25  Normal
// 85/((180 * 180) / 10000) = 26.23     bmi > 25 && bmi <= 30   Over Weight
// 100/((180 * 180) / 10000) = 30.86    bmi > 30 && bmi <= 35   Obese Class I
// 120/((180 * 180) / 10000) = 37.04    bmi > 30 && bmi <= 35   Obese Class II
// 150/((180 * 180) / 10000) = 46.30    bmi > 40                Obese Class III

for(let x=40;x<=200;x+=5){
    let bmi = (x / ((180 * 180) / 10000)).toFixed(2);
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

    test(`Check BMI with Height=180 and Weight=${x}`, () => {
        expect(_bmi.calculateBMI(180,x)).toEqual(resultBMI);
    });
}




// test("Check BMI with value height=180 and weight=40", () => {
//     //test with 180 height and weight from 40 to 200 increment by 5
//     expect(_bmi.calculateBMI(180,40)).toEqual("Severe Under Weight : 12.35");   
    
// })