import React from 'react';
import { Button, Popup, Picker, CityPicker, Form, FormCell, CellBody, CellHeader, Label, Input } from '../../../src/index';
import Page from '../../component/page';
import cnCity from './cnCity';

class PickerDemo extends React.Component {

    state = {
        picker_show: false,
        picker_value: '',
        picker_group: [
            {
                items: [
                    {
                        label: 'Item1'
                    },
                    {
                        label: 'Item2'
                    },
                    {
                        label: 'Item3'
                    },
                    {
                        label: 'Item4'
                    },
                    {
                        label: 'Item5'
                    }
                ]
            }
        ],
        city_show: false,
        city_value: ''
    };

    hide(){
        this.setState({
            picker_show: false,
            city_show: false
        })
    }

    render() {
        return (
            <Page className="picker" title="Picker" subTitle="多列选择器" >
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>City</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text"
                                value={this.state.city_value}
                                onClick={ e=> {
                                    e.preventDefault();
                                    this.setState({city_show: true})
                                }}
                                placeholder="Chose Your City"
                            />
                        </CellBody>
                    </FormCell>
                </Form>
                <Popup
                    show={this.state.city_show}
                    onRequestClose={e=>this.setState({city_show: false})}
                >
                    <CityPicker
                        data={cnCity}
                        onCancel={e=>this.setState({city_show: false})}
                        onChange={text=>this.setState({city_value: text, city_show: false})}
                    />
                </Popup>


                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>Direct Picker</Label>
                        </CellHeader>
                        <CellBody>
                            <Input
                                type="text"
                                onClick={e=>{
                                    e.preventDefault()
                                    this.setState({picker_show: true})
                                }}
                                placeholder="Pick a item"
                                value={this.state.picker_value}
                            />
                        </CellBody>
                    </FormCell>
                </Form>

                <Popup
                    show={this.state.picker_show}
                    onRequestClose={e=>this.setState({picker_show: false})}
                >
                    <Picker
                        onChange={selected=>{
                            let value = ''
                            selected.forEach( (s, i)=> {
                                value = this.state.picker_group[i]['items'][s].label
                            })
                            this.setState({
                                picker_value: value
                            })
                        }}
                        groups={this.state.picker_group}
                    />
                </Popup>

                <br/>

            </Page>
        );
    }
};
export default PickerDemo;