import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function index(props: any) {
  return (
    <View>
      <View style={tw`flex flex-row flex-wrap justify-evenly my-4 mx-8`}>
        <View style={tw`w-full  bg-sky-300 p-4 rounded-xl`}>
          <Text style={tw`text-[20px] text-white font-bold`}>
            Redmi 15 Pro 5G
          </Text>
          <View style={tw`flex flex-row justify-center py-4`}>
            <Image
              source={{
                uri: 'https://oganilir.disway.id/upload/26b906b1f2cdb2523e43fb0ac07189b2.jpg',
                width: 250,
                height: 250,
              }}
              style={tw`rounded-xl`}
            />
          </View>
          <TouchableOpacity
            style={tw`bg-zinc-700 py-2 rounded-md mx-6`}
            onPress={props.onButtonPress}>
            <Text style={tw`text-center text-white font-bold font uppercase`}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
