var weight, height, measure, bmi, error;


function calculate() {
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  error = "enter values";
  height /= 100;
  height *= height;
  bmi = weight/height;
  bmi = bmi.toFixed(1);


  if (bmi < 18.4) {
    measure = "bmi is" + bmi + "means" + "underweight";
  } else if (bmi >= 28.4 && bmi <= 24.9 ) {
    measure = "bmi is" + bmi + "means" + "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    measure = "bmi is" + bmi + "means" + "overweight";
  } else if (bmi >= 30) {
   measure = "bmi is" + bmi + "means" + "obese";
  }
  
  if ( weight === 0) {
    document.getElementById("results").innerHTML = error;
  } else if ( height === 0) {
    document.getElementById("results").innerHTML = error;
  } else {
    document.getElementById("results").innerHTML = measure;
  }
  if (weight < 0) {
    document.getElementById("results").innerHTML = "no valid";
  }
}
