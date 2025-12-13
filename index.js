require("dotenv").config();

console.log("Имя:", process.env.NAME);
console.log("Фамилия:", process.env.SURNAME);
console.log("Группа:", process.env.GROUP);
console.log("Номер по списку:", process.env.NUMBER);
console.log("Режим доступа:", process.env.MODE);
console.log("Текущий режим работы приложения:", process.env.MODE);
console.log("Скрипт build запущен!");

const { printOSInfo, checkMemory, secureOSInfo } = require("./os/index");

printOSInfo();
checkMemory();
secureOSInfo();
