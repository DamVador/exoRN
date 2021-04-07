import React, { useState, useEffect, useRef }  from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


const Home = () => {
 
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState(false)
  
  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Vq52xCq4FyIwIjar9X1IZFKaVKv1hag6"

  const animationVariable = useRef(new Animated.Value(0)).current;

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
    setFavorite(!favorite)
    if(favorite){
      Animated.timing(animationVariable, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,      
        }).start()
      } else {
        Animated.timing(animationVariable, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,      
        }).start()
      }
    }
 
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview} >
      <Text style={styles.title}>Les meilleurs livres </Text>
      {data.map(book => {
       return(
        <View className = {`Mainclass-${book.rank}`}key={`indexs${book.rank}`} id={`book${book.rank}`} style={{flexDirection: "row", justifyContent: 'space-between', marginBottom: 5}}>
            <View >
              <Text style={styles.container} >{book.rank}</Text>
              <Text >{book.title}</Text>
              <Text >{book.author}</Text>   
            </View>

            <View className = {`class-${book.rank}`}  style={{flexDirection: "column"}}>
                <Icon id={`idd-${book.rank}`} name={'staro'} size={30} style={{color: "orange", marginTop: 7, marginLeft: 7}} onPress={() => {favoritePressed()}}></Icon>
                <Animated.View style={[{opacity: animationVariable, transform: [
                    { scale: 1.1 },
                    { perspective: 1000 } 
                  ]}]}>           
                  <Icon id={`id-${book.rank}`} name={'star'} size={30} style={{color: "orange", marginTop: -32, marginLeft: 7}} onPress={() => {favoritePressed()}}></Icon>
                </Animated.View>
          </View>
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