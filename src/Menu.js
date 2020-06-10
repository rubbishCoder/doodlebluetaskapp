import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Flex } from '@ant-design/react-native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomButton, FoodList } from './common';
const Menu = (props) => {

    let foodList = useSelector(state => state)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Image style={{ height: 200 }} source={require('./Menu_Header.jpeg')} />
                <Flex align="center" justify="center" >
                    <Card style={{ width: "90%", height: 200, marginTop: -100 }}>
                        <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Flex direction="column">
                                <Flex.Item flex={1.5}>
                                    <Text style={{ fontSize: 30 }}>Inka Restaurant</Text>
                                </Flex.Item>
                                <Flex.Item>
                                    <Text style={{ fontSize: 15 }}>5.0(200+) | All days : 09:00 AM - 06:00 PM</Text>
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
            <CustomButton onPress={() => { props.navigation.navigate("Cart") }} value={`${<ShoppingCartOutlined />}View Cart (${foodList.reduce((a, b) => a + b.quantity, 0)})`} />
        </SafeAreaView >
    )
}

export default Menu;