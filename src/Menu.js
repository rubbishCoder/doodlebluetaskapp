import { Card, Flex } from '@ant-design/react-native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { CustomButton, FoodList } from './common';

const Menu = (props) => {

    let foodList = useSelector(state => state)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image style={{ height: 200 }} source={require('./Menu_Header.jpeg')} />
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    position: "absolute",
                    left:"72%",
                    top:"1%"
                }}>
                    <IconEvil name="share-apple" color="#fff" size={50}style={{marginRight:10}}/>
                    <IconFeather name="info" color="#fff" size={40} />
                </View>
                <Flex align="center" justify="center" >
                    <Card style={{ width: "90%", height: 200, marginTop: -100 }}>
                        <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Flex direction="column">
                                <Flex.Item flex={1.5}>
                                    <Text style={{ fontSize: 30 }}>Inka Restaurant</Text>
                                </Flex.Item>
                                <Flex.Item>
                                    <Text style={{ fontSize: 15 }}><Icon name="star-o" /> 5.0(200+) | All days : 09:00 AM - 06:00 PM</Text>
                                </Flex.Item>
                                <Flex.Item>
                                    <Text style={{ fontSize: 15 }}>Reach us at: 9237284793</Text>
                                </Flex.Item>
                                <Flex.Item>
                                    <CustomButton style={{ borderRadius: 10, position: "relative", bottom: 5 }} value={`Book A Table`} />
                                </Flex.Item>
                            </Flex>
                        </Card.Body>
                    </Card>
                </Flex>
                <FoodList listTitle={"Starter"} />
            </ScrollView>
            <CustomButton icon={"shopping-cart"} iconSize={20} iconColor={"#fff"} onPress={() => { props.navigation.navigate("Cart") }}
                value={`  View Cart (${foodList.reduce((a, b) => a + b.quantity, 0)})`} />
        </SafeAreaView >
    )
}

export default Menu;