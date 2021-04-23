import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, TextInput, Platform, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../styles/colors';
import fonts from '../styles/fonts'

interface EnvironmentButtonProps extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnvironmentButton({
    title,
    active = false,
    ...rest

} : EnvironmentButtonProps) {
    return (
        <RectButton style={[
            styles.container, 
            active && styles.containerActive
        ]} 
            {...rest}>

            <Text style={[
                styles.text,
                active && styles.containerActive
        ]}>
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        height: 40,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight: 5, 
    },

    containerActive: {
        backgroundColor: colors.green_light
    },

    text:{
        color: colors.heading,
        fontFamily: fonts.text,
    },

    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
})