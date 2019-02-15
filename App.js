import React, { Component } from 'react';
import {
  Container, Header, Content, Footer, Input, Button, Item, Icon, Text,
  Card, CardItem, Left, Right, Thumbnail, Body, View, List, ListItem, Title
} from 'native-base'
import { Image } from 'react-native'
import axios from 'axios'
import { createStackNavigator, createAppContainer } 
from 'react-navigation'
import Team from './komponen/Team'
import Pemain from './komponen/Pemain'
import Detail from './komponen/Detail'


let AppNavigator = createStackNavigator(
  {
    HalSatu: Team,
    HalDua: Pemain,
    HalTiga: Detail
  },
  {
    InitialRouteName: 'HalSatu'
  }
)

export default createAppContainer(AppNavigator)
