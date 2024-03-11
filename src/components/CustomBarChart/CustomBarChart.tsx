import { View, Text } from 'react-native'
import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts'
import { styles } from './styles'

type Props = {
    data: Array<number>
}

const CustomBarChart = ({ data }: Props) => {
    console.log(data);

    return (
        <BarChart
            style={styles.BarChart}
            data={data}
            svg={{ fill: "#000" }}
        >
            <Grid />
        </BarChart>
    )
}

export default CustomBarChart