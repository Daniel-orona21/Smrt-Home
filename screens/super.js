import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';

export default function SuperScreen() {

  return (
    <ImageBackground
      source={require('../assets/fondo6.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Super</Text>   

        <View style={styles.swiperContainer}>
          <Swiper
            showsButtons={false}
            loop={false}
            containerStyle={styles.swiperWrapper}
          >
            <View style={styles.slide}>
              <Image source={require('../assets/img5.jpg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/img2.jpeg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/img1.jpg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/img4.jpg')} style={styles.foto} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/img3.jpg')} style={styles.foto} />
            </View>
          </Swiper>
        </View>

        <Text style={styles.ofertas}>Ofertas Especiales</Text> 

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => console.log('Presionado Puntos')}>
            <Image source={require('../assets/puntos.png')} style={styles.puntos} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 33,
    marginLeft: 20,
  },
  ofertas: {
    color: 'white',
    fontSize: 17,
    marginTop: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  puntos: {
    width: 25,
    height: 25,
    marginTop: 42,
    marginRight: 15,
    resizeMode: 'contain',
  },
  iconContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 20,
    top: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  swiperContainer: {
    height: 120,
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
  swiperWrapper: {
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  foto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
