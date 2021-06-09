let month = 18,
    sum = 5000,
    earnings = 0,
    pay = 0,
    yearPercent = 20;

//Слайдер месяца
let slider_month = document.getElementById("month");
//Слайдер суммы
let slider_sum = document.getElementById("sum");
//Ваш заработок
let earnings_output = document.getElementById("earnings_output");
//Ежемесячная выплата
let pay_output = document.getElementById("pay_output");
//Проценты
let year_percent_output = document.getElementById("year_percent_output");

const calc = () => {
    let profit = sum * yearPercent * month * 30 / (30 * 12) / 100;
    let allSum = profit + sum;
    let everyMonthProfit = allSum / month;

    earnings_output.innerHTML = new Intl.NumberFormat().format(Math.floor(profit));
    pay_output.innerHTML = Math.floor(everyMonthProfit);
    year_percent_output.innerHTML = yearPercent + "%"
}

const sum_slider = () => {
    sum = +slider_sum.value;
    document.getElementById("investments_span").innerHTML = new Intl.NumberFormat().format(slider_sum.value);
    calc();
}

const month_slider = () => {
    if (slider_month.value <= 17) {
        yearPercent = 15;
        document.getElementById("year_percent_output").innerHTML = "15%";
    }
    else if (slider_month.value <= 23) {
        yearPercent = 20;
        document.getElementById("year_percent_output").innerHTML = "20%";
    }
    else if (slider_month.value >= 24) {
        yearPercent = 24;
        document.getElementById("year_percent_output").innerHTML = "24%";
    }
    month = +slider_month.value;
    document.getElementById("month_span").innerHTML = slider_month.value;
    calc();
}

calc();