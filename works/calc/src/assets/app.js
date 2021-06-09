let month = 18,
    sum = 5000,
    earnings = 0,
    pay = 0,
    yearPercent = 24;

//Слайдер месяца
let slider_month = document.getElementById("month");
//Слайдер суммы
let slider_sum = document.getElementById("sum");
//Ваш заработок
let earnings_output = document.getElementById("earnings_output");
//Ежемесячная выплата
let pay_output = document.getElementById("pay_output");

const calc = () => {
    let profit = sum * yearPercent * month * 30 / (30 * 12) / 100;
    let everyMonthProfit = profit / month;
    earnings_output.innerHTML = new Intl.NumberFormat().format(profit);
    pay_output.innerHTML = new Intl.NumberFormat().format(everyMonthProfit);
}

const sum_slider = () => {
    sum = slider_sum.value;
    document.getElementById("investments_span").innerHTML = new Intl.NumberFormat().format(slider_sum.value);
    calc();
}

const month_slider = () => {
    month = slider_month.value;
    document.getElementById("month_span").innerHTML = slider_month.value;
    calc();
}
