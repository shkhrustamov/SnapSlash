import {Button, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

const DetailsScreen = ({navigation, route}) => {
  const url = route.params.url;

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: url}}
        style={{width: '100%', height: 300}}
        sharedTransitionTag={`tag-${url}`}
      />
      <Text>Gay</Text>
      <Text>Being gay is ok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default DetailsScreen;
