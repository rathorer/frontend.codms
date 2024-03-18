const apiBaseUri = "http://127.0.0.1:8000/";
const availableApis = Object.freeze({
    queryBasedSearch: "filter-search",
    textBasedSearch: "text-search"
});
const API_KEY = "NA";

const APIs = (function defineAPIs() {

    const getUrlToHit = function (api, seachString) {
        let searchParam = new URLSearchParams({ prompt: seachString });
        let endpoint = api.concat("?", searchParam.toString());
        return new URL(endpoint, apiBaseUri);
    };

    const queryBasedSearch = async function (query) {
        let url = getUrlToHit(availableApis.queryBasedSearch, query.message);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    };

    const textBasedSearch = async function name(prompt) {
        let url = getUrlToHit(availableApis.textBasedSearch, prompt.message);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        return data;
    }
    return {
        queryBasedSearch: queryBasedSearch,
        textBasedSearch: textBasedSearch
    };

})();

export default APIs;