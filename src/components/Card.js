import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Button,
    Icon
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class Card extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        // onPress: PropTypes.func.isRequired
    }

    static defaultProps = {
        upbutton: 'caret-up'
    }

    render() {
        const {data, data: {profile_pic, name, image_url}, navigate} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.image_container}>
                        <Image source={{uri: profile_pic}} style={styles.pp} resizeMode="stretch"/>
                        <Text style={styles.text} onPress={()=>navigate('Profile',data)}>{name}</Text>
                </View>
                <TouchableOpacity style={styles.container}>  
                    <View style={styles.pic_container}>
                        <Image source={{uri: image_url}} style={styles.image}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Button boarded black iconLeft light style={{width: 45, height: 30}}>
                        <Icon name='arrow-up' />
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 2
    },
    image_container: {
        flexDirection: "row",
        marginBottom: 10,
    },
    text : {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
    },
    pp: {
        marginRight: 10,
        marginLeft: 10,
        alignSelf: 'center',
        height: 25,
        width: 25,
        borderWidth: 0,
        borderRadius: 12
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent:'center',
    },
    pic_container: {
        alignItems: 'stretch',
        height: 250
    },
    upicon: {
        alignSelf: 'center',
        height: 25,
        width: 25,
        borderWidth: 1,
        borderRadius: 5
    },
    footer: {
        margin: 8, 
        alignItems: 'stretch',
        // width: 30, 
        // height:30,
        marginBottom: 50
    }
});