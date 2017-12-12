import React, {Component} from 'react';
import PropTypes from 'prop-types' ;
import {
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainButton extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired
    }

    static defaultProps = {
        icon: 'md-menu'
    }

    render() {
        return (
            <View>
                <Icon.Button
                    name={this.props.icon}
                    size={26}
                    color="black"
                    backgroundColor="#FFF"
                    onPress={this.props.onPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        top: 20,
        left: 5
    }
});