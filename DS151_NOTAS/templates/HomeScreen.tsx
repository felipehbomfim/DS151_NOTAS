import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import TouchID from 'react-native-touch-id';

function HomeScreen() {
    const [supported, setSupported] = useState(null);

    useEffect(() => {
        TouchID.isSupported()
        .then(sucesso => {
           console.log("TouchID habilitado")
           setSupported(true);
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const authenticateWithTouchID = () => {
        const configs = {
            title: 'Autenticacao TouchID',
            color: '#FF0000',
            sensorErrorDescription: 'TouchID invalido'
        }
        TouchID.authenticate('Autenticar com impressão digital', configs)
         .then(() => {
           navigation.navigate('Autenticado');
         })
         .catch(error => {
           console.log('Autenticação falhou', error);
         });
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Galeria')}>
                <Text style={styles.buttonText}>IR PARA GALERIA!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Counter')}
            >
                <Text style={styles.buttonText}>IR PARA COUNTER!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Calculo de Médias')}
            >
                <Text style={styles.buttonText}>IR PARA CALCULO DE MEDIAS!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ColorList')}
            >
                <Text style={styles.buttonText}>IR PARA COLORLIST</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={authenticateWithTouchID}
            >
                <Text style={styles.buttonText}>AUTENTICAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeScreen;