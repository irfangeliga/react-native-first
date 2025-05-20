import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableHighlight, Alert} from 'react-native';
import Style2 from './Style2.tsx';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tw from 'twrnc';

const handlePost = () => {
  try {
    Alert.alert('Follow Success Sir');
    console.log('masuk');
  } catch (error) {
    console.log(error);
  }
};
const messagePress = () => {
  try {
    Alert.alert('Send Message Success');
    console.log('message in');
  } catch (error) {
    console.log(error);
  }
};
const contactPress = () => {
  Alert.alert('You Are Connect');
};

// class SecondComponent extends Component<any, any> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: 200,
//     };
//     console.log('=>> contructor');
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         post: 5340,
//       });
//     }, 2000);
//     console.log('=>> Component Did Mount');
//   }

//   componentDidUpdate() {
//     console.log('=>> Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('=>> Component Will Unmount');
//   }

//   render() {
//     console.log('render');
//     return (
//       <View style={tw`my-5`}>
//         <View style={Style2.headView}>
//           <View style={Style2.view2}>
//             <Text style={Style2.headViewText}>cacing.cacik</Text>
//             <Icon
//               style={Style2.headViewIcon}
//               name="expand-more"
//               size={30}
//               color="#0476D0"
//             />
//           </View>
//           <View style={Style2.view3}>
//             <Icon
//               style={Style2.plusIcon}
//               name="add"
//               size={30}
//               color="#0476D0"
//             />
//             <Icon
//               style={Style2.headViewIcon}
//               name="menu"
//               size={30}
//               color="#0476D0"
//             />
//           </View>
//         </View>
//         <View style={Style2.profile}>
//           <View>
//             <Image
//               source={{
//                 uri: 'https://companynewheroes.com/wp-content/blogs.dir/18/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683.jpg',
//               }}
//               style={Style2.image}
//             />
//           </View>

//           <View style={Style2.statisticData}>
//             <View>
//               <Text style={Style2.statisticText}>{this.state.post}</Text>
//               <Text style={Style2.statisticText}>Post</Text>
//             </View>
//             <View>
//               <Text style={Style2.statisticText}>10.299</Text>
//               <Text style={Style2.statisticText}>Follower</Text>
//             </View>
//             <View>
//               <Text style={Style2.statisticText}>2.890</Text>
//               <Text style={Style2.statisticText}>Following</Text>
//             </View>
//           </View>
//         </View>
//         <View style={Style2.description}>
//           <Text style={Style2.descText}>1/2</Text>
//           <Text style={{fontSize: 12}}>~KELANA</Text>
//           <Text style={{fontSize: 12}}>Admin Panggilan 🖥🖨</Text>
//           <Text style={{marginTop: 10, fontSize: 12}}>
//             Diikuti oleh
//             <Text style={Style2.descText}>irhanmustofa, randenmas.henry</Text>+
//             17
//           </Text>
//         </View>
//         <View
//           style={{
//             margin: 8,
//             flexDirection: 'row',
//             flex: 1,
//           }}>
//           <TouchableHighlight onPress={handlePress} style={[Style2.btnFollow]}>
//             <Text style={Style2.btnText}>Following</Text>
//           </TouchableHighlight>
//           <TouchableOpacity onPress={messagePress} style={[Style2.btnMessage]}>
//             <Text style={Style2.btnOutlineText}>Message</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={contactPress} style={[Style2.btnContact]}>
//             <Text style={Style2.btnOutlineText}>Contact</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

