import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

//Displays an image and its details
const ImageCard = (props) => {
    const { filename, author_url, author, format } = props.image;
    let imgSource = 'https://picsum.photos/500/500?' + filename;

    return (
        <View style={{height: 390}}>
            <Image style={styles.imageStyle} source={{ uri: imgSource }} /> 
            <View style={styles.imageDetailsStyle}>
                <TouchableOpacity onPress={() => Linking.openURL(imgSource)}>
                    <Text style={styles.textLinkStyle}>Download Image</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageDetailsStyle}>
                <TouchableOpacity onPress={() => Linking.openURL(author_url)}>
                    <Text style={styles.textLinkStyle}>Author: {author}</Text>
                </TouchableOpacity>
                <Text style={styles.textStyle}>Format: {format}</Text>
            </View>
        </View>
    );
};

const styles = {
    imageStyle: {
        width: null,
        flex: 1
    },
    textStyle: {
        alignItems: 'center',
        color: 'grey'
    },
    textLinkStyle: {
        alignItems: 'center',
        color: 'blue'
    },
    imageDetailsStyle: {
        marginTop: 10,
    }
};

export default ImageCard;