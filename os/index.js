const os = require("os");
require("dotenv").config();

// Функция A — вывод информации об ОС
function printOSInfo() {
    console.log("=== Информация об операционной системе ===");
    console.log("Платформа:", os.platform());
    console.log("Свободная память (байты):", os.freemem());
    console.log("Домашняя директория:", os.homedir());
    console.log("Имя хоста:", os.hostname());
    console.log("Сетевые интерфейсы:", os.networkInterfaces());
}

// Функция B — проверка памяти
function checkMemory() {
    const free = os.freemem();
    const required = 4 * 1024 * 1024 * 1024;

    if (free > required) {
        console.log(" Свободной памяти больше 4GB");
    } else {
        console.log(" Свободной памяти меньше 4GB");
    }
}

// Функция C — доступ по MODE
function secureOSInfo() {
    const mode = process.env.MODE;

    if (mode === "admin") {
        printOSInfo();
    } else {
        console.log(" У вас нет доступа для просмотра системной информации. Требуется режим admin.");
    }
}

module.exports = {
    printOSInfo,
    checkMemory,
    secureOSInfo
};