const StoryComponent = (props: any) => {
  if (props.gambar !== undefined) {
    return (
      <View style={tw`m-3`}>
        <Image
          source={{
            uri: props.gambar,
          }}
          style={tw`size-16  rounded-full border-2 border-pink-200`}
        />
        <Text style={tw`text-[10px] text-center`}>{props.judul}</Text>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const SecondComponent = () => {
  return (
    <View style={tw`my-5`}>
      <HeadView />
      <Profile />
      <Description />
      <BtnAct />
      <Stories />
    </View>
  );
};

const HeadView = () => {
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
        <Icon style={Style2.plusIcon} name="add" size={30} color="#0476D0" />
        <Icon
          style={Style2.headViewIcon}
          name="menu"
          size={30}
          color="#0476D0"
        />
      </View>
    </View>
  );
};

const Profile = () => {
  const [post, setPost] = useState(867);

  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setPost(11000);
    }, 5000);
    return () => {
      console.log('did update');
    };
  }),
    [post];

  return (
    <View style={Style2.profile}>
      <View>
        <Image
          source={{
            uri: 'https://companynewheroes.com/wp-content/blogs.dir/18/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683.jpg',
          }}
          style={Style2.image}
        />
      </View>

      <View style={Style2.statisticData}>
        <View>
          <Text style={Style2.statisticText}>{post}</Text>
          <Text style={Style2.statisticText}>Post</Text>
        </View>
        <View>
          <Text style={Style2.statisticText}>10.299</Text>
          <Text style={Style2.statisticText}>Follower</Text>
        </View>
        <View>
          <Text style={Style2.statisticText}>2.890</Text>
          <Text style={Style2.statisticText}>Following</Text>
        </View>
      </View>
    </View>
  );
};

const Description = () => {
  return (
    <View style={Style2.description}>
      <Text style={Style2.descText}>1/2</Text>
      <Text style={tw`text-[12px]`}>~KELANA</Text>
      <Text style={tw`text-[12px]`}>Admin Panggilan 🖥🖨</Text>
      <Text style={tw`mt-[10px] text-[12px]`}>
        Diikuti oleh
        <Text style={Style2.descText}>irhanmustofa, randenmas.henry</Text>+ 17
      </Text>
    </View>
  );
};

const Stories = () => {
  var dataStory = [
    {
      nama: 'Jogja',
      gambar:
        'https://cdn.prod.website-files.com/576fd5a8f192527e50a4b95c/5d88a7b8f90529761c08cf0c_Yogyakarta%2C%20indonesia.jpg',
    },
    {
      nama: 'Jakarta',
      gambar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Busway_in_Bundaran_HI.jpg/960px-Busway_in_Bundaran_HI.jpg',
    },
  ];

  var myloop = [];
  for (let i = 0; i < dataStory.length; i++) {
    myloop.push(
      <StoryComponent
        key={i}
        judul={dataStory[i].nama}
        gambar={dataStory[i].gambar}
      />,
    );
  }
  return <View style={tw`flex flex-row `}>{myloop}</View>;
};

const BtnAct = () => {
  const [post, setPost] = useState(0);
  const [message, setMessage] = useState(0);
  const [contact, setContact] = useState(0);

  return (
    <View style={tw`p-2 flex flex-row justify-around`}>
      <View style={tw` w-1/3 items-center px-2`}>
        <Text>{post}</Text>
        <TouchableHighlight
          onPress={() => {
            handlePost(), setPost(post + 1);
          }}
          style={tw`h-[40px] w-full flex justify-center rounded border border-sky-500 bg-sky-500`}>
          <Text style={tw`text-white text-[14px] font-medium text-center`}>
            Following
          </Text>
        </TouchableHighlight>
      </View>
      <View style={tw`w-1/3 items-center px-2`}>
        <Text>{message}</Text>
        <TouchableHighlight
          onPress={() => {
            messagePress(), setMessage(message + 1);
          }}
          style={tw`h-[40px] w-full flex justify-center rounded border border-black bg-transparent`}>
          <Text style={tw`text-black text-[14px] font-medium text-center`}>
            Message
          </Text>
        </TouchableHighlight>
      </View>
      <View style={tw`w-1/3  items-center px-2`}>
        <Text>{contact}</Text>
        <TouchableHighlight
          onPress={() => {
            contactPress(), setContact(contact + 1);
          }}
          style={tw`h-[40px] w-full flex justify-center rounded border border-black  bg-transparent`}>
          <Text style={tw`text-black text-[14px] font-medium text-center`}>
            Contact
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
export default SecondComponent;
