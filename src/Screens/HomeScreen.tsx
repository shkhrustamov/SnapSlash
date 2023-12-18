import React, {useEffect, useState} from 'react';
import Icon from '@mdi/react';
import {mdiFlag} from '@mdi/js';

const customTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});

const TabIcon = ({
  screenName,
  name,
  color,
}: {
  name: string;
  color: string;
  screenName: string;
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('modalScreen-1');
      }}
      hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}>
      <MaterialCommunityIcons name={name} color={color} size={24} />
    </TouchableOpacity>
  );
};

import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  FadeInLeft,
  SharedTransition,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  useAnimatedProps,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import * as path from 'path';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigation from '../Navigation/Navigation.tsx';

type Image = {
  id: string;
  slug: 'a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
  created_at: '2023-05-02T06:42:00Z';
  updated_at: '2023-12-17T13:40:55Z';
  promoted_at: null;
  width: 8688;
  height: 5792;
  color: '#f3d9c0';
  blur_hash: 'L,LD0;NaRkxZ~pf6aeWVtljYjZWC';
  description: string;
  alt_description: 'a man standing in front of a desert landscape';
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: 'https://api.unsplash.com/photos/a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
    html: 'https://unsplash.com/photos/a-man-standing-in-front-of-a-desert-landscape-Xm1wdkNUwrY';
    download: 'https://unsplash.com/photos/Xm1wdkNUwrY/download?ixid=M3w1Mzc2ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjg0Mjg5NHw';
    download_location: 'https://api.unsplash.com/photos/Xm1wdkNUwrY/download?ixid=M3w1Mzc2ODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwMjg0Mjg5NHw';
  };
  likes: 228;
  liked_by_user: false;
  current_user_collections: [];
  sponsorship: {
    impression_urls: [
      'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515517&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
      'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515720&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
    ];
    tagline: 'Made to Change';
    tagline_url: 'https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral';
    sponsor: {
      id: 'mYizSrdJkkU';
      updated_at: '2023-12-17T14:06:12Z';
      username: 'neom';
      name: 'NEOM';
      first_name: 'NEOM';
      last_name: null;
      twitter_username: 'neom';
      portfolio_url: 'http://www.neom.com';
      bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.';
      location: 'NEOM, Saudi Arabia';
      links: {
        self: 'https://api.unsplash.com/users/neom';
        html: 'https://unsplash.com/@neom';
        photos: 'https://api.unsplash.com/users/neom/photos';
        likes: 'https://api.unsplash.com/users/neom/likes';
        portfolio: 'https://api.unsplash.com/users/neom/portfolio';
        following: 'https://api.unsplash.com/users/neom/following';
        followers: 'https://api.unsplash.com/users/neom/followers';
      };
      profile_image: {
        small: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32';
        medium: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64';
        large: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128';
      };
      instagram_username: 'discoverneom';
      total_collections: 7;
      total_likes: 0;
      total_photos: 202;
      total_promoted_photos: 72;
      accepted_tos: true;
      for_hire: false;
      social: {
        instagram_username: 'discoverneom';
        portfolio_url: 'http://www.neom.com';
        twitter_username: 'neom';
        paypal_email: null;
      };
    };
  };
  topic_submissions: {};
  user: {
    id: 'mYizSrdJkkU';
    updated_at: '2023-12-17T14:06:12Z';
    username: 'neom';
    name: 'NEOM';
    first_name: 'NEOM';
    last_name: null;
    twitter_username: 'neom';
    portfolio_url: 'http://www.neom.com';
    bio: 'Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.';
    location: 'NEOM, Saudi Arabia';
    links: {
      self: 'https://api.unsplash.com/users/neom';
      html: 'https://unsplash.com/@neom';
      photos: 'https://api.unsplash.com/users/neom/photos';
      likes: 'https://api.unsplash.com/users/neom/likes';
      portfolio: 'https://api.unsplash.com/users/neom/portfolio';
      following: 'https://api.unsplash.com/users/neom/following';
      followers: 'https://api.unsplash.com/users/neom/followers';
    };
    profile_image: {
      small: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32';
      medium: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64';
      large: 'https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128';
    };
    instagram_username: 'discoverneom';
    total_collections: 7;
    total_likes: 0;
    total_photos: 202;
    total_promoted_photos: 72;
    accepted_tos: true;
    for_hire: false;
    social: {
      instagram_username: 'discoverneom';
      portfolio_url: 'http://www.neom.com';
      twitter_username: 'neom';
      paypal_email: null;
    };
  };
};

