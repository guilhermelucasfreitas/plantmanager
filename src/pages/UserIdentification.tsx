import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, TextInput, Platform } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native';

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setFillied] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
        setFillied(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setFillied(!!value);
        setName(value);
    }

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>

                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled? '😁' : '😊'}
                            </Text>
                            <Text style={styles.title}>Como podemos {'\n'} chamar você?</Text>
                        </View>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange} />

                        <View style={styles.footer}>
                            <Button
                                title = "Confirmar"
                                onPress = {handleSubmit}
                            />
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
        width: '100%'
    },

    header: {
        alignItems: 'center',
    },

    emoji: {
        fontSize: 44

    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },

    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20,
    },


})