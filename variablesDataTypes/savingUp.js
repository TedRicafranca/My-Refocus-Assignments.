let pesoSign = "\u20B1";
let personsName = "Sam";
let targetAmount = 10000;
let amountSaved = 5000;
let percentToSaved = Math.round(((targetAmount - amountSaved) / targetAmount) * 100);

console.log("Thank you for your discipline and hardwork, " + personsName + "! You are now " + percentToSaved + "% away from your goal of saving " + pesoSign + targetAmount.toLocaleString() + ".");