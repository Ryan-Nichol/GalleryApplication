import React from 'react';
import { View } from 'react-native';

//Sole purpose to style children inside of this component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderColor: '#ddd'
    }
};

export default CardSection;
