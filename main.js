let btns = document.querySelectorAll('.btn');
let screen = document.getElementById('screen');
let equal = document.getElementById('equal');
let cancel = document.getElementById('ac');

let result = 0;
let stNum = '';
let stNum2 = '';
let oper = '';


cancel.onclick= _ =>{
    screen.textContent = '';
    getTheFirstNumber();
}

function getTheFirstNumber(){
    stNum = '';
    console.log("getting the 1st number");
btns.forEach(num =>{
    num.onclick = _ =>{
        if(parseInt(num.textContent).toString() !== 'NaN'){
            stNum += num.textContent;
            screen.textContent = stNum;
            }else if(num.textContent === 'Del'){
                if(stNum.length>0){
                        stNum = stNum.slice(0,-1);
                        screen.textContent = stNum;
                }else{
                    stNum = 0;
                    screen.textContent = stNum;
                }
            }else if(num.textContent === 'AC'){
                screen.textContent = '';
                getTheFirstNumber();
                    
            }else{
                getTheOperator();
            }
    }
})
}

function getTheOperator(){
    oper = '';
    console.log("getting into operator function");
    btns.forEach(num =>{
        num.onclick = _ =>{
            if(parseInt(num.textContent).toString() === 'NaN'){
                oper = num.textContent;
                screen.textContent = oper;
                if(oper.length === 1){
                    console.log("sending toward get 2nd");
                    getThe2ndNumber();
                }else if(num.textContent === 'AC'){
                    screen.textContent = '';
                    getTheFirstNumber();
                }
            }else{
                getTheOperator();
            }
        }
    })
}

function getThe2ndNumber(){
    stNum2 = '';
    console.log("getting the 2nd number");
    btns.forEach(num =>{
        num.onclick = _ =>{
            if(parseInt(num.textContent).toString() !== 'NaN'){
                stNum2 += num.textContent;
                screen.textContent = stNum2;
                }else if(num.textContent === 'Del'){
                    if(stNum2.length>0){
                            stNum2 = stNum.slice(0,-1);
                            screen.textContent = stNum2;
                    }else{
                        stNum2 = 0;
                        screen.textContent = stNum2;
                    }
                }else if(num.textContent === 'AC'){
                        screen.textContent = '';
                        getTheFirstNumber();
                }
        }
    })

    equal.onclick = _ =>{
        console.log("equal clicked")
    if(oper === '+'){
        result = parseInt(stNum) + parseInt(stNum2);
        screen.textContent = result;
        getTheFirstNumber();
    }else if(oper === '-'){
        result = parseInt(stNum) - parseInt(stNum2);
        screen.textContent = result;
        getTheFirstNumber();
    }
    if(oper === '*'){
        result = parseInt(stNum) * parseInt(stNum2);
        screen.textContent = result;
        getTheFirstNumber();
    }
    if(oper === '/'){
        result = parseInt(stNum) / parseInt(stNum2);
        screen.textContent = result;
        getTheFirstNumber();
    }
    }
    }


getTheFirstNumber();
