import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


const TestTouch = () => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#a2a8d3' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={backgroundColor}
            textColor={color}
          />
        );
      };
      
  return (

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ItemSeparatorComponent={ItemSeparator}

      />

  );
};



const ItemSeparator = () => <View style={{
    height: 10,
  }} />;

  

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.fullName}</Text>
  </TouchableOpacity>
  );



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#a2a8d3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
  },
});

const DATA = [
    {
      id: 'jaredpalmer.formik',
      fullName: 'jaredpalmer/formik',
      description: 'Build forms in React, without the tears',
      language: 'TypeScript',
      forksCount: 1589,
      stargazersCount: 21553,
      ratingAverage: 88,
      reviewCount: 4,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
      id: 'rails.rails',
      fullName: 'rails/rails',
      description: 'Ruby on Rails',
      language: 'Ruby',
      forksCount: 18349,
      stargazersCount: 45377,
      ratingAverage: 100,
      reviewCount: 2,
      ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
      id: 'django.django',
      fullName: 'django/django',
      description: 'The Web framework for perfectionists with deadlines.',
      language: 'Python',
      forksCount: 21015,
      stargazersCount: 48496,
      ratingAverage: 73,
      reviewCount: 5,
      ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
      id: 'reduxjs.redux',
      fullName: 'reduxjs/redux',
      description: 'Predictable state container for JavaScript apps',
      language: 'TypeScript',
      forksCount: 13902,
      stargazersCount: 52869,
      ratingAverage: 0,
      reviewCount: 0,
      ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
  ];

export default TestTouch;


// import React, {useState} from 'react';
// import {    View,
//             FlatList,
//             Text,
//             TouchableOpacity} from 'react-native';


// const Test = () => {

//   return (
//    <FlatList
//     data={DATA}
//     renderItem={({item}) => <Item title={item.fullName} />}
//     ItemSeparatorComponent={ItemSeparator}
//     />
//   );
// };



// const ItemSeparator = () => <View style={{
//     height: 10,
//   }} />;



// const Item = ({title}) => (
//     <View style={{
//         backgroundColor: "#a2a8d3",
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//       }} >
//       <Text style={{fontSize: 25}}>{title}</Text>
//     </View>
//   );

// // start opcion touch  

  
// // no se define afuera de un componente! revisar despues
// //https://refine.dev/blog/common-usestate-mistakes-and-how-to-avoid/
// //const [selectedId, setSelectedId] = useState();


// const renderItemTouch = ({item}) => {

//     const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <ItemTouch
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={backgroundColor}
//         textColor={color}
//       />
//     );
//   };

// const ItemTouch = ({item, onPress, backgroundColor, textColor}) => (
//     <TouchableOpacity onPress={onPress} 
//                       style={[styles.item, {backgroundColor}]}>
//       <Text style={[styles.title, {color: textColor}]}>
//         {item.fullName}
//         </Text>
//     </TouchableOpacity>
//   );
// // end version touch


// const DATA = [
//     {
//       id: 'jaredpalmer.formik',
//       fullName: 'jaredpalmer/formik',
//       description: 'Build forms in React, without the tears',
//       language: 'TypeScript',
//       forksCount: 1589,
//       stargazersCount: 21553,
//       ratingAverage: 88,
//       reviewCount: 4,
//       ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
//     },
//     {
//       id: 'rails.rails',
//       fullName: 'rails/rails',
//       description: 'Ruby on Rails',
//       language: 'Ruby',
//       forksCount: 18349,
//       stargazersCount: 45377,
//       ratingAverage: 100,
//       reviewCount: 2,
//       ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
//     },
//     {
//       id: 'django.django',
//       fullName: 'django/django',
//       description: 'The Web framework for perfectionists with deadlines.',
//       language: 'Python',
//       forksCount: 21015,
//       stargazersCount: 48496,
//       ratingAverage: 73,
//       reviewCount: 5,
//       ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
//     },
//     {
//       id: 'reduxjs.redux',
//       fullName: 'reduxjs/redux',
//       description: 'Predictable state container for JavaScript apps',
//       language: 'TypeScript',
//       forksCount: 13902,
//       stargazersCount: 52869,
//       ratingAverage: 0,
//       reviewCount: 0,
//       ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
//     },
//   ];

// export default Test;

