import React from 'react';
import {
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import DataContainer from './DataContainer';
import styles from './styleSheet';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ['---', '--', '--', '--', '1'],
        ['---', '--', '--', '--', '2'],
        ['---', '--', '--', '--', '3'],
        ['---', '--', '--', '--', '4'],
        ['---', '--', '--', '--', '5'],
        ['---', '--', '--', '--', '6'],
        ['---', '--', '--', '--', '7'],
        ['---', '--', '--', '--', '8'],
        ['---', '--', '--', '--', '9'],
        ['---', '--', '--', '--', '10'],
        ['---', '--', '--', '--', '11'],
        ['---', '--', '--', '--', '12'],
      ],
      error: 'No Error',
      isLoading: false,
    };

    this.fetchData = this.fetchData.bind(this);
  }


  fetchData() {
    const dataUrl = 'http://dsebd.herokuapp.com/data/';
    fetch(dataUrl)
      .then(response => response.json())
      .then(json => this.setState({
        data: json,
        error: 'No Error',
        isLoading: false, 
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
            {/* <ActivityIndicator 
            animating={this.state.isLoading} 
            hidesWhenStopped={this.state.isLoading} 
            size="large" 
            color="#0000ff" />  */}
            <FlatList
            style={styles.container}
            data={this.state.data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => (item.length > 4) ? item[4] : item[0]}
            getItemLayout={(item, index) => ({length: 61, offset: 61 * index, index})}
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

