const bcrypt = require("bcrypt");

async function hashPasswords() {
    const passwords = [
        "pass1", "pass2", "pass3", "pass4", "pass5",
        "pass6", "pass7", "pass8", "pass9", "pass10",
        "pass11", "pass12", "pass13"
    ];

    const saltRounds = 10;

    console.log("=== Хеширование 13 паролей ===");

    const promises = passwords.map(async (password, index) => {
        const start = performance.now();
        const hash = await bcrypt.hash(password, saltRounds);
        const end = performance.now();

        console.log(`Пароль ${index + 1} зашифрован за ${(end - start).toFixed(2)} ms`);
        return hash;
    });

    await Promise.all(promises);

    console.log("\n=== Вывод ===");
    console.log("Разное время связано с тем, что bcrypt использует CPU-интенсивные операции,");
    console.log("и каждая операция выполняется асинхронно, конкурируя за ресурсы процессора.");
}

hashPasswords();