export const Modal1 = () => {
  return (
    <View style={{flexGrow: 1, backgroundColor: '#1e1e1e', opacity: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: '700', color: '#fff'}}>
          SnapSlash
        </Text>
        <Text style={{fontSize: 15, fontWeight: '400', color: '#fff'}}>
          v2023.11
        </Text>
      </View>
    </View>
  );
};

export function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Image[]>([]);

  const getPhotos = async () => {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=L-sV86yyMukCONwrq0oi4TkdZRqyL2ueUF-2I7eE2uE',
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <LinearGradient
        colors={['#000000', 'rgba(0,0,0,0)']}
        locations={[0.3, 1]}
        style={styles.linearGradient}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('modalScreen-1');
            }}>
            <TabIcon screenName="Home" name="cloud" color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('modalScreen-1');
            }}>
            <Text style={styles.buttonText}>SnapSlash</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <ScrollView style={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        {data.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() =>
              navigation.navigate('Details', {url: image.urls.raw})
            }>
            <Animated.Image
              sharedTransitionTag={`tag-${image.urls.raw}`}
              sharedTransitionStyle={customTransition}
              style={{width: '100%', height: 300}}
              source={{uri: image.urls.raw}}
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
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translationY.value = event.contentOffset.y;
  });
  const url = route.params.url;

  const style = useAnimatedStyle(() => ({
    top: 0,
    position: 'absolute',
    transform: [
      {
        scale: interpolate(
          translationY.value,
          [-300, 0],
          [2, 1],
          Extrapolation.CLAMP,
        ),
      },
    ],
    // borderRadius: interpolate(
    //   translationY.value,
    //   [0, 300],
    //   [0, 48],
    //   Extrapolation.CLAMP,
    // ),
    width: '100%',
    height: 300,
  }));

  const vStyles = useAnimatedStyle(() => ({
    // flex: 1,
    width: '100%',
    backgroundColor: 'black',
    // position: 'absolute',
    // top: -translationY.value + 300,
  }));

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Animated.Image
        source={{uri: url, cache: 'force-cache'}}
        style={style}
        sharedTransitionTag={`tag-${url}`}
      />
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={{...styles.container, paddingTop: 300}}>
        <Animated.View style={vStyles}>
          <Animated.Text entering={FadeInLeft.delay(300)} style={styles.title}>
            Random Image
          </Animated.Text>
          <Animated.Text
            entering={FadeInLeft.delay(300)}
            style={styles.subtitle}>
            Subtitle
          </Animated.Text>
          <Animated.Text style={styles.text} entering={FadeInLeft.delay(300)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            amet illo incidunt ipsum, iure libero optio voluptatum? Adipisci
            alias at cumque, delectus dolorem doloribus ducimus error et
            excepturi fugit harum in inventore iusto maiores, minus molestiae
            molestias mollitia nam nostrum quo quod reiciendis repellendus
            repudiandae suscipit ullam vitae voluptatem voluptatibus. Adipisci
            assumenda aut beatae incidunt laboriosam libero molestiae, nam
            nesciunt nobis nulla odit officia officiis quaerat quibusdam tenetur
            veniam voluptas. Delectus dicta eum illum ipsam itaque, molestias,
            nesciunt nostrum quas quibusdam rem sapiente soluta ut veniam.
            Aliquid dolores est eum expedita minus, nostrum odio officia porro,
            quo sint, ullam veniam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci amet illo incidunt ipsum, iure libero
            optio voluptatum? Adipisci alias at cumque, delectus dolorem
            doloribus ducimus error et excepturi fugit harum in inventore iusto
            maiores, minus molestiae molestias mollitia nam nostrum quo quod
            reiciendis repellendus repudiandae suscipit ullam vitae voluptatem
            voluptatibus. Adipisci assumenda aut beatae incidunt laboriosam
            libero molestiae, nam nesciunt nobis nulla odit officia officiis
            quaerat quibusdam tenetur veniam voluptas. Delectus dicta eum illum
            ipsam itaque, molestias, nesciunt nostrum quas quibusdam rem
            sapiente soluta ut veniam. Aliquid dolores est eum expedita minus,
            nostrum odio officia porro, quo sint, ullam veniam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Adipisci amet illo
            incidunt ipsum, iure libero optio voluptatum? Adipisci alias at
            cumque, delectus dolorem doloribus ducimus error et excepturi fugit
            harum in inventore iusto maiores, minus molestiae molestias mollitia
            nam nostrum quo quod reiciendis repellendus repudiandae suscipit
            ullam vitae voluptatem voluptatibus. Adipisci assumenda aut beatae
            incidunt laboriosam libero molestiae, nam nesciunt nobis nulla odit
            officia officiis quaerat quibusdam tenetur veniam voluptas. Delectus
            dicta eum illum ipsam itaque, molestias, nesciunt nostrum quas
            quibusdam rem sapiente soluta ut veniam. Aliquid dolores est eum
            expedita minus, nostrum odio officia porro, quo sint, ullam veniam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            amet illo incidunt ipsum, iure libero optio voluptatum? Adipisci
            alias at cumque, delectus dolorem doloribus ducimus error et
            excepturi fugit harum in inventore iusto maiores, minus molestiae
            molestias mollitia nam nostrum quo quod reiciendis repellendus
            repudiandae suscipit ullam vitae voluptatem voluptatibus. Adipisci
            assumenda aut beatae incidunt laboriosam libero molestiae, nam
            nesciunt nobis nulla odit officia officiis quaerat quibusdam tenetur
            veniam voluptas. Delectus dicta eum illum ipsam itaque, molestias,
            nesciunt nostrum quas quibusdam rem sapiente soluta ut veniam.
            Aliquid dolores est eum expedita minus, nostrum odio officia porro,
            quo sint, ullam veniam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci amet illo incidunt ipsum, iure libero
            optio voluptatum? Adipisci alias at cumque, delectus dolorem
            doloribus ducimus error et excepturi fugit harum in inventore iusto
            maiores, minus molestiae molestias mollitia nam nostrum quo quod
            reiciendis repellendus repudiandae suscipit ullam vitae voluptatem
            voluptatibus. Adipisci assumenda aut beatae incidunt laboriosam
            libero molestiae, nam nesciunt nobis nulla odit officia officiis
            quaerat quibusdam tenetur veniam voluptas. Delectus dicta eum illum
            ipsam itaque, molestias, nesciunt nostrum quas quibusdam rem
            sapiente soluta ut veniam. Aliquid dolores est eum expedita minus,
            nostrum odio officia porro, quo sint, ullam veniam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Adipisci amet illo
            incidunt ipsum, iure libero optio voluptatum? Adipisci alias at
            cumque, delectus dolorem doloribus ducimus error et excepturi fugit
            harum in inventore iusto maiores, minus molestiae molestias mollitia
            nam nostrum quo quod reiciendis repellendus repudiandae suscipit
            ullam vitae voluptatem voluptatibus. Adipisci assumenda aut beatae
            incidunt laboriosam libero molestiae, nam nesciunt nobis nulla odit
            officia officiis quaerat quibusdam tenetur veniam voluptas. Delectus
            dicta eum illum ipsam itaque, molestias, nesciunt nostrum quas
            quibusdam rem sapiente soluta ut veniam. Aliquid dolores est eum
            expedita minus, nostrum odio officia porro, quo sint, ullam veniam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            amet illo incidunt ipsum, iure libero optio voluptatum? Adipisci
            alias at cumque, delectus dolorem doloribus ducimus error et
            excepturi fugit harum in inventore iusto maiores, minus molestiae
            molestias mollitia nam nostrum quo quod reiciendis repellendus
            repudiandae suscipit ullam vitae voluptatem voluptatibus. Adipisci
            assumenda aut beatae incidunt laboriosam libero molestiae, nam
            nesciunt nobis nulla odit officia officiis quaerat quibusdam tenetur
            veniam voluptas. Delectus dicta eum illum ipsam itaque, molestias,
            nesciunt nostrum quas quibusdam rem sapiente soluta ut veniam.
            Aliquid dolores est eum expedita minus, nostrum odio officia porro,
            quo sint, ullam veniam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Adipisci amet illo incidunt ipsum, iure libero
            optio voluptatum? Adipisci alias at cumque, delectus dolorem
            doloribus ducimus error et excepturi fugit harum in inventore iusto
            maiores, minus molestiae molestias mollitia nam nostrum quo quod
            reiciendis repellendus repudiandae suscipit ullam vitae voluptatem
            voluptatibus. Adipisci assumenda aut beatae incidunt laboriosam
            libero molestiae, nam nesciunt nobis nulla odit officia officiis
            quaerat quibusdam tenetur veniam voluptas. Delectus dicta eum illum
            ipsam itaque, molestias, nesciunt nostrum quas quibusdam rem
            sapiente soluta ut veniam. Aliquid dolores est eum expedita minus,
            nostrum odio officia porro, quo sint, ullam veniam.
          </Animated.Text>
        </Animated.View>
      </Animated.ScrollView>
      {/*</Animated.ScrollView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
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
