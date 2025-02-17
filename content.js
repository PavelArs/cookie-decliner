const declineKeywords = {
    en: ["reject", "decline", "necessary", "ok"],
    de: ["ablehnen", "notwendig", "ok"],
    fr: ["refuser", "nécessaire", "ok"],
    es: ["rechazar", "necesario", "ok"],
    ru: ["отклонить", "необходимые", "ок"],
};

function getLanguage() {
    return navigator.language.slice(0, 2); // Get browser language
}

function declineCookies() {
    // Define the text you're looking for (case-insensitive)
    const lang = getLanguage();
    const targetTexts = declineKeywords[lang] || declineKeywords["en"];

    const elements = document.querySelectorAll('button');

    // Loop through the elements and check their text content
    for (const targetText of targetTexts) {
        for (const element of elements) {
            if (element.innerText.trim().toLowerCase().includes(targetText)) {
                element.click();
                console.log('Cookies declined.');
                observer.disconnect();
                return; // Exit after clicking the first matching element
            }
        }
    }
    // If no matching element is found
    console.log('No decline button found.');
}

// Run the function when the page loads
declineCookies();

// Optionally, observe DOM changes to handle dynamic content
const observer = new MutationObserver(declineCookies);
observer.observe(document.body, { childList: true, subtree: true });