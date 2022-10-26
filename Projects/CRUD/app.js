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
        printExpenses(name);
    });

    window.onclick = e => {
        if (e.target.tagName === "BUTTON" && e.target.innerText !== "Add Expense") {
            let id = (e.target.id).split("-")[1];
            if (e.target.innerText === "Edit") {
                console.log("Editando", e.target.id);
                enableElements(id);
            } else if (e.target.innerText === "Delete") {

                console.log("Eliminando", e.target.id);
                console.log("Eliminando", e);
                
                let expenses = getExpenses(name);
                // expenses = ;
                saveExpenses(name, expenses.filter(item => item.indexOf(`row-${id}`) === -1));
                printExpenses(name);

            } else if (e.target.innerText === "Save") {
                console.log("Guardando", e.target.id);
                disableElements(id);
            }
        };
    };


    printExpenses(name);
    // averigaur quien dio click en delete o edit para edit entonces volver a pintar todo el DOM con los expenses como quedaron despues de guardar
};