import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowSVG from './src/assets/SVG/Arrow';
import CounterBadgeSVG from './src/assets/SVG/CounterBage';
import FilterSVG from './src/assets/SVG/Filter';
import MenuSVG from './src/assets/SVG/Menu';
import MoreSVG from './src/assets/SVG/More';
import PlusSVG from './src/assets/SVG/Plus';
import SearchSVG from './src/assets/SVG/Search';

const App = () => {
  const arrTopCards = [
    {uri: require('./src/assets/images/Img1.png')},
    {uri: require('./src/assets/images/Img2.png')},
    {uri: require('./src/assets/images/Img3.png')},
    {uri: require('./src/assets/images/Img1.png')},
    {uri: require('./src/assets/images/Img2.png')},
    {uri: require('./src/assets/images/Img3.png')},
  ];

  const arrBottomCards = [
    {
      data: {
        name: 'Леонид Стоцкий',
        city: 'Санкт-Петербург',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo1.png'),
    },
    {
      data: {
        name: 'Максим Феликс',
        city: 'Москва',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo2.png'),
    },
    {
      data: {
        name: 'Леонид Стоцкий',
        city: 'Санкт-Петербург',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo1.png'),
    },
    ,
    {
      data: {
        name: 'Максим Феликс',
        city: 'Москва',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo2.png'),
    },
    ,
    {
      data: {
        name: 'Леонид Стоцкий',
        city: 'Санкт-Петербург',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo1.png'),
    },
    ,
    {
      data: {
        name: 'Максим Феликс',
        city: 'Москва',
        age: 26,
      },
      uri: require('./src/assets/images/user_photo2.png'),
    },
    ,
  ];

  const TopCards = () => {
    return (
      <ScrollView
        style={{width: '100%', height: '11%'}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'space-evenly'}}
        horizontal>
        {arrTopCards.map(item => (
          <View
            style={{
              borderRadius: 12,
              width: 109,
              height: 60,
              marginHorizontal: 5,
            }}>
            <Image source={item.uri} />
          </View>
        ))}
      </ScrollView>
    );
  };

  const BottomCards = () => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          {
            // backgroundColor: 'blue',
          }
        }
        horizontal>
        {arrBottomCards.map(item => (
          <View
            style={{
              alignItems: 'center',
              borderRadius: 30,
              marginHorizontal: 5,
              // backgroundColor: 'pink',
              width: 180,
            }}>
            <Image
              style={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
              source={item?.uri}
            />
            <View
              style={{
                paddingHorizontal: 10,
                height: 100,
                borderBottomRightRadius: 12,
                borderBottomLeftRadius: 12,
                flexDirection: 'row',
              }}>
              <View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Circe-Bold',
                      marginTop: 5,
                      color: '#212121',
                    }}>
                    {item?.data?.name}
                  </Text>
                  <Text style={{fontFamily: 'Circe-Bold', color: 'gray'}}>
                    Город
                  </Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{fontFamily: 'CRC55', color: '#212121'}}>
                    {item.data.city}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderLeftColor: 'gray',
                  borderLeftWidth: 1,
                  height: 40,
                  marginTop: 30,
                  width: '16%',
                  alignItems: 'center',
                }}>
                <Text style={{fontFamily: 'Circe-Bold', color: 'gray'}}>
                  Лет
                </Text>
                <Text style={{fontFamily: 'CRC55', color: '#212121'}}>
                  {item.data.age}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  const Header = () => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          height: 80,
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
                fontFamily: 'Circe-Bold',
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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <SearchSVG />
          </TouchableOpacity>
          <TouchableOpacity>
            <FilterSVG />
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuSVG />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
      }}>
      <Header />
      <TopCards />
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Circe-Bold',
            color: '#212121',
            marginRight: 5,
            marginVertical: 20,
          }}>
          Старший брат
        </Text>
        <CounterBadgeSVG />
        <View style={{width: '40%'}}></View>
        <View
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 70,
          }}>
          <PlusSVG />
          <MoreSVG />
        </View>
      </View>
      <BottomCards />
    </View>
  );
};

export default App;
