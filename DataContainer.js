import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    StatusBar
} from 'react-native';
import styles from './styleSheet';

export default class DataContainer extends React.Component {
        constructor(props) {
            super(props);

            this.colorChange = this.colorChange.bind(this);
        }

        componentShouldUpdate(nextProps) {
            if (nextProps.data[2] === this.props.data[2]) {
                return false;
            } else {
                return true;
            }
        }

        colorChange(value) {
            const price = Number(value);
            if (price < 0) {
                return {
                    color: 'red'
                };
            } else if (price > 0) {
                return {
                    color: 'green'
                };
            }
        }

        render() {
                const symbol = this.props.data[0];
                const currentPrice = this.props.data[1];
                const priceChange = this.props.data[2];
                const percentChange = this.props.data[3];

        return (
            <View key={symbol} style={styles.dataContainer}>
                <Text  style={styles.dataTicker}> {symbol} </Text>
                <Text  styles={styles.dataPrice}> {currentPrice} </Text>
                <Text  style={[styles.dataPriceChange, this.colorChange(priceChange)]}> {priceChange} </Text>               
                <Text style={[styles.dataPriceChange, this.colorChange(priceChange)]}> {percentChange} </Text>
            </View>
        )      
    }
}