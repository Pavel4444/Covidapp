import React, { Component } from 'react';
import { Card } from 'primereact/card';

class Hlavnicards extends Component {


    render() {
        const { currentDate, summary } = this.props;

        return (

            <div class="p-grid">

                <div class="p-col-4" style={{ textAlign: 'center' }}>

                    <Card title="Infected" subTitle={summary.TotalConfirmed} style={{ backgroundColor: '#ff6666' }}  >
                        {new Date(currentDate).toDateString()}
                    </Card>

                </div>
                <div class="p-col-4" style={{ textAlign: 'center' }}>
                    <Card title="Deaths" subTitle={summary.TotalDeaths} style={{ backgroundColor: '#8f8f8f' }} >
                        {new Date(currentDate).toDateString()}
                    </Card>

                </div>
                <div class="p-col-4" style={{ textAlign: 'center' }}>

                    <Card title="Recovered" subTitle={summary.TotalRecovered} style={{ backgroundColor: '#60eb83' }} >
                        {new Date(currentDate).toDateString()}
                    </Card>

                </div>
            </div>

        );
    }
}

export default Hlavnicards;