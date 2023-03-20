export const castMoney = (price: string) =>
    new Intl.NumberFormat('de-DE').format(parseFloat(price))
