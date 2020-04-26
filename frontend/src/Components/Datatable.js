import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { Dialog } from 'primereact/dialog';
class Datatable extends Component {

    constructor() {
        super();
        this.state = {
            countries: [
                { field: "Country", header: "Country" },
                { field: "TotalConfirmed", header: 'Infected' },
                { field: "TotalDeaths", header: 'Deaths' },
                { field: "TotalRecovered", header: 'Recovered' }
            ],
            selectedColumns: []
        };
        this.onColumnToggle = this.onColumnToggle.bind(this);
        this.onCountrySelect = this.onCountrySelect.bind(this);


    }

    componentDidMount() {
        this.setState({ selectedColumns: this.state.countries });
    }

    onColumnToggle(event) {

        let selectedColumns = event.value;
        let orderedSelectedColumns = this.state.countries.filter(col => selectedColumns.includes(col));
        this.setState({ selectedColumns: orderedSelectedColumns });
    }

    onCountrySelect(e) {
        this.setState({
            displayDialog: true,
            country: Object.assign({}, e.data)
        });
    }


    render() {




        const { summaryCountries } = this.props;
        const header = (


            <div style={{ 'textAlign': 'center' }}>
                <h1>Country stats</h1>
                <i className="pi pi-search" style={{ margin: '4px 4px 0 0' }}></i>
                <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" Size="35" />
            </div>
        );

        const footer = (

            <div style={{ textAlign: 'center' }}>
                <MultiSelect value={this.state.selectedColumns} options={this.state.countries} optionLabel="header" onChange={this.onColumnToggle} style={{ width: '250px' }} />
            </div>
        );


        let dynamicColumns = this.state.selectedColumns.map((col) => {
            return <Column field={col.field} header={col.header} sortable={true} />;
        });


        return (

            <div>

                <DataTable
                    value={summaryCountries}
                    selectionMode="single"
                    selection={this.state.selectedCountry}
                    onSelectionChange={e => this.setState({ selectedCountry: e.value })}
                    onRowSelect={this.onCountrySelect}
                    header={header}
                    footer={footer}
                    paginator={true}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    rows={20}
                    rowsPerPageOptions={[20, 100]}
                    globalFilter={this.state.globalFilter}
                    emptyMessage="No records found">

                    {dynamicColumns}
                </DataTable>

                <div class="p-col-8">
                    <Dialog visible={this.state.displayDialog} header="Country Details" onHide={() => this.setState({ displayDialog: false })}>

                        {
                            this.state.country &&

                            <div>

                                <h1 style={{ textAlign: 'center' }}>24h stats for {this.state.country.Country}</h1>
                                <C3Chart

                                    axis={{
                                        x: {
                                            type: 'category',

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

                                    }}


                                    data={this.state.dat = {
                                        json:
                                            [this.state.country]


                                        ,

                                        keys: {

                                            x: 'Date',
                                            value: ['NewConfirmed', 'NewDeaths', 'NewRecovered']
                                        },
                                        names: {
                                            NewConfirmed: '24 hours infected',
                                            NewDeaths: '24 hours deaths',
                                            NewRecovered: '24 hours recovered'

                                        },

                                        type: 'bar',

                                        colors: {
                                            NewConfirmed: '#ff6666',
                                            NewDeaths: '#8f8f8f',
                                            NewRecovered: '#60eb83',

                                        },


                                    }

                                    } />

                                <h1 style={{ textAlign: 'center' }}>Total stats for {this.state.country.Country}</h1>
                                <C3Chart

                                    axis={{
                                        x: {
                                            type: 'category',

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

                                    }}
                                    data={this.state.dat = {
                                        json:
                                            [this.state.country]


                                        ,

                                        keys: {

                                            x: 'Date',
                                            value: ['TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
                                        },
                                        names: {
                                            TotalConfirmed: 'Total infected',
                                            TotalDeaths: 'Total deaths',
                                            TotalRecovered: 'Total recovered'

                                        },

                                        type: 'bar',

                                        colors: {
                                            TotalConfirmed: '#ff6666',
                                            TotalDeaths: '#8f8f8f',
                                            TotalRecovered: '#60eb83',

                                        },


                                    }

                                    } />


                            </div>

                        }

                    </Dialog>
                </div>
            </div>
        );
    }
}

export default Datatable;