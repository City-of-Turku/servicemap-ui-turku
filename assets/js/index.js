/**
 * String containing Cookiebot script
 * @typedef {string} CookieBotScript
 * @example
 * <script id="CookieBot"....data-cbid=value...></script>
 */
/**
 * Returns Cookiebot script string with data-cbid based on value parameter.
 * @param {string} [value=''] Cookiebot data-cbid value.
 * @returns {CookieBotScript} string containing the script.
 */
function getCookieScript(value= '') {
    if (typeof value !== 'string') {
        throw new Error('Cookiebot cbid-data value is not a string!')
    }
    return `
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" 
        data-cbid=${value} data-blockingmode="auto" type="text/javascript"></script>
    `;
}

export {getCookieScript};
