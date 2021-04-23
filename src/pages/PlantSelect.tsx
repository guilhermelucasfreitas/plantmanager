import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';
import { Header } from '../components/Header'
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { EnvironmentButton } from '../components/EnvironmentButton';

interface EnvironmentsProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about:string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
}

export function PlantSelect() {

    const [environments, setEnvironments] = useState<EnvironmentsProps[]>();
    const [plants, setPlants] = useState<PlantProps[]>();

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }
        fetchEnviroment();   
    }, [])

    useEffect(() => {
        async function fetchPlants(){
            const { data } = await api.get('plants');
            setPlants([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }
        fetchPlants();   
    }, [])

    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Header></Header>

                <Text style={styles.title}>Em qual ambiente</Text>

                <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
            </View>

            <View>
                <FlatList 
                data={environments}
                renderItem = {( {item} ) => (
                    <EnvironmentButton title={item.title} />
                    )}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={styles.environmentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={plants}
                    renderItem={({ item }) => (
                       <PlantCardPrimary data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
                
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    header: {
        paddingHorizontal: 30
    },

    title: {
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15
    },

    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },

    environmentList: {
        height: 40,
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32,
        paddingRight: 50 
    },

    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },


})