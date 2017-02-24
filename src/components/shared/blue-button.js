import React from 'react';

const BlueSubmitButton = ({ children }) => {

    const styles = {
        backgroundColor: '#0000FF',
        color: '#FFFFFF',
        minWidth: 100,
        minHeight: 50
    };

    return (
        <button type="submit" style={styles}>{children}</button>
    );
};
BlueSubmitButton.propTypes = {
    children: React.PropTypes.string
};

export default BlueSubmitButton;
