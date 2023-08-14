import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(asyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({name: 'reserva-mobile'}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect
