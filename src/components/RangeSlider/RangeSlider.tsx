import { View, Text } from 'react-native'
import React from 'react'
import { DataItem, RangeSliderProps } from './type';
import { styles } from './styles';
import CustomBarChart from '../CustomBarChart/CustomBarChart';
import RangePicker from '../RangePicker/RangePicker';


const RangeSlider = (props: RangeSliderProps) => {
  const { title, subTitle, data, onChange } = props || {};
  const graphData = data?.map((ele: DataItem) => ele.value) || [];

  function onSliderRangeUpdate(min: number, max: number) {
    /*
    filter the data with min and max 
    */
    let newData: DataItem[] = data?.filter((ele: DataItem) => (ele.value <= max && ele.value >= min)) || []
    onChange && onChange(newData);
  }

  return (
    <View>
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle}>{subTitle}</Text>
      </View>
      <CustomBarChart
        data={graphData}
      />
      <View>
        <View style={styles.viewRangePickerContainer}>
          <RangePicker
            max={50}
            min={0}
            onValueChanged={onSliderRangeUpdate}
          />
        </View>
      </View>
    </View>
  )
}

export default RangeSlider;