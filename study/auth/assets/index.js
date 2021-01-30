const users = [
    { id: 1, name: 'Dimych', password: "1234" },
    { id: 2, name: 'Andrew', password: "1234" },
    { id: 3, name: 'Sveta', password: "1234" },
    { id: 4, name: 'Sasha', password: "1234" },
    { id: 5, name: 'Viktor', password: "1234" },
    { id: 6, name: 'Valera', password: "1234" }
];


const add = () => {
    let userName = document.getElementById('userName');
    let userPass = document.getElementById('userPass');
    let newId = users.length + 1;
    let newUser = { id: newId, name: userName.value, password: userPass.value }

    const success = () => {
        users.push(newUser);
        let form = document.getElementById('signup');
        form.style.display = 'none';
        show();
    }

    let ready = users.some(person => person.name === userName.value);
    ready ? alert("Пользователь с таким именем уже сущеествует!") : success();
}

const signIn = () => {
    let userName = document.getElementById('name');
    let userPass = document.getElementById('password');

    let ready = users.some(person => person.name === userName.value && person.password === userPass.value);

    if (ready) {
        showContent()
    } else {
        alert("Логин или пароль введен не правильно")
    }
}


const show = () => {

    let elem = document.getElementById('preload');
    elem.style.display = "flex";
    setTimeout(() => elem.style.display = "none", 2000);

    let form = document.getElementById('signin');
    form.style.display = 'flex';
}

const showContent = () => {
    let form2 = document.getElementById('signin');
    form2.style.display = 'none';

    let elem = document.getElementById('preload');
    elem.style.display = "flex";
    setTimeout(() => elem.style.display = "none", 2000);

    let form = document.getElementById('mainContent');
    form.style.display = 'flex';
}






window.users = users;

/*
const show = (key) => {
    switch (key) {
        case preload:
            let elem = document.getElementById('preload');
            elem.style.display = "flex";
            setTimeout(() => elem.style.display = "none", 2000);
        case signin:
            let elem1 = document.getElementById('signin');
            elem1.style.display = 'flex';
        case signup:
            let elem2 = document.getElementById('signup');
            elem2.style.display = 'flex';
        default:
            return key
    }
}
*/