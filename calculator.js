const input_element = document.querySelector('.input');
const output_operation_element = document.querySelector('.operation .value');
const output_result_element = document.querySelector('.result .value');

let calcBtns = [{
        name: 'delete',
        symbol: '⌫',
        formula: false,
        type: 'key',
    },
    {
        name: 'clear',
        symbol: 'C',
        formula: false,
        type: 'key',
    },
    {
        name: 'percent',
        symbol: '%',
        formula: '/100',
        type: 'number',
    },
    {
        name: 'division',
        symbol: '÷',
        formula: '/',
        type: 'operator',
    },
    {
        name: '7',
        symbol: 7,
        formula: 7,
        type: 'number',
    },
    {
        name: '8',
        symbol: 8,
        formula: 8,
        type: 'number',
    },
    {
        name: '9',
        symbol: 9,
        formula: 9,
        type: 'number',
    },
    {
        name: 'multiplication',
        symbol: '×',
        formula: '*',
        type: 'operator',
    },
    {
        name: '4',
        symbol: 4,
        formula: 4,
        type: 'number',
    },
    {
        name: '5',
        symbol: 5,
        formula: 5,
        type: 'number',
    },
    {
        name: '6',
        symbol: 6,
        formula: 6,
        type: 'number',
    },
    {
        name: 'addition',
        symbol: '+',
        formula: '+',
        type: 'operator',
    }, ,
    {
        name: '1',
        symbol: 1,
        formula: 1,
        type: 'number',
    },
    {
        name: '2',
        symbol: 2,
        formula: 2,
        type: 'number',
    },
    {
        name: '3',
        symbol: 3,
        formula: 3,
        type: 'number',
    },
    {
        name: 'subtraction',
        symbol: '–',
        formula: '-',
        type: 'operator',
    },
    {
        name: '0',
        symbol: 0,
        formula: 0,
        type: 'number',
    },
    {
        name: 'comma',
        symbol: '.',
        formula: '.',
        type: 'number',
    },
    {
        name: 'calculate',
        symbol: '=',
        formula: '=',
        type: 'calculate',
    },
];

let data = {
    operation: [],
    result: [],
};

// function create the calc buttons
function createCalcBtns() {
    const btnsPerRow = 4;
    let addedBtns = 0;
    calcBtns.forEach((btn, index) => {
        if (addedBtns % btnsPerRow === 0) {
            input_element.innerHTML += `
            <div class="row"></div>
            `;
        }
        const row = document.querySelector('.input .row:last-child');
        row.innerHTML += `
        <button id="${btn.name}">
        ${btn.symbol}
        </button>
        `;
        addedBtns++;
    });
}
createCalcBtns();
//set target buttons
input_element.addEventListener('click', (e) => {
    const targetBtn = e.target;
    calcBtns.forEach((btn) => {
        if (btn.name == targetBtn.id) {
            calc(btn);
        }
    });
});

function calc(btn) {
    if (btn.type === 'number') {
        data.operation.push(btn.symbol);
        data.result.push(btn.formula);
    } else if (btn.type === 'operator') {
        data.operation.push(btn.symbol);
        data.result.push(btn.formula);
    } else if (btn.type === 'key') {
        if (btn.name === 'clear') {
            data.operation = [];
            data.result = [];
            updateOutputResult(0);
        } else if (btn.name === 'delete') {
            data.operation.pop();
            data.result.pop();
        }
    } else if (btn.type === 'calculate') {
        let join_result = data.result.join('');
        console.log(join_result);
        let result = eval(join_result);
        result = formatResult(result);

        console.log(result);
        updateOutputResult(result);
        data.operation = [];
        data.result = [];
        data.operation.push(result);
        data.result.push(result);

        return;
    }
    updateOutputOperation(data.operation.join(''));
}

function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
}

function updateOutputResult(result) {
    output_result_element.innerHTML = result;
}
// format result
function formatResult(result) {
    const maxOutputNumLength = 10;
    const outputPercesion = 5;
    if (digitCounter(result) > maxOutputNumLength) {
        if (isFloat(result)) {} else {}
    } else {}
}
// digit counter
function digitCounter(number) {
    return number.toString().length;
}

//check if a number is float or not
function isFloat(num) {
    return num % 1 !== 0;
}