import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import faker from 'faker'

const card = (customer) => {
    return (
        // <Card style={styles.card} key={customer.id}>
        <Card style={styles.card}>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={{ uri: customer.image }}
                />
                <View style={styles.info}>
                    <Text style={styles.name}> {customer.name} </Text>
                    <Text style={styles.position}> {customer.position} </Text>
                </View>
            </View>
        </Card>
    )
}

const renderCustomerListUsingFlatlist = (customer) => {
    return (
        <FlatList
            data={customer}
            renderItem={({ item }) => {
                return card(item);
            }}
            keyExtractor={(item) => (item.id).toString()}
        />
    )
}

const renderCustomerListUsingMapping = (customer) => {
    return customer.map((item) => {
        return card(item);
    })
}

const List = () => {
    var customer = new Array;
    for (let i = 0; i < 5; i++) {
        var data = {
            id: i,
            name: faker.name.findName(),
            position: faker.name.jobTitle(),
            image: faker.image.avatar()
        }
        customer.push(data);
    }
    return renderCustomerListUsingFlatlist(customer);
}

const styles = StyleSheet.create({
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