import React, { Component } from 'react';

export class MyDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }
    componentDidMount() {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        let data1 = data;
        console.log(data1.data.Name);

        console.log(data1.Name);
        this.setState({ name: data1.data.Name })
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 btn btn-info">
                        Welcome to MyDashBoard
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        Weclcome: {this.state.name}
                    </div>
                    <div className="col-sm-9"></div>
                </div>
            </div>
        );
    }
}

export default MyDashBoard;