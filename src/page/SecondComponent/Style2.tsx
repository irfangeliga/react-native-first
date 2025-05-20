import {StyleSheet} from 'react-native';

const style2 = StyleSheet.create({
  headView: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  view2: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  view3: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headViewText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 15,
  },
  headViewIcon: {
    marginTop: 5,
    marginLeft: 3,
    fontSize: 25,
  },
  plusIcon: {
    marginTop: 5,
    marginRight: 20,
    fontSize: 18,
    borderWidth: 1.8,
    borderRadius: 5,
    padding: 1,
  },
  profile: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'pink',
  },
  statisticText: {
    textAlign: 'center',
    fontWeight: 600,
  },
  statisticData: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  description: {
    marginRight: 50,
    marginLeft: 25,
  },
  descText: {
    fontWeight: 700,
    fontSize: 12,
  },
  btnFollow: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: '#1E90FF',
    backgroundColor: '#1E90FF',
  },
  btnMessage: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  btnContact: {
    height: 30,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
  },
  btnOutlineText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default style2;
