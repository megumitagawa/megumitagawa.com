/**
 * Workaround to avoid errors of contentful on console in development
 * https://github.com/contentful/contentful.js/issues/422#issuecomment-1054400365
 */
if (typeof window !== 'undefined') window.process = { browser: true }
