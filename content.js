const declineKeywords = {
    en: ["reject", "decline", "necessary", "ok"],
    de: ["ablehnen", "notwendig", "ok"],
    fr: ["refuser", "nécessaire", "ok"],
    es: ["rechazar", "necesario", "ok"],
    ru: ["отклонить", "необходимые", "ок"],
};

function getLanguage() {
    return navigator.language.slice(0, 2);
}

function declineCookies() {
    const lang = getLanguage();
    const targetTexts = declineKeywords[lang] || declineKeywords["en"];

    const elements = document.querySelectorAll('button');

    for (const targetText of targetTexts) {
        for (const element of elements) {
            if (element.innerText.trim().toLowerCase().includes(targetText)) {
                element.click();
                console.log('Cookies declined.');
                observer.disconnect();
                return;
            }
        }
    }
    console.log('No decline button found.');
}

declineCookies();

const observer = new MutationObserver(declineCookies);
observer.observe(document.body, { childList: true, subtree: true });