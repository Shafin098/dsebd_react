import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        fontFamily: 'sans-serif',
    },
    dataContainer: {
        flexDirection: 'row',
        padding: 20,
        margin: 4,
        borderRadius: 5,
        backgroundColor: "#fff",
        fontWeight: 'bold',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    dataTicker: {
        flex: 2,
        fontWeight: 'bold',
    },
    dataPrice: {
        flex: 1,
        fontFamily: 'monospace',
        textAlign: 'center',
    },
    dataPriceChange: {
        flex: 1,
        fontFamily: 'monospace',
        textAlign: 'center',
    }
});

export default styles;