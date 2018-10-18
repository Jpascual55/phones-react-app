import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhonesList from './components/phonesList';
import PhoneDetail from './components/phoneDetail';
import { getPhones } from './services/phonesService';

class App extends Component {
    state = {
        phones: [],
        selectedPhone: {}
    };

    async componentDidMount() {
        await this.populatePhones();
    }

    async populatePhones() {
        const phones = await getPhones();
        this.setState({ phones: phones.data });
        this.setState({ selectedPhone: phones.data[0] });
    }

    selectPhone = phone => {
        this.setState({ selectedPhone: phone });
    };
    render() {
        return (
            <div className="container-fluid">
                <header>
                    <h1>Phones List</h1>
                </header>
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-3 mb-3">
                        <PhonesList
                            onSelect={this.selectPhone}
                            phones={this.state.phones}
                            selectedPhone={this.state.selectedPhone}
                        />
                    </div>
                    <div className="col">
                        <PhoneDetail value={this.state.selectedPhone} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
