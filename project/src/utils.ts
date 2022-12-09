export const getRatingWidthPercent = (rating: number) => `${100 * rating / 5}%`;

export const formatDate = (date: Date) => date.toLocaleDateString();

export const formatUserDate = (date: Date) => date.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
