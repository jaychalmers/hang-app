export const convertPrice = (price) => {
    if (price < 1) return "Free";
    if (price < 100) return `${price}p`;
    if (price % 100 === 0) return `£${price/100}`;
    return `£${price/100}`;
};