const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
async function writeFileAsync(filePath, data) {
    await fsp.writeFile(filePath, data, "utf-8");
}
function writeFileSync(filePath, data) {
    fs.writeFileSync(filePath, data, "utf-8");
}
async function readFileAsync(filePath) {
    return await fsp.readFile(filePath, "utf-8");
}
function readFileSync(filePath) {
    return fs.readFileSync(filePath, "utf-8");
}
async function rewriteFileAsync(filePath, newData) {
    await fsp.writeFile(filePath, newData, "utf-8");
}
function rewriteFileSync(filePath, newData) {
    fs.writeFileSync(filePath, newData, "utf-8");
}
async function deleteFileAsync(filePath) {
    await fsp.unlink(filePath);
}
function deleteFileSync(filePath) {
    fs.unlinkSync(filePath);
}
async function cleanNoiseAsync(filePath) {
    let content = await fsp.readFile(filePath, "utf-8");
    content = content.replace(/[0-9]/g, "").toLowerCase();
    await fsp.writeFile(filePath, content, "utf-8");
}
function cleanNoiseSync(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    content = content.replace(/[0-9]/g, "").toLowerCase();
    fs.writeFileSync(filePath, content, "utf-8");
}
async function copyFileAsync(src, dest) {
    await fsp.copyFile(src, dest);
}
function copyFileSync(src, dest) {
    fs.copyFileSync(src, dest);
}
async function createDirAsync(dirPath) {
    await fsp.mkdir(dirPath, { recursive: true });
}
function createDirSync(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
}
async function removeDirAsync(dirPath) {
    await fsp.rm(dirPath, { recursive: true, force: true });
}
function removeDirSync(dirPath) {
    fs.rmSync(dirPath, { recursive: true, force: true });
}
async function listFilesAsync(dir, result = []) {
    const items = await fsp.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (
            item.name === "node_modules" ||
            item.name === ".git" ||
            item.name.startsWith(".env") ||
            item.name === "package-lock.json"
        ) {
            continue;
        }

        if (item.isDirectory()) {
            await listFilesAsync(fullPath, result);
        } else {
            result.push(fullPath);
        }
    }

    return result;
}
function listFilesSync(dir, result = []) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (
            item.name === "node_modules" ||
            item.name === ".git" ||
            item.name.startsWith(".env") ||
            item.name === "package-lock.json"
        ) {
            continue;
        }

        if (item.isDirectory()) {
            listFilesSync(fullPath, result);
        } else {
            result.push(fullPath);
        }
    }

    return result;
}
async function clearProjectAsync(dir) {
    const items = await fsp.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (
            item.name === "node_modules" ||
            item.name === ".git" ||
            item.name.startsWith(".env") ||
            item.name === "package.json" ||
            item.name === "package-lock.json"
        ) {
            continue;
        }

        await fsp.rm(fullPath, { recursive: true, force: true });
    }
}
function clearProjectSync(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);

        if (
            item.name === "node_modules" ||
            item.name === ".git" ||
            item.name.startsWith(".env") ||
            item.name === "package.json" ||
            item.name === "package-lock.json"
        ) {
            continue;
        }

        fs.rmSync(fullPath, { recursive: true, force: true });
    }
}
module.exports = {
    writeFileAsync,
    writeFileSync,
    readFileAsync,
    readFileSync,
    rewriteFileAsync,
    rewriteFileSync,
    deleteFileAsync,
    deleteFileSync,
    cleanNoiseAsync,
    cleanNoiseSync,
    copyFileAsync,
    copyFileSync,
    createDirAsync,
    createDirSync,
    removeDirAsync,
    removeDirSync,
    listFilesAsync,
    listFilesSync,
    clearProjectAsync,
    clearProjectSync
};
