import * as _ from 'lodash';

export const convertPrice = (price) => {
    if (price < 1) return "Free";
    if (price < 100) return `${price}p`;
    if (price % 100 === 0) return `£${price/100}`;
    return `£${price/100}`;
};

export const capitalizeWords = (string) => {
    const words = _.words(string);
    const capitlizedWords = _.map(words, (word) => {
        return _.capitalize(word);
    });
    return _.join(capitlizedWords," ");
};