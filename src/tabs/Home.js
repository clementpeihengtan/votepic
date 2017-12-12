import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'
import {
    Header
} from 'native-base';

import Card from '../components/Card';
import info from '../../data.json';
// import MainButton from '../components/MainButton'

export default class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                 <Header style={styles.header}>
                    {/*<MainButton onPress={() => navigate('DrawerOpen')}/>*/}
                    <Text style={styles.head}>Votepic</Text>
                </Header>
                <ScrollView>    
                    {info.map((data, index) => <Card
                    data = {data}
                    key={index}
                    navigate={navigate}
                    />
                    )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        marginTop: 15,
        marginBottom: 10,
        flexDirection: 'row'
    },
    head: {
        marginTop: 8,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});