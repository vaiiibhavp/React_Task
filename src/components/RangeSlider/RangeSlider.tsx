import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataItem, RangeSliderProps } from './type';
import { styles } from './styles';
import CustomBarChart from '../CustomBarChart/CustomBarChart';
import RangePicker from '../RangePicker/RangePicker';


const RangeSlider = (props: RangeSliderProps) => {
  const { title, subTitle, data, onChange } = props || {};
  const graphData = data?.map((ele: DataItem) => ele.value) || [];
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [userMin, setUserMin] = useState(0);
  const [userMax, setUserMax] = useState(max);

  useEffect(() => {
    setMax(Math.max(...graphData));
    setMin(Math.min(...graphData));
  }, [])

  function onSliderRangeUpdate(min: number, max: number) {
    setUserMax(max);
    setUserMin(min);
    /*
    filter the data with min and max 
    */
    let newData: DataItem[] = data?.filter((ele: DataItem) => (ele.value <= max && ele.value >= min)) || []
    onChange && onChange(newData);
  }

  //do not update the min max after render
  if (max === 0) {
    return <></>
  }

  return (
    <View>
      <View style={styles.viewTitleContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubtitle}>{subTitle}</Text>
      </View>
      <View>
        <Text style={styles.textRange}>{`Your budget ($${userMin}  -  $${userMax})`}</Text>
        <CustomBarChart
          data={graphData}
          barColor={"#ccc"}
          max={max}
        />
      </View>
      <View>
        <View style={styles.viewRangePickerContainer}>
          <RangePicker
            max={max}
            min={min}
            onValueChanged={onSliderRangeUpdate}
          />
        </View>
        <View style={styles.viewRowBetween}>
          <View style={styles.viewMinMaxContainer}>
            <Text style={styles.textMinimum}>{"Minimum"}</Text>
            <Text style={styles.textAmount}>{"$ " + min ?? 0}</Text>
          </View>
          <View style={styles.viewLine} />
          <View style={styles.viewMinMaxContainer}>
            <Text style={styles.textMinimum}>{"Maximum"}</Text>
            <Text style={styles.textAmount}>{"$ " + max ?? 0}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RangeSlider;