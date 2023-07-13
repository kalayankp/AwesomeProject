import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Welcome = ({navigation,route})=>{
    const { value } = route.params;
    console.log("password----",value)
    return(
        <View>
            <Text>
                Welcomescreen
            </Text>
        </View>
    )
}
export default Welcome