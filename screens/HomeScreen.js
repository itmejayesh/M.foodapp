import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex">
        {/* Header Section */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="text-xs text-gray-400 font-bold">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl flex">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* SearchBar */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 px-5 items-center h-14">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Restaurants search..."
              keyboardType="default"
            />
          </View>
          <AdjustmentsHorizontalIcon size={35} color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView
          className="bg-gray-100"
          showsVerticalScrollIndicator={false}>
          {/* Categories */}
          <Categories />
          {/* Featured Rows */}
          <FeaturedRow
            id="1"
            title="Featured"
            dis="Paid Placements from our partners"
            featuredCategory="featured"
          />
          {/* Tasty Discount */}
          <FeaturedRow
            id="2"
            title="Tasty Discount"
            dis="Everyone's been enjoyed these discount"
            featuredCategory="discount"
          />
          {/* Offer near you */}
          <FeaturedRow
            id="3"
            title="Offer near you!"
            dis="Why not support your local Restaurants tonight"
            featuredCategory="offers"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
