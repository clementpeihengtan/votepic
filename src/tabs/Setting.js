import React, {Component} from 'react';
import { 
    Container, 
    Header, 
    Content, 
    List, 
    ListItem, 
    Text 
} from 'native-base';

export default class Setting extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text>My Profile</Text>
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Login</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Collection</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}