import React, { Component } from 'react';
import { Card } from 'primereact/card';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    };

    render() {

        return (

            <Card title="Global stats - line chart">
                 
                <C3Chart axis={{
                    x: {
                        type: 'timeseries',
                        label: {
                            text: 'Date',
                            position: 'outer-center'
                        }
                    },
                    y: {
                        label: {
                            text: 'Number of people',
                            position: 'outer-middle'
                        }
                    },

                }} data={this.state.dat = {
                    json: this.props.json,

                    keys: {
                        x: 'reportDate',

                        value: ['totalConfirmed', 'deaths.total']
                    },
                    names: {
                        totalConfirmed: 'Infected',
                        'deaths.total': 'Deaths'

                    },
                    types: {
                        totalConfirmed: 'area-spline',
                        'deaths.total': 'area-spline'

                    },
                    colors: {
                        totalConfirmed: '#ff6666',
                        'deaths.total': '#8f8f8f',

                    },
                    zoom: {
                        enabled: true
                    }

                }} />

            </Card>

        );
    }
}

export default Charts;