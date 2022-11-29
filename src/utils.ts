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


export const isDateInRange = (currentDate: Date, startDate:Date | undefined, endDate: Date | undefined)  => {
    let shouldShowNote = false;
    if (
      startDate &&
      endDate &&
      currentDate >=  startDate &&
      currentDate <=  endDate
    ) shouldShowNote = true;

    if (
      !endDate &&
      startDate &&
       startDate.getFullYear() === currentDate.getFullYear() &&
       startDate.getMonth() === currentDate.getMonth() &&
       startDate.getDate() === currentDate.getDate()
    ) shouldShowNote = true;


      return shouldShowNote
}