// import React from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Animated, {SharedTransition} from 'react-native-reanimated';
//
const urls = [
  'https://images.unsplash.com/photo-1699190375905-3cac33bbdbb1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1700105968612-16177029010e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1702205210523-37acf6c5eff3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1702065555316-08fa5cacdd0e?q=80&w=3017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
//
const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});
//
// const HomeScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, backgroundColor: 'black'}}>
//       <LinearGradient
//         colors={['#000000', 'rgba(0,0,0,0)']}
//         locations={[0.3, 1]}
//         style={styles.linearGradient}>
//         <Text style={styles.buttonText}>Unsplash</Text>
//       </LinearGradient>
//       <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
//         {urls.map(url => (
//           <TouchableOpacity
//             key={url}
//             onPress={() => navigation.navigate('Details', {url})}>
//             <Animated.Image
//               sharedTransitionTag={`tag-${url}`}
//               sharedTransitionStyle={customTransition}
//               style={{width: '100%', height: 300}}
//               source={{uri: url}}
//             />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//
//       <LinearGradient
//         colors={['rgba(0,0,0,0)', '#000000']}
//         locations={[0, 1]}
//         style={styles.bottomLinearGradient}
//       />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   linearGradient: {
//     width: '100%',
//     height: 160,
//     position: 'absolute',
//     zIndex: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomLinearGradient: {
//     width: '100%',
//     height: 160,
//     position: 'absolute',
//     zIndex: 9,
//     bottom: 0,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontFamily: 'Gill Sans',
//     margin: 10,
//     color: '#ffffff',
//     backgroundColor: 'transparent',
//   },
// });
//
// export default HomeScreen;

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  FadeInLeft,
  SharedTransition,
  withSpring,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

export function HomeScreen({navigation}) {
  return (
    // <View style={styles.container}>
    //   <Animated.Image
    //     source={{uri: 'https://picsum.photos/id/39/200'}}
    //     style={{width: 300, height: 300}}
    //     sharedTransitionTag="tag"
    //   />
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    // </View>
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <LinearGradient
        colors={['#000000', 'rgba(0,0,0,0)']}
        locations={[0.3, 1]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Unsplash</Text>
      </LinearGradient>
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {urls.map(url => (
          <TouchableOpacity
            key={url}
            onPress={() => navigation.navigate('Details', {url})}>
            <Animated.Image
              sharedTransitionTag={`tag-${url}`}
              // sharedTransitionStyle={customTransition}
              style={{width: '100%', height: 300}}
              source={{uri: url}}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <LinearGradient
        colors={['rgba(0,0,0,0)', '#000000']}
        locations={[0, 1]}
        style={styles.bottomLinearGradient}
      />
    </View>
  );
}

export function DetailsScreen({navigation, route}) {
  const url = route.params.url;
  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: url}}
        style={{width: '100%', height: 300}}
        sharedTransitionTag={`tag-${url}`}
      />
      <Animated.Text entering={FadeInLeft.delay(300)} style={styles.title}>
        Random Image
      </Animated.Text>
      <Animated.Text entering={FadeInLeft.delay(300)} style={styles.subtitle}>
        Subtitle
      </Animated.Text>
      <Animated.Text style={styles.text} entering={FadeInLeft.delay(300)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet
        illo incidunt ipsum, iure libero optio voluptatum? Adipisci alias at
        cumque, delectus dolorem doloribus ducimus error et excepturi fugit
        harum in inventore iusto maiores, minus molestiae molestias mollitia nam
        nostrum quo quod reiciendis repellendus repudiandae suscipit ullam vitae
        voluptatem voluptatibus. Adipisci assumenda aut beatae incidunt
        laboriosam libero molestiae, nam nesciunt nobis nulla odit officia
        officiis quaerat quibusdam tenetur veniam voluptas. Delectus dicta eum
        illum ipsam itaque, molestias, nesciunt nostrum quas quibusdam rem
        sapiente soluta ut veniam. Aliquid dolores est eum expedita minus,
        nostrum odio officia porro, quo sint, ullam veniam.
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  linearGradient: {
    width: '100%',
    height: 160,
    position: 'absolute',
    zIndex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLinearGradient: {
    width: '100%',
    height: 160,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
  title: {
    fontSize: 42,
    color: 'white',
    textAlign: 'left',
    marginLeft: 24,
    marginTop: 16,
    width: '100%',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'left',
    marginLeft: 24,
    marginTop: 16,
    width: '100%',
  },
  text: {
    color: 'white',
    textAlign: 'left',
    paddingHorizontal: 12,
    marginTop: 22,
    fontSize: 18,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
