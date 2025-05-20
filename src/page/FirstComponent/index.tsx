import React, {Component} from 'react';
import {
  TextInput,
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Style from './Style.tsx';

function pressMe() {
  return Alert.alert('mantap');
}

const FirstComponent = () => {
  return (
    <View style={Style.vw1}>
      <Text1Comp />
      <ImageComp />
      <InputClass />
      <Shape1Comp />
      <Btn1Comp />
    </View>
  );
};
const ImageComp = () => {
  return (
    <View>
      <Image
        source={require('../../assets/image/kucing.jpg')}
        style={Style.img1}
      />
      <Image
        source={{
          uri: 'https://t4.ftcdn.net/jpg/00/68/33/03/360_F_68330331_dKqChy33w0TcNHJEkqT5iw97QOX8la7F.jpg',
        }}
        style={Style.img2}
      />
    </View>
  );
};

const Text1Comp = () => {
  return (
    <Text style={Style.paragraph}>
      <Text style={Style.text1}>halo ,</Text>
      <Text style={Style.text2}>Apa Kabare?</Text>
    </Text>
  );
};

const Shape1Comp = () => {
  return (
    <View style={Style.vw2}>
      <Text style={Style.vw2Text}>Berpikir Sebelum Menekan Tombol</Text>
    </View>
  );
};

const Btn1Comp = () => {
  return (
    <View>
      <Button
        title="Push Me"
        color={'green'}
        onPress={() => Alert.alert('You are Pushing me')}
      />
      <TouchableOpacity style={Style.btn2} onPress={pressMe}>
        <Text style={Style.btn2Text}>Mas Click Aku</Text>
      </TouchableOpacity>
    </View>
  );
};

class InputClass extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={Style.ti1}
          placeholder="Input Your Called Name pret"
        />
      </View>
    );
  }
}

export default FirstComponent;
