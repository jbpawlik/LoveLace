// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native';

const ProfileGrid = () => {
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    const items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: 'http://place-hold.it/200x200?text=' + (i + 1)
      };
    });
    console.log(items)
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item: any, index: any) => index}
      />
    </SafeAreaView>
  );
};

export default ProfileGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

// import { View, ScrollView, Text, Image, StyleSheet, FlatList } from 'react-native';

// export default function ProfileGrid() {
//   return (
//     <FlatList
//       data={}
//       renderItem={({ item }) => (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         margin: 1
//       }}>
//       <Image
//         source={{ uri: item.src }}
//       />
//     </View>
//   )}
//   //Setting the number of column
//   numColumns={3}
//   keyExtractor={(item, index) => index.toString()}
// />
//   )
// }