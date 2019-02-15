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
        let pemain = this.props.navigation.getParam('player')
        let url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${pemain}`
        axios.get(url).then((info) => {
            this.setState({
                player: info.data.player
            })
        })
    }
    render() {

        let pecah = this.state.player.map((val, i) => {
            let id = val.idPlayer
            let logo = val.strThumb
            let nama = val.strPlayer
            let warga = val.strNationality
            let deskripsi = val.strDescriptionEN

            return (
                <View key={i}>
                    <ListItem>
                        <Left>
                            <Image source={{ uri: logo }} style={{ width: 40, height: 40 }} />
                        </Left>
                        <Body>
                            <Text>{nama}</Text>
                            <Text note>{warga}</Text>
                        </Body>
                        <Right></Right>
                    </ListItem>
                    <Image source={{ uri: logo }} style={{ width: 600, height: 600 }}></Image>
                    <Text>{deskripsi}</Text>
                </View>
            )
        })
        return (
            <React.Fragment>
                <Container>
                    <Header searchBar rounded style={{ backgroundColor: 'red', opacity: 10 }}>
                        <Title>LA LIGA TEAMS</Title>
                    </Header>
                    <Content>
                        <View>
                            {pecah}
                        </View>
                    </Content>
                    <Footer></Footer>
                </Container>
            </React.Fragment>
        )
    }
}