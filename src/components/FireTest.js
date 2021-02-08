/* eslint react/jsx-key: 0 */
import React from 'react'
import firebase from '../firebase'
import './FireTest.css'

class FireTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
      }

    componentDidMount() {
        const itemsRef = firebase.database().ref('users/user001/courses');
        itemsRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(Object.values(data));
            this.setState({
                items: Object.values(data),
                isLoaded: true
            });
          });
    }

  render() {
    const isLoaded = this.state.isLoaded;
    const listItems = <ul>{this.state.items.map(item => <li>{item.name}</li>)}</ul>
    const loadingAnimation = <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    return isLoaded ? listItems : loadingAnimation;
  }
}

export default FireTest;