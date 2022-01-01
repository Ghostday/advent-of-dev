const inptBudget = document.getElementById("income")

const btnAddExpense = document.getElementById("add-expense-button")
const inptExpenseName = document.getElementById("expense-name")
const inptExpenseAmt = document.getElementById("expense-amount")

const expenseTable = document.getElementsByClassName("expense-table")[0]

const summary = document.getElementsByClassName("summary-panel")[0].children
const summIncome = summary[0].children[1]
const summExpenses = summary[1].children[1]
const summBalance = summary[2].children[1]

inptBudget.addEventListener("blur", e => {
    console.log("No longer Active/Blurred")
    summIncome.innerText = inptBudget.value
})

btnAddExpense.addEventListener("click", e => {
    console.log("Add Expense")
    let expName = inptExpenseName.value
    let exp = inptExpenseAmt.value
    addExpense(expName, exp)
})

function addExpense(name, exp) {
    const title = document.createElement("div")
    title.innerText = name
    const amount = document.createElement("div")
    amount.className = "expense-amount"
    amount.innerText = exp

    const delDiv = document.createElement("div")
    delDiv.className = "delete"
    
    const btnDelete = document.createElement("button")
    btnDelete.name = "delete-expense"
    btnDelete.className = "delete-expense"

    const imgDelete = document.createElement("img")
    imgDelete.src = "./images/trash.svg"
    imgDelete.alt = "Trash"

    btnDelete.appendChild(imgDelete)
    delDiv.appendChild(btnDelete)

    btnDelete.addEventListener("click", e => {
        title.remove()
        amount.remove()
        delDiv.remove()
        checkMaths()
    })

    expenseTable.append(title, amount, delDiv)
    checkMaths()
}

function checkMaths() {
    const incomeTotal = parseFloat(summIncome.innerText)
    const expensesArr = document.getElementsByClassName("expense-amount")
    console.log(expensesArr)
    let expenseTotal = 0
    for (let i = 0; i < expensesArr.length; i++) {
        expenseTotal += parseFloat(expensesArr[i].innerText)
    }

    console.log(expenseTotal)
    console.log(typeof expenseTotal)

    summExpenses.innerText = expenseTotal
    const balanceTotal = incomeTotal - expenseTotal

    balanceTotal > 0 ? summBalance.className = "summary-amount positive" : summBalance.className = "summary-amount negative"

    summBalance.innerText = `$${balanceTotal}`
    
}
