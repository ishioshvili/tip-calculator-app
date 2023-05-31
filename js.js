const inputBill = document.querySelector('.inputBill')
const inputPerson = document.querySelector('.inputPerson')
const tipAmount = document.getElementById("tipAmount")
const totalPerson = document.querySelector('.totalPerson')
const reset = document.querySelector('.buttonReset')
const zero = document.querySelector(".zero")
const percentColor = document.querySelectorAll(".percent")
const customPercent = document.querySelector('.custom')


let bill
let person
let percentTip

let personTip
let tipAmountx
let totalPersonx


reset.addEventListener('click', resetValue)


const percents = (p, i)=> {
  percentTip = p;
  for (let n = 0; n < 5; n ++) {
    percentColor[n].style.backgroundColor = "#00474B"
  }
  percentColor[i].style.backgroundColor = "#26C2AE" 
  calculationtipAmount()
  calculationtotalPerson()
  tipAmountText()
  totalPersonText()
  resetColors ()
};

const inputPercent = (p) => {
  percentTip = p
  calculationtipAmount()
  calculationtotalPerson()
  tipAmountText()
  totalPersonText()
  resetColors ()
}

inputBill.addEventListener('input', () => {
  bill = inputBill.value;
  calculationtipAmount()
  calculationtotalPerson()
  tipAmountText()
  totalPersonText()
  resetColors ()
});

inputPerson.addEventListener('input', () => {
  person = inputPerson.value
  if (person == 0) {
    zero.style.display = "block"
    inputPerson.style.outlineColor="#E17457"
  }
  else {
    zero.style.display = "none"
    inputPerson.style.outlineColor="#26C2AE"
    calculationtipAmount()
    calculationtotalPerson()
    tipAmountText()
    totalPersonText()
    resetColors ()
  }
})


function calculationtipAmount() {
  if (person > 0) {
    tipAmountx = ((bill * percentTip / 100) / person).toFixed(2)
    return tipAmountx
  }
  else {return "0.00"}
}

function calculationtotalPerson() {
  if(person > 0) {
    totalPersonx = (bill / person + (bill * percentTip / 100) / person).toFixed(2)
    return totalPersonx
  }
  else {return "0.00"}
}

function resetValue() {
  inputBill.value = ''
  inputBill.placeholder = '0'
  inputPerson.value = ''
  inputPerson.placeholder = '0'
  tipAmount.textContent = '$0.00'
  totalPerson.textContent = '$0.00'  
  bill = 0
  person = 0
  percentTip = 0
  zero.style.display = "none"
  for (let n = 0; n < 5; n ++) {
    percentColor[n].style.backgroundColor = "#00474B"
  }
  customPercent.value = ''
  percentColor.value = 0
  resetColors ()
}

function resetColors () {
  if (inputBill.value != '' || inputPerson.value != ''  || percentColor.value != '') {
    reset.style.backgroundColor = "#26C2AE"
  }
  else {
    reset.style.backgroundColor = "#0D686D"
  }
}

function tipAmountText() {
  tipAmount.textContent = '$' + calculationtipAmount()
}

function totalPersonText() {
  totalPerson.textContent = '$' + calculationtotalPerson()
}
