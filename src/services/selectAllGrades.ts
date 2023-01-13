import {ReviewType} from "../types/reviewType";

export const selectAllGrades = (reviews : ReviewType[]) : number[] => {
    const res: number[] = []
    reviews.map((review:ReviewType) => {
        res.push(+review.rating.atmosphere, +review.rating.price, +review.rating.taste)
    })
    return res
}