import { Button, Flex } from '@ant-design/react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './actions';
import { navyBlueColor, yellowColor } from './Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CustomButton = (props) => {
    const customStyles = props.style ? props.style : {}
    return (
        <Button disabled={props.disabled} onPress={props.onPress} style={{ backgroundColor: navyBlueColor, display: "flex", flexDirection: "row", ...customStyles }}>
            {props.icon && <Icon name={props.icon} size={props.iconSize} color={props.iconColor} />}
            <Text style={{ color: "#fff", marginLeft: props.icon ? 30 : 0 }}>{props.value}</Text>
        </Button>)
}

export const Counter = (props) => {
    let buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 25,
        height: 25,

    }
    return (
        <View style={{
            display: "flex", flexDirection: "row", borderWidth: 1,
            borderColor: yellowColor
        }}>
            <TouchableOpacity onPress={props.onDecrement} style={{ ...buttonStyle }}>
                <Text style={{ fontSize: 20 }}>-</Text>
            </TouchableOpacity>
            <View style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 25
            }}>
                <Text>{props.value ? props.value : 0}</Text>
            </View>
            <TouchableOpacity onPress={props.onIncrement} style={{ ...buttonStyle }} Î>
                <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
        </View>)
}

export const FoodList = (props) => {

    let { conditionalView = false, quantityBased = false, listTitle = null } = props;

    let [showAll, setShowAll] = useState(conditionalView ? false : true);

    const dispatch = useDispatch()

    let foodList = useSelector(state => state)

    if (quantityBased) {
        foodList = foodList.filter(d => d.quantity > 0);
    }

    const ShowText = (ShowTextProps) =>
        <TouchableOpacity onPress={ShowTextProps.onPress}
            style={{
                alignSelf: "flex-end", marginRight: 10, marginTop: 10
            }}>
            <Text style={{ color: navyBlueColor, fontSize: 18 }}>{ShowTextProps.text}</Text>
        </TouchableOpacity>

    return (<>
        {listTitle && foodList.length > 0 && <Text style={{
            position: "relative", marginLeft: 10, marginTop: 20,
            color: navyBlueColor,
            fontSize: 20,
            marginBottom: 20,
            marginLeft: 8,
            fontWeight: "bold"
        }} >{listTitle}</Text>}
        {foodList.length > 0 && <ScrollView >
            {foodList.length > 0 && foodList.slice(0, showAll ? foodList.length : 2).map((data, i) =>
                <Flex key={i} style={{ marginLeft: 5, height: 80, borderBottomColor: "grey", borderBottomWidth: i !== foodList.length - 1 ? 1 : 0, width: "98%" }}>
                    <Flex.Item flex={3}>
                        <Text style={{ color: "gray", fontSize: 20 }}> {data.itemName}  </Text>
                        <Text style={{ color: "gray", fontSize: 14, marginLeft: 3 }}> {data.description}  </Text>
                        <Text style={{ color: yellowColor, fontSize: 20 }}> {`€ ${data.cost}`}  </Text>
                    </Flex.Item>
                    <Flex.Item flex={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {data.quantity === 0 ?
                            <CustomButton style={{ height: 30 }} value={"Add"} onPress={() => { dispatch(addItem(data.id)) }} />
                            : <Counter max={20} value={data.quantity}
                                onDecrement={() => { dispatch(removeItem(data.id)) }}
                                onIncrement={() => { dispatch(addItem(data.id)) }}
                                buttonStyle={{ borerWidth: 1, borderColor: yellowColor }}
                                buttonTextStyle={{ color: yellowColor, width: 8 }} />}
                    </Flex.Item>
                </Flex>
            )}
            {conditionalView && foodList.length > 2 && (
                showAll ?
                    <ShowText text={"Show Less"}
                        onPress={() => { setShowAll(false) }} />
                    :
                    <ShowText text={"Show More"}
                        onPress={() => { setShowAll(true) }} />
            )}
        </ScrollView>}
        {foodList.length === 0 && <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ color: navyBlueColor, fontSize: 25 }}>Cart is empty</Text>
        </View>}
    </>)
}