/* eslint no-alert:0 */

import React from 'react';

import BlueSubmitButton from './components/shared/blue-button';

const Title = ({ greeting }) => {
    return (
        <h1>{greeting}</h1>
    );
};
Title.propTypes = {
    greeting: React.PropTypes.string
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'apples',
                'bananas',
                'kiwis'
            ],
            inputValue: ''
        };
        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }

    inputChanged(e) {
        e.preventDefault();
        const { value = '' } = e.target;
        this.setState({
            ...this.state,
            inputValue: value
        });
    }

    formSubmitted(e) {
        e.preventDefault();
        const { items, inputValue } = this.state;
        if(!inputValue) {
            alert('Hey! You need an input value!');
            return;
        }
        this.setState({
            ...this.state,
            items: [...items, inputValue],
            inputValue: ''
        });
    }

    render () {

        const styles = {
            heading: {
                color: '#FF0000',
                fontFamily: 'sans-serif',
                fontSize: 12
            },
            buttonContainer: {
                marginTop: 10
            }
        };

        const { inputChanged, formSubmitted } = this;
        const { items, inputValue } = this.state;

        const listItems = items
            .map((fruit, idx) => <li key={`items${idx}`}>{fruit}</li>);

        return (
            <form onSubmit={formSubmitted}>
                <h1 style={styles.heading}>Hi!</h1>
                <ul>
                    {listItems}
                </ul>
                <input type="text" value={inputValue} onChange={inputChanged}></input>
                <div style={styles.buttonContainer}>
                    <BlueSubmitButton>{'Add!'}</BlueSubmitButton>
                </div>
            </form>
        );
    }

}

export default App;
