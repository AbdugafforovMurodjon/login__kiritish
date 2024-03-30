let users = [
    { username: "foydalanuvchi1", password: "parol1" },
];


function login() {
    let username = prompt("Foydalanuvchi nomi:");
    let password = prompt("Parol:");
    
    let loggedIn = false;
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            loggedIn = true;
            break;
        }
    }
    
    if (loggedIn) {
        alert("Login muvaffaqiyatli amalga oshirildi!");
        window.location.href = "home.html"; 
    } else {
        alert("Noto'g'ri foydalanuvchi nomi yoki parol. Qayta urinib ko'ring.");
        login(); 
    }
}


login();
