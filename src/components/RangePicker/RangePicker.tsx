import { View, } from 'react-native'
import React from 'react'
import RangeSlider from 'rn-range-slider';
import { styles } from './styles';

type Props = {
    max: number
    min: number
    onValueChanged?: (min: number, max: number) => void
    renderThumb?: () => React.ReactNode
    renderRail?: () => React.ReactNode
    renderRailSelected?: () => React.ReactNode
}

const RangePicker = (props: Props) => {

    const {
        max,
        min,
        onValueChanged,
        renderRail,
        renderRailSelected,
        renderThumb,
    } = props;

    return (
        <RangeSlider
            min={min}
            max={max}
            onValueChanged={onValueChanged}
            step={1}
            renderThumb={typeof renderThumb === "function" ? renderThumb : function (): React.ReactNode {
                return <View style={styles.viewCircle} />
            }}
            renderRail={typeof renderRail === "function" ? renderRail : function (): React.ReactNode {
                return <View style={styles.viewRail} />
            }}
            renderRailSelected={typeof renderRailSelected === "function" ? renderRailSelected : function (): React.ReactNode {
                return <View style={styles.viewRailSelected} />
            }}
        />
    )
}

export default RangePicker;