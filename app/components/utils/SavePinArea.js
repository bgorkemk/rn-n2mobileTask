import { inject, observer } from 'mobx-react';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Keyboard } from 'react-native'
import ButtonArea from './ButtonArea';
import TextInputArea from './TextInputArea'

@inject('MapStore')
@observer
export class SavePinArea extends Component {
    render() {
        const { container } = styles
        return (
            <View style={container}>
                <TextInputArea placeholder="Marker adı giriniz." value=""></TextInputArea>
                <ButtonArea buttonText="Kaydet!" onPressFunction={() => {

                    // ------toAddWithoutDbLocal-----
                    //this.props.MapStore.addTemporaryMarkerToCollection(this.props.MapStore.temporaryMarker)
                    // ------/toAddWithoutDbLocal-----

                    this.props.MapStore.saveMarkerToUser(this.props.MapStore.temporaryMarker)
                    Keyboard.dismiss();


                    // TODO refactor it to a function, in mapstore same in MapScreen.js
                    if (this.props.MapStore.markerSet || !this.props.MapStore.markerSet) {
                        this.props.MapStore.changeMarkerSet(!this.props.MapStore.markerSet);
                    }
                }}>
                </ButtonArea>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 50
    }
})

export default SavePinArea
