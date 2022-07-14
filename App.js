import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArrowSVG from './src/assets/SVG/Arrow';
import FilterSVG from './src/assets/SVG/Filter';
import MenuSVG from './src/assets/SVG/Menu';
import SearchSVG from './src/assets/SVG/Search';

const App = () => {
  const arr = [
    {uri: require('./src/assets/images/Img1.png')},
    {uri: require('./src/assets/images/Img2.png')},
    {uri: require('./src/assets/images/Img3.png')},
    {uri: require('./src/assets/images/Img1.png')},
    {uri: require('./src/assets/images/Img2.png')},
    {uri: require('./src/assets/images/Img3.png')},
    {uri: require('./src/assets/images/Img1.png')},
    {uri: require('./src/assets/images/Img2.png')},
    {uri: require('./src/assets/images/Img3.png')},
  ];

  const TopCards = () => {
    return (
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'space-evenly'}}
        horizontal>
        {arr.map(item => (
          <View
            style={{
              borderRadius: 12,
              width: 109,
              height: 60,
              marginHorizontal: 5,
            }}>
            <Image source={item.uri} />
            {console.log(item)}
          </View>
        ))}
      </ScrollView>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          paddingHorizontal: 25,
          // backgroundColor: 'pink',
          height: '10%',
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '45%', marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'CRC55',
                color: '#212121',
                marginRight: 5,
              }}>
              Большие гонки
            </Text>
            <ArrowSVG />
          </View>
          <Text style={{fontSize: 14, color: 'gray', fontFamily: 'CRC55'}}>
            Семья Ивановых
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SearchSVG />
          <FilterSVG />
          <MenuSVG />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <Header />
      <TopCards />
    </View>
  );
};

export default App;
