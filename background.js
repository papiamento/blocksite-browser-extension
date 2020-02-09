function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    { urls: ["<all_urls>"] }
);

var pattern = "https://www.cnn.com/*";

function redirect(requestDetails) {
    console.log("Redirecting: " + requestDetails.url);
    return {
        redirectUrl: "https://papiamento.github.io/blog/"
    };
}

browser.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: [pattern], types: ["main_frame"] },
    ["blocking"]
);