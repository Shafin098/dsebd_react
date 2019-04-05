import React from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar
} from 'react-native';
import DataContainer from './DataContainer';
import styles from './styleSheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: 'No Error',
    };

    this.fetchData = this.fetchData.bind(this);
  }


  fetchData() {
    const dataUrl = 'http://dsebd.herokuapp.com/data/';
    fetch(dataUrl)
      .then(response => response.json())
      .then(json => this.setState({
        data: json,
        error: 'No Error'
      }))
      .catch((err) => this.setState({
        error: err,
      }));
  }


  componentDidMount() {
    const intervalinSec = 35;
    this.fetchData();
    setInterval(this.fetchData, intervalinSec * 1000);
  }

  render() {
    if (this.state.error === 'No Error') {
      return (
        <View style={{flex: 1}}>       
            <View style={{height: StatusBar.currentHeight, backgroundColor:'gray'}}></View> 
            <FlatList
            style={styles.container}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item[0]}
            renderItem={({item}) => <DataContainer data={item}/>}/>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
            <View style={{height: StatusBar.currentHeight, backgroundColor:'gray'}}></View> 
            <Text style={{fontSize:25, fontWeight:'bold', color:'white',}}>Something went wrong</Text>
        </View>
      );
    }

  }
}

