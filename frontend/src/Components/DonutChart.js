import React, { Component } from 'react';
import { Card } from 'primereact/card';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class DonutChart extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    };


    render() {

        return (

            <Card title="Global stats - donut chart">

                <C3Chart data={this.state.dat = {
                    json:
                        [this.props.summary]
                    ,
                    keys: {
                        value: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
                    },
                    names: {
                        TotalConfirmed: 'Infected',
                        TotalDeaths: 'Deaths',
                        TotalRecovered: 'TotalRecovered'
                    },
                    type: 'donut',
                    colors: {
                        TotalConfirmed: '#ff6666',
                        TotalDeaths: '#8f8f8f',
                        TotalRecovered: '#60eb83'
                    },
                }} />

            </Card>

        );
    }
}

export default DonutChart;