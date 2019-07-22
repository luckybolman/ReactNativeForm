import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
        />
    	<Text> Which is your favourite teacher? </Text>
    	<View>
    		<Text>A. Mr Paul</Text>
    		<Text>B. Mr Craig</Text>
    		<Text>C. Ms John</Text>
    		<Text>D. Ms hang</Text>
    	</View>
    	<Button title="Click me" onPress={ ()=>{ Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSc8qpGnjqPbiQ-Idz6LtWITTfFDG_d1y7hpQgc2PgbVnA0PBg/viewform')}} />
      </View>
    );
  }
}
