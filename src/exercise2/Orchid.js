import React from 'react';
import PropTypes from 'prop-types';

export default class Orchid extends React.Component {
    static propTypes = {
        borderColor: PropTypes.string.isRequired
    };

    render() {        
        const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';
        const {borderColor} = this.props;

        return (
            <div >
                <img
                    borderColor={borderColor}
                    src={orchidImageUrl}
                    alt='test' />
            </div>
        )
    }
}
