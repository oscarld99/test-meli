/**
 * castMoney
 * @function castMoney
 * @param { price: string } 
 * @description cast price tu money format
 */

export const castMoney = (price: string) =>
    new Intl.NumberFormat('de-DE').format(parseFloat(price))
