import {View, Text} from 'react-native';
import React from 'react';
import Style2 from '../../page/SecondComponent/Style2.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

export default function index(props: any) {
  return (
    <View style={Style2.headView}>
      <View style={Style2.view2}>
        <Text style={Style2.headViewText}>cacing.cacik</Text>
        <Icon
          style={Style2.headViewIcon}
          name="expand-more"
          size={30}
          color="#0476D0"
        />
      </View>
      <View style={Style2.view3}>
        <View style={tw` relative`}>
          <Icon
            style={tw`border rounded-xl p-2 m-1 `}
            name="shopping-cart"
            size={20}
            color="#0476D0"
          />
          <Text
            style={tw`border border-red-500 px-1 font-bold text-[11px] top-0 right-0 bg-red-500 absolute rounded-full text-white`}>
            {props.quantity}
          </Text>
        </View>
        <Icon
          style={Style2.headViewIcon}
          name="menu"
          size={30}
          color="#0476D0"
        />
      </View>
    </View>
  );
}
