import React from 'react';

const Title = ({children}) => {

    const styles = {
        color: '#FF0000',
        fontFamily: 'sans-serif',
        fontSize: 12
    };

    return (
        <h1 style={styles}>{children}</h1>
    );
};
Title.propTypes = {
    children: React.PropTypes.string
};

export default Title;
