import React from 'react';
import { Layout, Popconfirm,  Button, message, Form, Input, Select, Row, Col,  DatePicker, Divider } from 'antd';
import '../App.css';
import axios from 'axios';

const { Option } = Select;
const SET_ADMISSION_PATH = '/admission/setAdmission.php/';

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
        this.setState({
            showElective: evt==='class11'?true:false
        })
        
    }
    onFinish = (values: any) => {
        console.log(values);
        console.log(this.formRef.current.getFieldValue());
        if(!values.user.electivesubject) {
            console.info('elective not found');
            values.user.electivesubject = 'no';
        }
       
        axios({
            baseURL: 'http://localhost/',
            method: 'post',
            url: `${SET_ADMISSION_PATH}`,
            headers: { 'content-type': 'application/json','Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, PATCH, DELETE' },
            data: values.user
          })
          .then(result => {
             console.log('result-->', result.data);
            })

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
                    <Header><h3>E-MAV ADMISSION</h3></Header>
                    <Content className="site-layout" style={{ padding: '0 10px', marginTop: 64 }}>

                        
                        <Form name="nest-messages" validateMessages={validateMessages} ref={this.formRef} onFinish={this.onFinish}>
                            <Divider>Enter Student Details</Divider>

                            <Row>
                                <Col span={11} style={style} className="gutter-row">
                                    <Form.Item name={['user', 'name']} initialValue='' label="Name of Child" extra={'**Note**: (As in Birth Certificate)'} rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col style={style} className="gutter-row" offset={1} span={11}>
                                    <Form.Item name={['user', 'dateofbirth']} initialValue='' label="Date Of Birth" rules={[{ required: false }]}>
                                        <DatePicker  format={'DD-MM-YYYY'}/>
                                    </Form.Item>
                                </Col>

                            </Row>

                            {/* <Form.Item name={['user', 'fathersname']} label="Father's Name" rules={[{ type: 'email' }]}> */}

                            <Row>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'aadharno']}  initialValue='' label="AADHAR Number" rules={[{ required: false }]} >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'placeofbirth']} initialValue=''  label="Place Of Birth">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'mothertongue']} initialValue='' label="Mother Tongue">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'gender']} initialValue='' label="Choose Gender">
                                        <Select>
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item
                                        name={['user', 'admissionclass']} initialValue=''
                                        label="Select Class for admission"
                                        hasFeedback
                                        rules={[{ required: false, message: 'Please select class in which admission is sought' }]}
                                    >
                                        <Select placeholder="Please select a class" onChange={this.onValueChange.bind(this)}>
                                            <Option value="class1">Pre School</Option>
                                            <Option value="juniorkg">Junior KG</Option>
                                            <Option value="seniorkg">Senior KG</Option>
                                            <Option value="class1">Grade 1</Option>
                                            <Option value="class2">Grade 2</Option>
                                            <Option value="class3">Grade 3</Option>
                                            <Option value="class4">Grade 4</Option>
                                            <Option value="class5">Grade 5</Option>
                                            <Option value="class6">Grade 6</Option>
                                            <Option value="class7">Grade 7</Option>
                                            <Option value="class8">Grade 8</Option>
                                            <Option value="class9">Grade 9</Option>
                                            <Option value="class10">Grade 10</Option>
                                            <Option value="class11">Grade 11</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                
                                <Col span={24} style={style} >
                                    <Form.Item name={['user', 'electivesubject']}  initialValue='' label="Choose elective subject" rules={[{ required: false }]}>
                                        <Select disabled={!this.state.showElective}>
                                            <Select.Option value="elective1">Maths, Physics, Chemistry, Biology</Select.Option>
                                            <Select.Option value="elective2">Maths, Physics, Chemistry, Computer Science</Select.Option>
                                            <Select.Option value="elective3">Accountancy, Business Studies, Economics, Computer Science</Select.Option>
                                        </Select>
                                    </Form.Item>

                                </Col>
                             
                            </Row>
                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'tcertificate']} initialValue='' label="Transfer Certificate" rules={[{ required: false }]}>
                                        <Select>
                                            <Select.Option value="available">Available</Select.Option>
                                            <Select.Option value="notavailable">Not available</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'board']} initialValue='' label="Name of Board last studied" rules={[{ required: false }]}>
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
                                    <Form.Item name={['user', 'fathersname']} initialValue='' label="Father's Name" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersqualification']} initialValue=''  label="Fathers Qualification" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersoccupation']} initialValue='' label="Occupation" rules={[{ required: false }]}>
                                        <Select>
                                            <Select.Option value="professional">Professional</Select.Option>
                                            <Select.Option value="service">Service</Select.Option>
                                            <Select.Option value="business">Business</Select.Option>
                                            <Select.Option value="others">Others</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersincome']}  initialValue='' label="Approximate Income" rules={[{ required: false }]} >
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row>
                                <Col span={24} style={style}>

                                    <Form.Item name={['user', 'fathersofficeaddress']} initialValue='' label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: false }]}>
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'fathersmobile']} initialValue='' label="Mobile Number" extra={'Kindly enter with caution'}  rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'fathersemail']} initialValue='' label="Email ID" rules={[{ required: false, type: "email" }]}>
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

                                    <Form.Item name={['user', 'mothersname']} initialValue='' rules={[{ required: false }]} label="Mother's Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'motherqualification']} initialValue=''  label="Mothers Qualification" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>


                            <Row>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersoccupation']} initialValue='' label="Occupation">
                                        <Select>
                                            <Select.Option value="professional">Professional</Select.Option>
                                            <Select.Option value="service">Service</Select.Option>
                                            <Select.Option value="business">Business</Select.Option>
                                            <Select.Option value="others">Others</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersincome']}  initialValue='' label="Approximate Income" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Row>
                                
                                <Col span={24} style={style}>
                               
                                    <Form.Item name={['user', 'mothersofficeaddress']} initialValue='' label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: false }]}>
                                        <Input.TextArea />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12} style={style}>

                                    <Form.Item name={['user', 'mothersmobile']} initialValue='' label="Mobile Number" rules={[{ required: false}]}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'mothersemail']} initialValue='' label="Email ID" rules={[{ required: false, type: "email" }]}>
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
                                    <Form.Item name={['user', 'guardianname']} initialValue='' label="Guardian's Name">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={8} style={style}>
                                    <Form.Item name={['user', 'guardianrelationship']} initialValue='' label="Guardian's Relationship">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12} style={style}>
                                    <Form.Item name={['user', 'guardianphonenumber']} initialValue='' label="Guardian Phone Number ">
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


