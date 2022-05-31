/**
 * String containing Cookiebot script
 * @typedef {string} CookieBotScript
 * @example
 * <script id="CookieBot"....data-cbid=value...></script>
 */
/**
 * Returns Cookiebot script string with data-cbid based on value parameter.
 * @param {string} [value=''] Cookiebot data-cbid value.
 * @param {boolean} [blockingMode=true] Cookiebot blocking mode,
 * default to automatically block cookies and false when cookies are manually blocked.
 * @returns {CookieBotScript} string containing the script.
 */
function getCookieScript(value= '', blockingMode = true) {
    if (typeof value !== 'string') {
        throw new Error('Cookiebot cbid-data value is not a string!')
    }
    // Contains values which change according to blockingMode.
    const blockAttributes = {
        // 'data-blockingmode="auto"' if blockingMode is true, otherwise ''.
        block: blockingMode ? `data-blockingmode="auto"` : '',
        // 'async' if blockingMode is false, otherwise ''.
        async: !blockingMode ? ' async' : '',
    };
    return `
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" 
        data-cbid=${value} ${blockAttributes.block} type="text/javascript"${blockAttributes.async}></script>
    `;
}

export {getCookieScript};
