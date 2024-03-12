
import React from 'react'
import { BarChart, } from 'react-native-svg-charts'
import { styles } from './styles'

type Props = {
    data: Array<number>
    barColor?: string
}

const CustomBarChart = ({ data, barColor }: Props) => {
    return (
        <BarChart
            style={styles.BarChart}
            data={data}
            svg={{ fill: barColor ?? "#000" }}
        />
    )
}

export default CustomBarChart