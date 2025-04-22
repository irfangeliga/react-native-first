import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function pressMe() {
  return Alert.alert('mantap');
}

export default function App() {
  return (
    <View>
      <Text style={style.paragraph}>
        <Text style={style.text1}>halo ,</Text>
        <Text style={style.text2}>Apa Kabare?</Text>
      </Text>
      <Image
        source={require('./image/kucing.jpg')}
        style={{height: 300, width: 'auto'}}></Image>
      <Image
        source={{
          uri: 'https://t4.ftcdn.net/jpg/00/68/33/03/360_F_68330331_dKqChy33w0TcNHJEkqT5iw97QOX8la7F.jpg',
        }}
        style={{height: 300, width: 'auto'}}></Image>
      <Button
        title="Push Me"
        color={'green'}
        onPress={() => Alert.alert('You are Pushing me')}
      />
      <TouchableOpacity style={style.btn2} onPress={pressMe}>
        <Text style={style.btn2Text}>Mas Click Aku</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  text1: {
    fontStyle: 'italic',
  },
  text2: {
    fontWeight: 'bold',
    color: 'green',
  },
  paragraph: {
    fontSize: 30,
  },
  btn2: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#2A93D5',
  },
  btn2Text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
