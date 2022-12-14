window.onload  = function(){

    // HTML elements
    let bill = document.getElementById('bill');
    let billDesc = document.getElementById('bill-desc');
    let billAmount = document.getElementById('bill-amount');
    let addButton = document.getElementById('addBtn');
    let listSection = document.getElementById('listSection');

    let name = 'Guest';

    // functions
    const saveExpense = (username, expense) => {
        let expenses = getExpenses(username);
        localStorage.setItem(username, JSON.stringify([...expenses, expense]));
    };

    const saveExpenses = (username, expenses) => {
        localStorage.setItem(username, JSON.stringify(expenses));
    };

    const getExpenses = (username) => {
        return JSON.parse(localStorage.getItem(username) || "[]");
    };

    const prepareExpenses = (username) => {
        let expenses = getExpenses(username);
        if(expenses.length > 0) {
            return expenses.reduce((prev, cur) => {
                return prev + cur;
            });
        } else {
            return "";
        }
    };

    const getNextIdx = (username) => {
        return getExpenses(username).length;
    };

    const printExpenses = (username) => {
        listSection.innerHTML=prepareExpenses(username);
    };

    const enableElements = (index) => {
        document.getElementById(`bill-${index}`).disabled = false; 
        document.getElementById(`desc-${index}`).disabled = false; 
        document.getElementById(`amount-${index}`).disabled = false;
        document.getElementById(`btnEdit-${index}`).innerText = "Save";
    };

    const disableElements = (index) => {
        document.getElementById(`bill-${index}`).disabled = true; 
        document.getElementById(`desc-${index}`).disabled = true; 
        document.getElementById(`amount-${index}`).disabled = true;
        document.getElementById(`btnEdit-${index}`).innerText = "Edit"; 
    };

    const updateValues = (id) => {
        let expenses = getExpenses(name);
        let listItem = `
            <div id="row-${id}">
                ${id}. 
                <input id="bill-${id}" type="text" value="${document.getElementById("bill-"+id).value}" disabled />
                <input id="desc-${id}"type="text" value="${document.getElementById("desc-"+id).value}" disabled />
                <input id="amount-${id}"type="text" value="${document.getElementById("amount-"+id).value}" disabled />
                <button id="btnEdit-${id}">Edit</button>
                <button id="btnDelete-${id}">Delete</button>
            </div>
        `;
        let index = expenses.findIndex((item) => item.indexOf(`row-${id}`) !== -1);
        expenses[index] = listItem;
        saveExpenses(name, expenses);
    };

    const deleteExpense = (id) => {
        let expenses = getExpenses(name);
        saveExpenses(name, expenses.filter(item => item.indexOf(`row-${id}`) === -1));
    };

    const cleanValues = () => {
        bill.value = "";
        billDesc.value = "";
        billAmount.value = "";
    };

    // events
    addButton.addEventListener('click', () => {
        let idx = getNextIdx(name) + 1;
        let listItem = `
        <div id="row-${idx}">
            ${idx}. 
            <input id="bill-${idx}" type="text" value="${bill.value}" disabled />
            <input id="desc-${idx}"type="text" value="${billDesc.value}" disabled />
            <input id="amount-${idx}"type="text" value="${billAmount.value}" disabled />
            <button id="btnEdit-${idx}">Edit</button>
            <button id="btnDelete-${idx}">Delete</button>
        </div>
        `;
        saveExpense(name, listItem);
        cleanValues();
        printExpenses(name);
    });

    window.onclick = e => {
        if (e.target.tagName === "BUTTON" && e.target.innerText !== "Add Expense") {
            
            let id = (e.target.id).split("-")[1];
            if (e.target.innerText === "Edit") {
                console.log("Editando", e.target.id);
                enableElements(id);
            } else if (e.target.innerText === "Delete") {
                deleteExpense(id);
                printExpenses(name);
            } else if (e.target.innerText === "Save") {
                console.log("Guardando", e.target.id);
                disableElements(id);
                updateValues(id);
                printExpenses(name);
            }
        };
    };


    printExpenses(name);
};