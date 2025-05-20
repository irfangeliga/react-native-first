import {View, Button, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';

export default function index() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  });

  const [post, setPost] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users/2')
    //   .then(response => response.json())
    //   .then(ok => console.log(ok));

    const dataPost = {
      name: 'irhan',
      job: 'projek pop',
      title: 'foo',
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(dataPost),
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(json => console.log(json), setUser(json.data));
  };

  const postData = () => {
    const input = {
      name: 'irhan',
      username: 'lainlain',
      email: 'lainlain@mail.co',
    };

    fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: 'POST',
      body: input,
    })
      .then(response => response.json())
      .then(json => console.log(json), setPost(json));
  };
  return (
    <View>
      <Text style={tw`text-center`}>Call Api Concept</Text>
      <View style={tw`my-2`}>
        <Button title="Get Data" onpress={getData} />
        <Text>{user.name}</Text>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
      </View>
      <View style={tw`my-2`}>
        <Button title="Post Data" onpress={postData} />
        <Text>{post.name}</Text>
        <Text>{post.username}</Text>
        <Text>{post.email}</Text>
      </View>
    </View>
  );
}
