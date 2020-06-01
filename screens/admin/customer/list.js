import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import faker from 'faker'

const List = () => {

    var customer = [];
    for (let i = 0; i < 5; i++) {
        var data = {
            name: faker.name.findName(),
            position: faker.name.jobTitle(),
            image: faker.image.avatar()
        }
        customer.push(data);
    }

    return (
        <Card style={Styles.card}>
            <View style={Styles.content}>
                <Image
                    style={Styles.image}
                    source={{ uri: customer[0].image }}
                />
                <View style={Styles.info}>
                    <Text style={Styles.name}> {customer[0].name} </Text>
                    <Text style={Styles.position}> {customer[0].position} </Text>
                </View>
            </View>
        </Card>
    )
}

const Styles = StyleSheet.create({
    card: {
        margin: 2,
        padding: 5,
        borderRadius: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2
    },
    content: {
        flexDirection: 'row'
    },
    info: {
        padding: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    position: {
        fontStyle: 'italic',
        fontSize: 14
    }
})

export default List;