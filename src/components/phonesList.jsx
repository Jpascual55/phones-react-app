import React, { Component } from 'react';

class PhonesList extends Component {
    getListItemClasses = phone => {
        let listItemClasses = 'list-group-item list-group-item-action ';
        listItemClasses +=
            this.props.selectedPhone.id === phone.id ? 'active' : '';
        return listItemClasses;
    };

    render() {
        return (
            <div className="list-group">
                {this.props.phones.map(phone => (
                    <button
                        onClick={() => this.props.onSelect(phone)}
                        className={this.getListItemClasses(phone)}
                        key={phone.id}
                    >
                        {phone.name}
                    </button>
                ))}
            </div>
        );
    }
}

export default PhonesList;
