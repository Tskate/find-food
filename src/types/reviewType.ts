export interface ReviewType {
    id: number,
    text: string,
    date: string,
    userId: number,
    rating: RatingType,
    responses: string[]
}

export interface RatingType {
    id: number,
    taste: number,
    atmosphere: number,
    price: number
}