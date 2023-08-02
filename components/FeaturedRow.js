import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({id, title, dis}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CC88" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{dis}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/* RestaurantCards... */}
        <RestaurantCard
          id="1"
          imgUrl="https://lh5.googleusercontent.com/p/AF1QipPSF_rTZXc9O2Jq04SRhyiiWqyuGawPpekZLOQA=w114-h114-n-k-no"
          title="Sehmbi's Family Restaurant"
          rating="4.5"
          genre="Indian"
          address="New Delhi"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://lh5.googleusercontent.com/p/AF1QipPSF_rTZXc9O2Jq04SRhyiiWqyuGawPpekZLOQA=w114-h114-n-k-no"
          title="Sehmbi's Family Restaurant"
          rating="4.5"
          genre="Indian"
          address="New Delhi"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://lh5.googleusercontent.com/p/AF1QipPSF_rTZXc9O2Jq04SRhyiiWqyuGawPpekZLOQA=w114-h114-n-k-no"
          title="Sehmbi's Family Restaurant"
          rating="4.5"
          genre="Indian"
          address="New Delhi"
          short_description="This is a Test description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
