let element = document.body;
let sales = document.querySelector('main .insights .sales');
let expenses = document.querySelector('main .insights .expenses');
let income = document.querySelector('main .insights  .income');
let table = document.querySelector('main .recent-order table');
let tableTD = document.querySelector('main .recent-order table tbody');
let item = document.querySelector('.right .sales-analytics .item');
let offline = document.querySelector('.right .sales-analytics .offline');
let customers = document.querySelector('.right .sales-analytics .customers');
let updates = document.querySelector('.right .recent-updates .updates');
let text = document.querySelectorAll('text-muted');

function myFunction() {
  element.classList.toggle('dark-mode');
  sales.classList.toggle('dark-mode');
  expenses.classList.toggle('dark-mode');
  income.classList.toggle('dark-mode');
  table.classList.toggle('dark-mode');
  item.classList.toggle('dark-mode');
  offline.classList.toggle('dark-mode');
  updates.classList.toggle('dark-mode');
  customers.classList.toggle('dark-mode');
  text.classList.toggle('dark-mode');
}
