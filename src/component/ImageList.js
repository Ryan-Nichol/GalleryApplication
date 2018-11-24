import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import ImageCard from './ImageCard';
import LoadingCard from './LoadingCard';
import Button from './Button';

class ImageList extends Component {
    state = { images: [], index: 0, isLoading: true};
    
    //When the component is displayed to the screen, it will begin fetching the photos 
    //from https://picsum.photos/list and store them in images
    componentWillMount() {
        fetch('https://picsum.photos/list')
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({ images: responseData, isLoading: false });
        });
    }

    //Goes to the next image in the gallery
    _gotoNextImage(){
        const { images, index } = this.state;

        if (index < images.length-1){
            this.setState({ index: index + 1 })
        } else {
            this.setState({ index: 0 })
        }
    }

    //Goes to the previous image in the gallery
    _gotoPreviousImage() {
        const { images, index } = this.state;

        if (index > 0){
            this.setState({ index: index - 1 })
        } else {
            this.setState({ index: images.length - 1 })
        }
    }

    //Renders all componentes to the screen
    render() {
        const { images, index, isLoading } = this.state;
        let displayImage; //Displays the image or the loading image
        let imageNumber; //Displays the current image index number

        //Check if application is still loading images
        if (!isLoading){
            displayImage = <ImageCard image={images[index]} />
            imageNumber = <Text style={styles.indexText}>{index} / {images.length-1}</Text>
        } else {
            displayImage = <LoadingCard />
            imageNumber = <Text style={styles.indexText}>No images to be displayed</Text>
        }

        return (
            <View>
                <Card>
                    <CardSection>{imageNumber}</CardSection>
                    <CardSection style={{flex: 1}}>{displayImage}</CardSection>
                </Card>
                <CardSection>
                    <View style={{flexDirection: 'row'}}>
                        <Button text='Previous' onPress={this._gotoPreviousImage.bind(this)}  />
                        <Button text='Next' onPress={this._gotoNextImage.bind(this)} />
                    </View>
                </CardSection>
            </View>
        );
    }

}

const styles = {
    indexText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: null,
      }
};

export default ImageList;