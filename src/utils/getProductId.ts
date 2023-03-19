
/**
 * getProductId util for get product id in path.
 * @function getProductId
 * @description get product id in path
 */

export const getProductId = (): string => {
    const arrayPath = window.location.href.split('/')
    const productId = arrayPath[arrayPath.length - 1]
    if (productId !== 'items') return productId
    return ''
}