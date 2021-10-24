class Calculator{
    constructor(currentOperandDisplay,previousOperandDisplay){
        this.previousOperandDisplay = previousOperandDisplay;
        this.currentOperandDisplay = currentOperandDisplay;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number){
        if((number === '.' && this.currentOperand.includes('.')) ||
         (number === '.')&& this.currentOperand.length === 0) return;
         this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation){       
       if(this.currentOperand === '' && this.previousOperand ==='') return;
        if(this.previousOperand !=''){
            this.compute();
        }
       console.log(operation);
        if(this.operation === undefined){
            this.operation = operation;
            this.previousOperand = this.currentOperand;
            this.currentOperand = '';
        }else{
            this.operation = operation;
        }
    }
    compute(){
        let computation = 0;
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        if(isNaN(prev)||isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return
        }
                this.currentOperand = computation;
                this.previousOperand = '';
                this.operation = undefined;
    }
    updateDisplay(){
       this.currentOperandDisplay.innerText = this.currentOperand;
       if(this.operation != null){
       this.previousOperandDisplay.innerText = `${this.previousOperand} ${this.operation}`;
    }else{
        this.previousOperandDisplay.innerText = `${this.previousOperand}`;
    }
}
}

let numbersBtns = document.querySelectorAll('[data-number]');
let operationBtns = document.querySelectorAll('[data-operation]');
let equalsBtn = document.querySelector('[data-equals]');
let deleteBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-all-clear]');
let previousOperandDisplay = document.querySelector('[data-previous-operand]');
let currentOperandDisplay = document.querySelector('[data-current-operand]');


let calculator = new Calculator(currentOperandDisplay,previousOperandDisplay);

numbersBtns.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationBtns.forEach(operButton =>{
   operButton.addEventListener('click',()=>{
       calculator.chooseOperation(operButton.innerText);
       calculator.updateDisplay();
   })
})

equalsBtn.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();
})
allClearBtn.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
})
deleteBtn.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
})