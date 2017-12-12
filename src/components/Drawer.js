import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Container,
    List,
    ListItem,
    Separator
} from 'native-base';

export default class Drawer extends Component {
    render() {
        const { navigate }= this.props.navigation;
        return(
            <Container style={styles.container}>
                <View style={{flex: 1}}>
                    
                </View>
                <Content>
                    <ListItem></ListItem>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        marginVertical: 20
    }
})