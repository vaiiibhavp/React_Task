
import React from 'react'
import { BarChart, } from 'react-native-svg-charts'
import { styles } from './styles'
import { FlatList, View } from 'react-native'

type Props = {
    data: Array<number>
    barColor?: string
    max: number
}

const CustomBarChart = ({ data, barColor, max }: Props) => {
    const barHeight = 150;
    const num = barHeight / max;

    return (
        <View>
            <FlatList
                data={data}
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: barHeight, flexDirection: "column-reverse" }}>
                            <View style={[styles.viewBarItem, { height: item * num }]} />
                        </View>
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.viewSaperator} />}
                style={{ height: barHeight }}
            />
        </View>
    )

    return (
        <BarChart
            style={styles.BarChart}
            data={data}
            svg={{ fill: barColor ?? "#000" }}
        />
    )
}

export default CustomBarChart