
import React from 'react'
import { BarChart, } from 'react-native-svg-charts'
import { styles } from './styles'


type Props = {
    data: Array<number>
    barColor?: string
    max: number
}

const CustomBarChart = ({ data, barColor, max }: Props) => {
    return (
        <BarChart
            style={styles.BarChart}
            data={data}
            svg={{ fill: barColor ?? "#000" }}
        />
    )
}

export default CustomBarChart