require("dotenv").config();

const { fetchData } = require("./modules/fetchData");
const { sortStrings } = require("./modules/sortStrings");
const fsTools = require("./modules/fsTools");

async function main() {
    console.log("=== Загрузка пользователей ===");

    const result = await fetchData("https://jsonplaceholder.typicode.com/users");

    if (result.error) {
        console.log("Ошибка загрузки:", result.error);
        return;
    }

    const users = result.data;

    console.log("Пользователи загружены:", users.length);

    // --- Сортировка имён ---
    const names = users.map(u => u.name);
    const sortedNames = sortStrings(names);

    // --- Emails ---
    const emails = users.map(u => u.email);

    // --- Создание структуры users/ ---
    await fsTools.createDirAsync("users");

    // --- Запись имён ---
    await fsTools.writeFileAsync("users/names.txt", sortedNames.join("\n"));

    // --- Запись email ---
    await fsTools.writeFileAsync("users/emails.txt", emails.join("\n"));

    console.log("✅ Файлы успешно созданы:");
    console.log("users/names.txt");
    console.log("users/emails.txt");
}

main();
