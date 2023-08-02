import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}>
      <CategoriesCard
        imgUrl="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
        title="Burger"
      />
      <CategoriesCard
        imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
        title="Indian Thali"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"
        title="Pizza"
      />
      <CategoriesCard
        imgUrl="https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg"
        title="Dosa"
      />
      <CategoriesCard
        imgUrl="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
        title="Burger"
      />
      <CategoriesCard
        imgUrl="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
        title="Indian Thali"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"
        title="Pizza"
      />
      <CategoriesCard
        imgUrl="https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg"
        title="Dosa"
      />
    </ScrollView>
  );
};

export default Categories;
