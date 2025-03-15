import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import busStops from '../../assets/bus_stops.json';
import { Searchbar } from 'react-native-paper';
import { SEARCHBAR_PLACEHOLDER } from '@src/constants';
import { filterBusStops } from '@src/utils';

type AllStopsScreenProps = {
    navigation: any;
};

const AllStopsScreen: React.FC<AllStopsScreenProps> = ({ navigation }) => {
    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => filterBusStops(busStops, search), [search]);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('Home', { stop_id: item.id })}>
                        <Text style={styles.stop_name}>{item.stop_name}</Text>
                    </Pressable>
                )}
                keyExtractor={item => item.id.toString()}
                initialNumToRender={15}
                keyboardShouldPersistTaps="always"
                ListHeaderComponent={
                    <Searchbar
                        placeholder={SEARCHBAR_PLACEHOLDER}
                        value={search}
                        onChangeText={setSearch}
                        inputStyle={styles.inputTxt}
                    />
                }
                stickyHeaderIndices={[0]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003052',
    },
    stop_name: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto',
        padding: 10,
    },
    btn: {
        paddingVertical: 15,
        borderBottomColor: '#001C2F',
        borderBottomWidth: 2,
        alignItems: 'center',
    },
    inputTxt: {
        fontFamily: 'Roboto',
        fontSize: 18,
    },
});

export default AllStopsScreen;
