import React, { Component } from 'react'
import {View, Text, StyleSheet} from  'react-native'

class Tab3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab3</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6e58d'
    }
})


export default Tab3;