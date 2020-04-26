import React, { Component } from 'react';
import { Card } from 'primereact/card';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class BarChart extends Component {

    constructor(props) {
        super(props);
   
        this.state = {
            
        };

    };


    render() {

        console.log(this.props.summary);
        
        return (
                      

                    <Card title="Global stats - bar chart">

                    <C3Chart 
                    
                    
                    axis={{
                        y: {
                            label: {
                                text: 'Number of people',
                                position: 'outer-middle'
                            }
                        },

                    }}                   
                    
                    data={this.state.dat = {
                        json:[this.props.summary],
                        
                            keys: {
                              
                               
                                value: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
                            },
                            names: {
                                TotalConfirmed: 'Infected',
                                TotalDeaths: 'Deaths',
                                TotalRecovered: 'Recovered'
                
                            },

                            type: 'bar' ,

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

export default BarChart;