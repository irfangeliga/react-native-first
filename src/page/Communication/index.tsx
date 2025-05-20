import {View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../Component/Cart/';
import Product from '../../Component/Product/';

export default function index() {
  const [Add, setAdd] = useState(0);
  return (
    <View>
      <Cart quantity={Add} />
      <Product
        onButtonPress={() => {
          setAdd(Add + 1);
        }}
      />
    </View>
  );
}
