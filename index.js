const btnE1= document.getElementById("btn")
const bmiInputE1 = document.getElementById("bmi-result")
const weightConditionE1 =document.getElementById("WeightCondition")
function calculateBMI(){
    const heightValue = document.getElementById
    ("Height").value
    const weightValue = document.getElementById
    ("Weight").value

    const bmiValue = weightValue /(heightValue* heightValue)*10000

    bmiInputE1.value = bmiValue
    
    if(bmiValue < 18.5){
        weightConditionE1.innerText ="Under Weight";
    }else if (bmiValue >=18.5 && bmiValue <= 24.9)
    {
        weightConditionE1.innerText ="Normal Weight";
    } else if (bmiValue >=25 && bmiValue <=29.9){
        weightConditionE1.innerText ="Overweight";
    } else if (bmiValue >=30){
        weightConditionE1.innerText ="Obesity";
    }
}

btnE1.addEventListener("click",calculateBMI)