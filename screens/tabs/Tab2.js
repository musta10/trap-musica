import React, { Component } from 'react'
import {View, Text, StyleSheet} from  'react-native'

class Tab2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab2</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffbe76'
    }
})



export default Tab2;