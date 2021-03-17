import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Favorites = () => {

    return (
        <View style={styles.container}>
      <ScrollView >
      <Text style={styles.title}>Favoris </Text>
      </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 20,
      fontWeight: "bold",
      color: "red",
      margin: 20
    }
  });

export default Favorites