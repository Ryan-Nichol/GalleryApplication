import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

//Displays the loading image
const LoadingCard = (props) => {
    return (
        <View style={styles.imageStyle}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={{ paddingTop: 30 }}>Loading Images</Text>
        </View>
    );
};

const styles = {
    imageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 390
    }
};

export default LoadingCard;