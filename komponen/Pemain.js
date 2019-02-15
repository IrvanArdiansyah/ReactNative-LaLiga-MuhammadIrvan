import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, Input, Button, Item, Icon, Text,
    Card, CardItem, Left, Right, Thumbnail, Body, View, List, ListItem, Title
} from 'native-base'
import { Image } from 'react-native'
import axios from 'axios'
import { createStackNavigator, createAppContainer }
    from 'react-navigation'

export default class Pemain extends Component {
    state = {
        player: []
    }
    componentDidMount() {
        let team = this.props.navigation.getParam('team')
        let url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${team}`
        axios.get(url).then((info) => {
            this.setState({
                player: info.data.player
            })
        })
    }
    render() {
        let klub = this.props.navigation.getParam('team')
        let pecah = this.state.player.map((val, i) => {
            let id = val.idPlayer
            let logo = val.strThumb
            let nama = val.strPlayer
            let posisi = val.strPosition
            return (
                <ListItem key={i} button onPress={() => {
                    this.props.navigation.navigate('HalTiga', {
                        team: klub,
                        id: id,
                        player: nama}
                    )}}>
                    <Left>
                        <Image source={{ uri: logo }} style={{ width: 40, height: 40 }} />
                    </Left>
                    <Body>
                        <Text>{nama}</Text>
                        <Text note>{posisi}</Text>
                    </Body>
                    <Right></Right>
                </ListItem>
            )
        })
        return (
            <React.Fragment>
                <Container>
                    <Header searchBar rounded style={{ backgroundColor: 'red', opacity: 10 }}>
                        <Title>LA LIGA TEAMS</Title>
                    </Header>
                    <Content>
                        <List>
                            {pecah}
                        </List>
                    </Content>
                    <Footer></Footer>
                </Container>
            </React.Fragment>
        )
    }
}