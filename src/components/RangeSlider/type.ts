
export type RangeSliderProps = {
    data?: Array<DataItem>
    onChange?: (data: Array<DataItem>) => void
    title?: string
    subTitle?: string
}

export type DataItem = {
    value: number
    amount: number
}