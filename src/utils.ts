export const getShortDate = (date: string): string => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();

    return [day, month, year].join('.');
};


export const getDateWithTime = (date: string): string => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();
    const minutes = parsedDate.getMinutes();
    const hours = parsedDate.getHours();

    return [day, month, year].join('.') + ' в ' + hours + '.' + minutes;
};