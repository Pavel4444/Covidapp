import React, { Component } from 'react';
import axios from 'axios';
import Hlavnicards from './Hlavnicards';
import Datatable from './Datatable';
import Charts from './Chart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';

class Api extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      global: [],
      date: [],
      chartdata: [],
      json: [],

    };
  }


  componentDidMount() {

    axios.get(`api/corona1`)
      .then(response => response.data)
      .then((data) => {
        this.setState({ json: data })

      })

    axios.get(`api/corona2`)
      .then(response => response.data)
      .then((data) => {
        this.setState({ countries: data.Countries })
        this.setState({ global: data.Global })
        this.setState({ date: data.Date })

      })


  }

  render() {



    return (

      <div class="p-grid">
        <div class="p-col-12" style={{ textAlign: 'center', backgroundColor: '#F1EEE6' }}><img src='https://i.imgur.com/RnJuZkX.png'></img></div>
        <div class="p-col-12"><Hlavnicards currentDate={this.state.date} summary={this.state.global} /></div>


        <div class="p-col-12">
          <div class="p-grid">
            <div class="p-col-6" style={{ textAlign: 'center' }}>
              <BarChart currentDate={this.state.date} summary={this.state.global} />

            </div>
            <div class="p-col-6" style={{ textAlign: 'center' }}>
              <DonutChart summary={this.state.global} />
            </div>
          </div>
        </div>
        <div class="p-col-12" style={{ textAlign: 'center' }}><Charts json={this.state.json} /></div>
        <div class="p-col-12"><Datatable summaryCountries={this.state.countries} /></div>
        <div class="p-col-12" style={{ textAlign: 'center', backgroundColor: '#F1EEE6' }}>Covid app using Primereact, C3, Spring</div>
      </div>




    );
  }
}

export default Api;