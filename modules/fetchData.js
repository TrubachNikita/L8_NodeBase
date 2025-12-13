const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchData(url) {
    const result = {
        data: [],
        isLoading: true,
        error: null
    };

    try {
        const response = await fetch(url);
        const json = await response.json();

        result.data = json;
        result.isLoading = false;
    } catch (err) {
        result.error = err;
        result.isLoading = false;
    }

    return result;
}

module.exports = { fetchData };
