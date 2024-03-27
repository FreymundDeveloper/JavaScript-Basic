export default interface Salable {
    name: string
    price: number
    discount: number
    priceWithDiscount(): number
}