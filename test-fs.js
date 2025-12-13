const fsTools = require("./fs/index");

async function test() {
    console.log("=== Тест: создание папки ===");
    await fsTools.createDirAsync("test");
    console.log("Папка test создана");

    console.log("\n=== Тест: запись файла ===");
    await fsTools.writeFileAsync("test/file.txt", "Hello, Никита!");
    console.log("Файл записан");

    console.log("\n=== Тест: чтение файла ===");
    const content = await fsTools.readFileAsync("test/file.txt");
    console.log("Содержимое:", content);

    console.log("\n=== Тест: перезапись файла ===");
    await fsTools.rewriteFileAsync("test/file.txt", "New content 123 ABC");
    console.log("Файл перезаписан");

    console.log("\n=== Тест: очистка шума ===");
    await fsTools.cleanNoiseAsync("test/file.txt");
    console.log("Шум удалён");

    console.log("\n=== Тест: копирование файла ===");
    await fsTools.copyFileAsync("test/file.txt", "test/file-copy.txt");
    console.log("Файл скопирован");

    console.log("\n=== Тест: вывод всех файлов проекта ===");
    const files = await fsTools.listFilesAsync(".");
    console.log(files);

    console.log("\n=== Тест: удаление файла ===");
    await fsTools.deleteFileAsync("test/file-copy.txt");
    console.log("file-copy.txt удалён");

    console.log("\n=== Тест: удаление папки ===");
    await fsTools.removeDirAsync("test");
    console.log("Папка test удалена");
}

test();
