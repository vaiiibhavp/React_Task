import { View, Text } from 'react-native'
import React from 'react'
import RangeSlider from '../components/RangeSlider/RangeSlider'
import { DataItem } from '../components/RangeSlider/type';
import { styles } from './styles';
import { tempData } from '../constants/staticData';

const HomeScreen = () => {

  function onChange(params: DataItem[]) {
    console.log('new data ', params);
  }

  const sumValue = tempData?.reduce((avg, value) => {
    return avg += value.value
  }, 0);

  return (
    <View style={styles.viewMain}>
      <RangeSlider
        title={"Price range"}
        subTitle={`The Average price is ${(sumValue / tempData.length).toFixed(2)}$`}
        data={tempData}
        onChange={(v: Array<DataItem>) => onChange(v)}
      />
    </View>
  )
}

export default HomeScreen