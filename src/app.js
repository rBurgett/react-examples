import React from 'react';
import uuid from 'node-uuid';
import swal from 'sweetalert';

import BlueSubmitButton from './components/shared/blue-button';
import Title from './components/shared/title.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: uuid.v4(),
                    value: 'apples'
                }, {
                    id: uuid.v4(),
                    value: 'bananas'
                }, {
                    id: uuid.v4(),
                    value: 'kiwis'
                }
            ],
            inputValue: ''
        };
        this.itemClicked = this.itemClicked.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        this.formSubmitted = this.formSubmitted.bind(this);
    }

    itemClicked(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.innerHTML);

        const itemText = e.target.innerHTML;
        swal({
            title: 'Are you really, really sure?',
            text: 'Are you sure want to remove ' + itemText + ' from the list?',
            type: 'warning',
            showCancelButton: true,
            //confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I hate ' + itemText +'!',
            closeOnConfirm: true
        }, () => this.setState({
            ...this.state,
            items: this.state.items.filter(({value}) => value !== itemText)
        }));
    }

    inputChanged(e) {
        e.preventDefault();
        const {
            value = ''
        } = e.target;
        this.setState({
            ...this.state,
            inputValue: value
        });
    }

    formSubmitted(e) {
        e.preventDefault();
        const {items, inputValue} = this.state;
        if (!inputValue) {
            alert('Hey! You need an input value!');
            return;
        }
        this.setState({
            ...this.state,
            items: [
                ...items, {
                    id: uuid.v4(),
                    value: inputValue
                }
            ],
            inputValue: ''
        });
    }

    render() {

        const styles = {
            buttonContainer: {
                marginTop: 10
            }
        };

        const {itemClicked, inputChanged, formSubmitted} = this;
        const {items, inputValue} = this.state;

        const listItems = items.map(({value: fruit, id}) => <li key={`${id}`}>{fruit}</li>);
        console.log('listItems', listItems);

        return (
            <form onSubmit={formSubmitted}>
                <Title style={styles.heading}>{'Hi!'}</Title>
                <ul onClick={itemClicked}>
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
