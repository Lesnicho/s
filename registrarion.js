const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");

const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");

const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => {
    e.preventDefault();

  

    // Создаем экземпляр класса XMLHttpRequest
    const request = new XMLHttpRequest();

    // Указываем путь до файла на сервере, который будет обрабатывать наш запрос 
    const url = "register";

    // Так же как и в GET составляем строку с данными, но уже без пути к файлу 
    let name = document.getElementById('registrationName').value;
    let email = document.getElementById('registrationEmail').value;
    let password = document.getElementById('registrationPassword').value;
    //const params = new FormData();
    //params.append('name', name)
    //params.append('email', email)    
    let params = JSON.stringify({name:name, email:email, password:password}); // "name=" + name + "&email=" + email;

    /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас
    асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот
    	параметр тоже необязателен.*/
    request.open("POST", url, true);

    //В заголовке говорим что тип передаваемых данных закодирован. 
    request.setRequestHeader("Content-type", "application/json");

    request.addEventListener("readystatechange", () => {

        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
        }
    });

    //	Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос. 
    request.send(params);
});

secondForm.addEventListener("submit", (e) => e.preventDefault());