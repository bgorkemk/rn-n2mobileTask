import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AppStyles from '../../styles/AppStyles';

const {
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    BORDER_RADIUS,
    GREEN_COLOR_FULL,
    BUTTON_ORANGE_COLOR
} = AppStyles

@inject('MapStore')
@observer
export default class MarkerInfo extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { markerContainer, markerLeft, markerRight, textStyle } = styles;

        return (
            <TouchableOpacity
                touchSoundDisabled={true}
                onPress={this.props.navigateToMarker}
                style={markerContainer}
            >
                <View style={markerLeft}>
                    <Text style={textStyle}>{this.props.id}</Text>
                </View>
                <View style={{ flex: 0.5 }}></View>
                <View style={markerRight}>
                    <Text style={textStyle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    markerContainer: {
        flexDirection: 'row',
        width: WINDOW_WIDTH - 10,
        marginLeft: 5,
        height: WINDOW_HEIGHT / 16,
        marginTop: 20
    },
    markerLeft: {
        flex: 1,
        borderRadius: BORDER_RADIUS * 2,
        backgroundColor: GREEN_COLOR_FULL,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    markerRight: {
        flex: 8,
        paddingLeft: 15,
        borderRadius: BORDER_RADIUS,
        backgroundColor: BUTTON_ORANGE_COLOR,
        alignItems: 'flex-start',
        alignContent: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    }
})
