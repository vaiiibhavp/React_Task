import { View, Text } from 'react-native'
import React from 'react'
import RangeSlider from '../components/RangeSlider/RangeSlider'
import { DataItem } from '../components/RangeSlider/type';
import { styles } from './styles';

const HomeScreen = () => {

  const tempData: Array<DataItem> = [
    {
      amount: 1,
      value: 10
    },
    {
      amount: 10,
      value: 5
    },
    {
      amount: 8,
      value: 10
    },
    {
      amount: 4,
      value: 2
    },
    {
      amount: 4,
      value: 0
    },
  ];

  function onChange(params: DataItem[]) {
    console.log('new data ', params);


  }

  return (
    <View style={styles.viewMain}>
      <RangeSlider
        title={"Price range"}
        subTitle={"Nightly price "}
        data={tempData}
        onChange={(v: Array<DataItem>) => onChange(v)}
      />
    </View>
  )
}

export default HomeScreen