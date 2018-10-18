import React, { Component } from 'react';

class PhoneDetail extends Component {
    render() {
        return (
            <div className="card pt-2">
                <img
                    style={{ maxWidth: 200 }}
                    className="card-img-top rounded mx-auto d-block"
                    src={this.props.value.img}
                    alt="mobilePhoto"
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.value.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {this.props.value.brand}
                    </li>
                    <li className="list-group-item">
                        {this.props.value.color}
                    </li>
                </ul>
                <div className="card-body">
                    <span>
                        <b>{this.props.value.price}</b> €
                    </span>
                </div>
            </div>
        );
    }
}

export default PhoneDetail;
