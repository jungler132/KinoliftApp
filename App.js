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
import CounterBadgeTwoSVG from './src/assets/SVG/CounterBageTwo';
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
        style={styles.topCardsScrollViewStyle}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.topCardsScrollViewContentStyle}
        horizontal>
        {arrTopCards.map(item => (
          <View style={styles.topCardsViewStyle}>
            <Image source={item.uri} />
          </View>
        ))}
      </ScrollView>
    );
  };

  const BottomCards = () => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {arrBottomCards.map(item => (
          <View style={styles.bottomCardsViewStyle}>
            <Image style={styles.bottomCardsImageStyle} source={item?.uri} />
            <View style={styles.bottomCardsViewBlockStyle}>
              <View style={styles.bottomCardsViewBlockTwoStyle}>
                <View>
                  <Text style={styles.bottomCardsTextStyle}>
                    {item?.data?.name}
                  </Text>
                  <Text style={styles.cityTextStyle}>Город</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.cityNameTextStyle}>
                    {item.data.city}
                  </Text>
                </View>
              </View>
              <View style={styles.cityBottomTextBlockStyle}>
                <Text style={styles.ageTextStyle}>Лет</Text>
                <Text style={styles.ageCountTextStyle}>{item.data.age}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };

  const Header = () => {
    return (
      <View style={styles.headerContainerStyle}>
        <View style={styles.headerContainerTopBlockStyle}>
          <View style={styles.headerContainerMiddleBlockStyle}>
            <Text style={styles.headerTextStyle}>Большие гонки</Text>
            <ArrowSVG />
          </View>
          <Text style={styles.headerTextTopStyle}>Семья Ивановых</Text>
        </View>
        <View style={styles.headerMiddleBlockStyle}>
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
    <ScrollView style={styles.containerScrollViewStyle}>
      <Header />
      <TopCards />
      <View style={styles.containerTopViewStyle}>
        <Text style={styles.containerTopBlockTextStyle}>Старший брат</Text>
        <CounterBadgeSVG />
        <View style={styles.containerMiddleBlockStyle}></View>
        <View style={styles.containerMiddleViewStyle}>
          <TouchableOpacity>
            <PlusSVG />
          </TouchableOpacity>
          <TouchableOpacity>
            <MoreSVG />
          </TouchableOpacity>
        </View>
      </View>
      <BottomCards />
      <View style={styles.containerBottomBlockStyle}>
        <Text style={styles.containerBottomTextStyle}>Подруга Максима</Text>
        <CounterBadgeTwoSVG />
        <View style={styles.containerBottomSpaceBlockStyle}></View>
        <View style={styles.containerMiddleViewStyle}>
          <TouchableOpacity>
            <PlusSVG />
          </TouchableOpacity>
          <TouchableOpacity>
            <MoreSVG />
          </TouchableOpacity>
        </View>
      </View>
      <BottomCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topCardsScrollViewStyle: {
    width: '100%',
    height: '11%',
  },
  topCardsScrollViewContentStyle: {
    justifyContent: 'space-evenly',
  },
  topCardsViewStyle: {
    borderRadius: 12,
    width: 109,
    height: 60,
    marginHorizontal: 5,
  },
  bottomCardsViewStyle: {
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 5,
    width: 180,
  },
  bottomCardsImageStyle: {
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomCardsViewBlockStyle: {
    paddingHorizontal: 10,
    height: 100,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  bottomCardsViewBlockTwoStyle: {
    justifyContent: 'space-between',
  },
  bottomCardsTextStyle: {
    fontSize: 16,
    fontFamily: 'Circe-Bold',
    marginTop: 5,
    color: '#212121',
  },
  cityTextStyle: {
    fontFamily: 'Circe-Bold',
    color: 'gray',
  },
  cityNameTextStyle: {
    fontFamily: 'CRC55',
    color: '#212121',
  },
  cityBottomTextBlockStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: 'gray',
    borderLeftWidth: 1,
    height: 40,
    marginTop: 30,
    width: '16%',
    alignItems: 'center',
  },
  ageTextStyle: {
    fontFamily: 'Circe-Bold',
    color: 'gray',
  },
  ageCountTextStyle: {
    fontFamily: 'CRC55',
    color: '#212121',
  },
  headerContainerStyle: {
    paddingHorizontal: 20,
    height: 80,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainerTopBlockStyle: {
    width: '45%',
    marginTop: 10,
  },
  headerContainerMiddleBlockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 19,
    fontFamily: 'Circe-Bold',
    color: '#212121',
    marginRight: 5,
  },
  headerTextTopStyle: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'CRC55',
  },
  headerMiddleBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScrollViewStyle: {
    backgroundColor: '#F5F5F5',
  },
  containerTopViewStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTopBlockTextStyle: {
    fontSize: 19,
    fontFamily: 'Circe-Bold',
    color: '#212121',
    marginRight: 5,
    marginVertical: 20,
  },
  containerMiddleBlockStyle: {
    width: '40%',
  },
  containerBottomBlockStyle: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerBottomTextStyle: {
    fontSize: 19,
    fontFamily: 'Circe-Bold',
    color: '#212121',
    marginRight: 5,
    marginVertical: 20,
  },
  containerMiddleViewStyle: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
  containerBottomSpaceBlockStyle: {
    width: '30%',
  },
});

export default App;
