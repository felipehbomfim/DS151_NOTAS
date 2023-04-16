import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

class ColorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                { id: 1, name: 'Vermelho', value: '#FF0000' },
                { id: 2, name: 'Verde', value: '#00FF00' },
                { id: 3, name: 'Azul', value: '#0000FF' },
            ],
            nextId: 4,
        };
    }

    addColor = () => {
        const { colors, nextId } = this.state;
        const newColor = { id: nextId, name: `Color ${nextId}`, value: this.getRandomColor() };
        this.setState({ colors: [...colors, newColor], nextId: nextId + 1 });
    };

    getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    renderItem = ({ item }) => {
        return (
            <View style={{ backgroundColor: item.value, padding: 16 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>{item.name}</Text>
            </View>
        );
    };

    render() {
        const { colors } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={colors}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
                <TouchableOpacity onPress={this.addColor} style={{ backgroundColor: 'grey', padding: 16, bottom: 25 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>ADICIONAR COR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ColorList;