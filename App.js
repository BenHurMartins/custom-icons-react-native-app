import React from 'react';
import {View} from 'react-native';

//function to create
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

//Selection.json
import icoMoonConfig from './selection.json';

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const App: () => React$Node = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <CustomIcon name="headphones" size={30} />
        <CustomIcon name="hack-a-job" size={30} />
        <CustomIcon name="music" size={30} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          marginVertical: 30,
        }}>
        <CustomIcon name="headphones" size={45} />
        <CustomIcon name="hack-a-job" size={45} />
        <CustomIcon name="music" size={45} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <CustomIcon name="headphones" size={60} />
        <CustomIcon name="hack-a-job" size={60} />
        <CustomIcon name="music" size={60} />
      </View>
    </View>
  );
};

export default App;
