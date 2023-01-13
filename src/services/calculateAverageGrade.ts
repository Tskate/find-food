export const calculateAverageGrade = (...rating : number[]) => {
    const sum = rating.reduce((prev, item) => prev + item, 0)
    return (sum/rating.length).toFixed(1)
}