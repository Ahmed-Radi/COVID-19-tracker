import React from 'react';

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import { fetchDate } from './api' // will search for index file automatic
class App extends React.Component {
    async componentDidMount() { // In the normal way we put "async" before the function name
        const data = await fetchDate();
        console.log(data)
    }
    render() {
        return(
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    };
}


export default App;