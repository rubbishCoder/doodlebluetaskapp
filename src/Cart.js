import { Card, Flex } from '@ant-design/react-native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './actions';
import { CustomButton, FoodList } from './common';
import { navyBlueColor, yellowColor } from './Colors';

const Cart = (props) => {

    let foodList = useSelector(state => state);
    
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Flex align="center" justify="center" style={{ backgroundColor: navyBlueColor, height: 300, width: "100%" }}>
                <Card style={{ width: "50%", height: "30%" }}>
                    <Card.Body style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Flex direction="column">
                            <Flex.Item >
                                <Text style={{ fontSize: 16, color: yellowColor }}>Total Cost</Text>
                            </Flex.Item>
                            <Flex.Item>
                                <Text style={{ fontSize: 25 }}>{`€ ${foodList.reduce((a, b) => a + (b.quantity * b.cost), 0)}`}</Text>
                            </Flex.Item>
                        </Flex>
                    </Card.Body>
                </Card>
            </Flex>
            <FoodList conditionalView quantityBased listTitle={"Review Order"}/>
            <View>
                <CustomButton onPress={() => {
                    dispatch(reset());
                    props.navigation.navigate("Menu");
                    alert("Order Placed");
                }} value={`Place Order`} />
            </View>
        </SafeAreaView >
    )
}

export default Cart;