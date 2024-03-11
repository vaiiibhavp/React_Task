import { View, Text } from 'react-native'
import React from 'react'
import RangeSlider from 'rn-range-slider';
import { styles } from './styles';

type Props = {
    max: number
    min: number
    onValueChanged?: (min: number, max: number) => void
}

const RangePicker = ({ max, min, onValueChanged }: Props) => {
    return (
        <RangeSlider
            min={min}
            max={max}
            onValueChanged={onValueChanged}
            step={1}
            renderThumb={function (): React.ReactNode {
                return <View style={styles.viewCircle} />
            }}
            renderRail={function (): React.ReactNode {
                return <View style={styles.viewRail} />
            }}
            renderRailSelected={function (): React.ReactNode {
                return <View style={styles.viewRailSelected} />
            }}
        />
    )
}

export default RangePicker