const API_URL = "https://potato-2bbd.restdb.io/rest";

const REQ_HEADERS = {
    "content-type": "application/json",
    "x-apikey": "695120007ba9c92a2e7845d8",
    "cache-control": "no-cache",
}

export async function getProducts () {
    const response = await fetch(API_URL + "/Product", {
        method: "GET",
        headers: REQ_HEADERS
    });
    const data = await response.json();

    return data;
}
getProducts().then(data => console.log(data));