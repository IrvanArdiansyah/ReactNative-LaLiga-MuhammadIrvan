import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, Input, Button, Item, Icon, Text,
    Card, CardItem, Left, Right, Thumbnail, Body, View, List, ListItem, Title
} from 'native-base'
import { Image } from 'react-native'
import axios from 'axios'

export default class Team extends Component {
    state = {
        hasil: []
    }

    componentDidMount() {
        let url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
        axios.get(url).then((info) => {
            this.setState({
                hasil: info.data.teams
            })
        })
    }

    render() {

        let pecah = this.state.hasil.map((val, i) => {
            let id = val.idTeam
            let logo = val.strTeamBadge
            let nama = val.strTeam
            let website = val.strWebsite
            return (
                <ListItem key={i} button onPress={() => {
                    this.props.navigation.navigate('HalDua', {
                        id: id,
                        team: nama}
                    )}}>
                    <Left>
                        <Image source={{ uri: logo }} style={{ width: 40, height: 40 }} />
                    </Left>
                    <Body>
                        <Text>{nama}</Text>
                        <Text note>{website}</Text>
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