import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


const Home = () => {
 
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState('staro')
  
  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Vq52xCq4FyIwIjar9X1IZFKaVKv1hag6"

 const getBooks = () => {
    fetch(url)
    .then(response => response.json())
    .then( response =>
     { console.log(response.results.books)
      setData(response.results.books)
    }
    )
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
      setData([])
    getBooks();
  },[])

  const favoritePressed = () => {
      if(favorite === "staro"){
          setFavorite('star')
      } else {
          setFavorite('staro')
      }
  }
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview} >
      <Text style={styles.title}>Les meilleurs livres </Text>
      {data.map(book => {
       return(
        <View key={`indexs${book.rank}`} style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <View >
            <Text style={styles.container} >{book.rank}</Text>
            <Text >{book.title}</Text>
            <Text >{book.author}</Text>   
            </View>
            <Icon name={favorite} size={30} style={{color: "orange", marginTop: 7, marginLeft: 7}} onPress={() => favoritePressed()}></Icon>
        </View>
      )})}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  scrollview: {
    margin: 15,
    padding: 5,
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    margin: 20,
  }
});

export default Home;