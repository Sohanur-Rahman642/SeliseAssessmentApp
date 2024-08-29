import React, { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useFetchMenus } from '../hooks/useFetchMenus';
import { MenuResponse } from '../data/model/response/MenuResponse';
import { useCartViewModel } from '../hooks/useCartViewModel';



function Cart(): React.JSX.Element {
    const { loading, menus, error } = useFetchMenus()
    const { addItemToCart } = useCartViewModel()

    const [menuNmae, setMenuName] = useState<string>()

    const [description, setDescription] = useState<string>()

    const [price, setPrice] = useState<number>()

    const handleAddToCart = () => {
        addItemToCart({
            id: Math.random(),
            name: menuNmae,
            description: description,
            price: price
        })
    }



    const renderItem = ({ item }: { item: MenuResponse }) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.id}>{item.id}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        )
    }

    if (loading) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color='red' size='large' />
        </View>
    }

    if (error) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>{error}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={{ width: '400', height: 100 }}
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => setMenuName(text)}
                    value={menuNmae}
                    style={styles.input}
                    placeholder='name'
                />

                <TextInput
                    style={{ width: '400', height: 100 }}
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => setDescription(text)}
                    value={description}
                    style={styles.input}
                    placeholder='description'
                />

                <TextInput
                    style={{ width: '400', height: 100 }}
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => setPrice(text)}
                    value={price}
                    style={styles.input}
                    placeholder='price'
                />

                <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
                    <Text style={{ color: '#fff' }}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={menus}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },

    itemContainer: {
        marginVertical: 20
    },

    id: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    name: {
        fontStyle: 'italic',
        color: '#555',
        fontSize: 20,
    },
    description: {
        color: '#777',
        fontSize: 18,
    },

    price: {
        color: '#777',
        fontSize: 18,
    },

    cartBtn: { height: 100, width: '90%', marginHorizontal: 20, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' },

    input: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 20
    }
});

export default Cart;
