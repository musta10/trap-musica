import React, { Component } from 'react'
import {View, Text,StyleSheet} from  'react-native'

class Tab1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Tab1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    }
})



export default Tab1;