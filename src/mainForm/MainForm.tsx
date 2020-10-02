import React from 'react';
import { Layout, Popconfirm,  Button, message, Form, Input, Select, Row, Col,  DatePicker, Divider } from 'antd';
import '../App.css';

const { Option } = Select;

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const text = 'All data entered will be lost. Are you sure you want to reset now ?';

const style = { padding: '8px 10px' };
const font12 = { fontSize: '12px' };

const { Header, Footer, Sider, Content } = Layout;

export default class MainForm extends React.Component<{}, { current: any, firstStep: any, secondStep: any,showElective: boolean }> {
    formRef: React.RefObject<any>;
    constructor(props: any) {
        super(props);
        this.state = {
            current: 0,
            firstStep: {},
            secondStep: {},
            showElective: false
        };
        this.formRef = React.createRef();
    }
    onValueChange = (evt:any)=> {
        console.info(evt);
        if(evt==='class2') {
            this.setState ({
                showElective: true
            })
        }
        
    }
    onFinish = (values: any) => {
        console.log(values);
        console.log(this.formRef.current.getFieldValue());
    };
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
        console.info(this.formRef.current);
    }

    reset = (fields?: any) => {
        console.log('Resetting Fields' + this.formRef.current.resetFields());
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        return (
            <>
                <Layout>
                    <Header>Example header</Header>
                    <Content className="site-layout" style={{ padding: '0 10px', marginTop: 64 }}>



                        {/***
                                 * Student Details
                                */}
                        <Form name="nest-messages" validateMessages={validateMessages} ref={this.formRef} onFinish={this.onFinish}>
                            <Divider>Enter Student Details</Divider>

                            <Row>
                                <Col span={11} style={style} className="gutter-row">
                                    <Form.Item name={['user', 'name']} label="Name of Child" extra={'**Note**: (As in Birth Certificate)'} rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col style={style} className="gutter-row" offset={1} span={11}>
                                    <Form.Item name={['user', 'dateofbirth']} label="Date Of Birth" rules={[{ required: true }]}>
                                        <DatePicker format={'DD-MM-YYYY'} />
                                    </Form.Item>
                                </Col>

                            </Row>

                            {/* <Form.Item name={['user', 'fathersname']} label="Father's Name" rules={[{ type: 'email' }]}> */}

                            <Row>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'aadharno']} label="AADHAR Number" rules={[{ required: true }]} >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'placeofbirth']} label="Place Of Birth">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'mothertongue']} label="Mother Tongue">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'gender']} label="Choose Gender">
                                        <Select>
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item
                                        name={['user', 'admissionclass']}
                                        label="Select Class for admission"
                                        hasFeedback
                                        rules={[{ required: true, message: 'Please select class in which admission is sought' }]}
                                    >
                                        <Select placeholder="Please select a class" onChange={this.onValueChange.bind(this)}>
                                            <Option value="class1">Class 1</Option>
                                            <Option value="class2">Class 2</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                { this.state.showElective && (
                                <Col span={24} style={style} >
                                    <Form.Item name={['user', 'electivesubject']} label="Choose elective subject" rules={[{ required: true }]}>
                                        <Select>
                                            <Select.Option value="elective1">test1</Select.Option>
                                            <Select.Option value="elective2">test2</Select.Option>
                                            <Select.Option value="elective3">test3</Select.Option>
                                        </Select>
                                    </Form.Item>

                                </Col>
                                )}
                            </Row>
                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'tcertificate']} label="Transfer Certificate" rules={[{ required: true }]}>
                                        <Select>
                                            <Select.Option value="available">Available</Select.Option>
                                            <Select.Option value="notavailable">Not available</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'board']} label="Name of Board" rules={[{ required: true }]}>
                                        <Select>
                                            <Select.Option value="cbse">CBSE</Select.Option>
                                            <Select.Option value="stateboard">State Board</Select.Option>
                                            <Select.Option value="others">Others</Select.Option>
                                        </Select>
                                    </Form.Item>

                                </Col>
                            </Row>
                            <Row>

                            </Row>
                            {/***
                                 * Father Details
                                */}

                            <Divider>Enter Parent Details - Father </Divider>
                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersname']} label="Father's Name" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersqualification']} label="Fathers Qualification" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersoccupation']} label="Occupation" rules={[{ required: true }]}>
                                        <Select>
                                            <Select.Option value="professional">Professional</Select.Option>
                                            <Select.Option value="service">Service</Select.Option>
                                            <Select.Option value="business">Business</Select.Option>
                                            <Select.Option value="others">Others</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersincome']} label="Approximate Income" rules={[{ required: true }]} >
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row>
                                <Col span={24} style={style}>

                                    <Form.Item name={['user', 'fathersofficeaddress']} label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: true }]}>
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'fathersmobile']} label="Mobile Number" extra={'Kindly enter with caution'}  rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersemail']} label="Email ID" rules={[{ required: true, type: "email" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>



                            {/***
                                 * Mother Details
                                */}



                            <Divider>Enter Parent Details - Mother </Divider>
                            <Row>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'mothersname']} rules={[{ required: true }]} label="Mother's Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'motherqualification']} label="Mothers Qualification" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>


                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersoccupation']} label="Occupation">
                                        <Select>
                                            <Select.Option value="professional">Professional</Select.Option>
                                            <Select.Option value="service">Service</Select.Option>
                                            <Select.Option value="business">Business</Select.Option>
                                            <Select.Option value="others">Others</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersincome']} label="Approximate Income" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row>
                                
                                <Col span={24} style={style}>
                               
                                    <Form.Item name={['user', 'mothersofficeaddress']} label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: false }]}>
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'mothersmobile']} label="Mobile Number" rules={[{ required: false}]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersemail']} label="Email ID" rules={[{ required: false, type: "email" }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>


                            {/* **
                                Guardian Details
                                */}


                            <Divider>Enter Parent Details - Guardian </Divider>

                            <Row>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'guardianname']} label="Guardian's Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'guardianrelationship']} label="Guardian's Relationship">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'guardianphonenumber']} label="Guardian Phone Number ">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12}>
                                    <Popconfirm placement="topRight" title={text} onConfirm={this.reset.bind(this)} okText="Yes" cancelText="No">
                                        <Form.Item >
                                            <Button htmlType="reset" danger>
                                                Reset / Cancel
                        </Button>
                                        </Form.Item>
                                    </Popconfirm>

                                </Col>
                                <Col span={12}>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Submit
        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                    </Content>
                </Layout>

            </>
        )
    }
}


