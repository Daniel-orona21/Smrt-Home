import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MyTabs } from './navigation';


const Stack = createStackNavigator();


const flags = {
  México: require('./assets/Mexico.png'),
  USA: require('./assets/usa.png'),
  Canadá: require('./assets/canada.png'),
};


export default function App() {
  const [selectedFlag, setSelectedFlag] = useState('México');
  const [phoneNumber, setPhoneNumber] = useState('');
  const pickerRef = useRef('null');

  const changeFlag = (value) => {
    setSelectedFlag(value);
  };

  const handleFlagPress = () => {
    if (pickerRef.current) {
      pickerRef.current.togglePicker();
    }
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{
            title: 'Inicio de Sesión',  
            headerStyle: {
              backgroundColor: 'white',  
            },
            headerTintColor: 'black', 
          }}
        >
          
          
          {({ navigation }) => (
            <HomeScreen
              navigation={navigation}
              pickerRef={pickerRef}
              selectedFlag={selectedFlag}
              changeFlag={changeFlag}
              phoneNumber={phoneNumber}
              handlePhoneNumberChange={handlePhoneNumberChange}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Menu"
          component={MyTabs}
          options={{
            
            headerTitleStyle: {
              height: 0,  
            },
            headerStyle: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            headerTintColor: 'white',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Pantalla principal de la aplicación
const HomeScreen = ({
  navigation,
  pickerRef,
  selectedFlag,
  changeFlag,
  phoneNumber,
  handlePhoneNumberChange,
}) => {
  const handleContinuePress = () => {
    console.log('Continuar presionado');
    Keyboard.dismiss();
    navigation.navigate('Menu');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >

        <Image style={styles.logo} source={require('./assets/logoSMRT.png')} />


        <SafeAreaView style={styles.container}>
          <Text style={styles.texto}>Inicia con tu número de teléfono</Text>
          <View style={styles.inputContainer}>
            <FlagSelector pickerRef={pickerRef} selectedFlag={selectedFlag} changeFlag={changeFlag} />
            <TextInput
              style={styles.input}
              placeholder="Ingresa tu número de teléfono"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </View>
          <ContinueButton onPress={handleContinuePress} />
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

//bandera
const FlagSelector = ({ pickerRef, selectedFlag, changeFlag }) => {
  const handleFlagPress = () => {
    if (pickerRef.current) {
      pickerRef.current.togglePicker();
    }
  };

  return (
    <View style={styles.flagContainer}>
      <TouchableOpacity onPress={handleFlagPress} activeOpacity={0.7}>
        <Image source={flags[selectedFlag]} style={styles.flagImage} />
        <View style={styles.triangle} />
      </TouchableOpacity>
      <PickerSelect
        ref={pickerRef}
        value={selectedFlag}
        onValueChange={(value) => changeFlag(value)}
        items={Object.keys(flags).map((flagKey) => ({
          label: flagKey,
          value: flagKey,
        }))}
        style={{
          inputIOS: styles.picker,
          placeholder: styles.placeholder,
        }}
      />
    </View>
  );
};

// botón de continuar
const ContinueButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.continueButton} onPress={onPress}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ó</Text>
        <View style={styles.separatorLine} />
      </View>
      <TouchableOpacity style={styles.continueAppButton} onPress={onPress}>
        <Image source={require('./assets/apple.png')} style={styles.icon} />
        <Text style={styles.continueAppText}>Continúa con Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueAppButton} onPress={onPress}>
        <Image source={require('./assets/face.png')} style={styles.icon} />
        <Text style={styles.continueAppText}>Continúa con Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueAppButton} onPress={onPress}>
        <Image source={require('./assets/google.png')} style={styles.icon} />
        <Text style={styles.continueAppText}>Continúa con Google</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>ó</Text>
        <View style={styles.separatorLine} />
      </View>
      <TouchableOpacity style={styles.encontrarAppButton} onPress={null}>
        <Image source={require('./assets/lupa.png')} style={styles.lupa} />
        <Text style={styles.encontrarAppText}>Encontrar mi cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
    alignSelf: 'center',
  },
  texto: {
    margin: 24,
    fontSize: 15,
    fontWeight: '800',
    marginTop: 40,
    marginLeft: 19,
    marginBottom: 10,
  },
  logo: {
    height: 143,
    width: 348,
    alignSelf: 'center',
  },
  flagImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  picker: {
    flex: 1,
    height: 50,
    color: 'transparent',
  },
  placeholder: {
    color: 'transparent',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    position: 'absolute',
    top: '50%',
    left: '100%',
    marginTop: 0,
    marginLeft: -5,
    transform: [{ rotate: '180deg' }],
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 19,
    width: 353,
    borderRadius: 6,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    padding: 10,
    borderRadius: 6,
    marginTop: 0,
    marginLeft: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'relative',
    width: 75,
    height: 44,
  },
  input: {
    height: 44,
    borderColor: 'black',
    borderWidth: 3,
    marginLeft: 10,
    paddingLeft: 10,
    flex: 1,
    borderRadius: 6,
  },
  continueButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
    marginLeft: 15,
    marginRight: 15,
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: 'grey',
    marginLeft: -5,
    marginRight: -5,
  },
  continueAppButton: {
    padding: 15,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    margin: 20,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  continueAppText: {
    color: 'black',
    fontSize: 18,
  },
  encontrarAppButton: {
    padding: 15,
    margin: 0,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  encontrarAppText: {
    color: 'black',
    fontSize: 18,
  },
  icon: {
    width: 17, 
    height: 20, 
    margin: 5,
  },
  lupa: {
    width: 20, 
    height: 20, 
    margin: 5,
  },
});