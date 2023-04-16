import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const images = [
    { id: '1', uri: 'https://s2.glbimg.com/_fi6Z5P7AGZya-fdftAhZnCdbnw=/0x0:1024x1024/430x432/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/e/8/AoMju0TPWBvwkfwj2BXA/1.jpg' },
    { id: '2', uri: 'https://s2.glbimg.com/W5UaEo-JxikzOK--JCwK_Nd_P3g=/0x0:1024x1024/216x215/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/Z/g/HLIVYbQyyCwSJ2cxlnhQ/2.png' },
    { id: '3', uri: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/04/super_mario_bros_filme_critica__fa43su9mh-1210x544.jpg' },
    { id: '4', uri: 'https://img.olhardigital.com.br/wp-content/uploads/2023/02/super-mario-bros-o-filme.jpg' },
    { id: '5', uri: 'https://i0.statig.com.br/bancodeimagens/ax/hp/ob/axhpob9hsdl8ld5w4i510h93j.jpg' },
    { id: '6', uri: 'https://img.olhardigital.com.br/wp-content/uploads/2022/10/super-mario-trailer3.jpg' },
    { id: '7', uri: 'https://i.pinimg.com/originals/c6/2e/97/c62e97f5214e95b59c7783dd64fcec3f.png' },
    { id: '8', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4B57zecvZLR1HREe05DnostwJQfMZU_x-ow&usqp=CAU' },
    { id: '9', uri: 'https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/898b1dbd-a62d-11ed-aa6e-9587410378a2/super-mario.jpg' },
    { id: '10', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdROGcBfoftDUhSxu9LgauBnXsibbQxpYC4A&usqp=CAU' },
];

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item.uri)}>
            <Image style={styles.image} source={{ uri: item.uri }} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={4}
            />
            <Modal visible={selectedImage !== null} transparent>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedImage(null)}>
                        <Image source={require('../assets/close_button.png')} style={styles.closeIcon} />
                    </TouchableOpacity>
                    <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 97,
        height: 100,
        margin: 5,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        right: 20,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    selectedImage: {
        width: '80%',
        height: '80%',
    },
});

export default Galeria;
