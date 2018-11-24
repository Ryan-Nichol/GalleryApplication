import React from 'react';
import { Text, View } from 'react-native';

//Displays the header of the application
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    
    viewStyle: {
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        height: 80,
        elevation: 3,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

};

//Make the component available to other parts of the app
export default Header;