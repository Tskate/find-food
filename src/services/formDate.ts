export const formDate = (dateStr: string) => {
    let date = new Date(dateStr)
    return `${date.getDate()}.${date.getMonth() < 10 ? '0' : ''}${date.getMonth()}.${date.getFullYear()}`
}