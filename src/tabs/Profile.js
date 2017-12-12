import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Profile extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FFF'
        }
    }

    render() {
        const {navigation, state:{params}} = this.props.navigation;
        return (
            <View>
                <View>
                    <Image source={{uri: params.profile_pic}}/>
                    <Text>{params.name}</Text>
                </View>
                <View>
                    
                </View>
            </View>
        );
    }
}