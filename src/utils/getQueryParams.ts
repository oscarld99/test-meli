
/**
 * getQueryParams util for get params in url.
 * @function getQueryParams
 * @param { parameters: string } 
 * @description get params from url
 */

export const getQueryParams = (parameters: string): string => {
    const queryParams = new URLSearchParams(window.location.search)
    const searhParameter = queryParams.get(parameters)
    return searhParameter ?? ''
}