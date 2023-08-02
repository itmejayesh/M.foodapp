import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const CategoriesCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{uri: imgUrl}} className="h-20 w-20 rounded" />
      <Text className="text-gray-400 font-bold text-xs">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
