import React, { Component } from 'react';
import { Form, Input, InputNumber, Button, Radio, Select } from 'antd';

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

const onChange = (values: any)=> {
    console.log('onChange',values.value)
}
const onFormCHange = (values: any) => {
    console.log('onFormCHange', values);
}
const onComplete = (values: any) => {
    console.info('onComplete');
    console.log(values);
};
export const FirstStep = () => {

    return (
        <>
        
            <Form name="nest-messages" validateMessages={validateMessages} onChange={onChange.bind(this)}>
                <Form.Item name={['user', 'name']} label="Name of Child (As in Birth Certificate)" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                {/* <Form.Item name={['user', 'fathersname']} label="Father's Name" rules={[{ type: 'email' }]}> */}

                <Form.Item name={['user', 'dateofbirth']} label="Date Of Birth">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'aadharno']} label="AADHAR Number" rules={[{ required: false }]} >
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'placeofbirth']} label="Place Of Birth">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'mothertongue']} label="Mother Tongue">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'gender']} label="Gender">
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="select"
                    label="Select"
                    hasFeedback
                    rules={[{ required: false, message: 'Please select class in which admission is sought' }]}
                >
                    <Select placeholder="Please select a class">
                        <Option value="class1">Class 1</Option>
                        <Option value="class2">Class 2</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="select"
                    label="Select"
                    hasFeedback
                    rules={[{ required: false, message: 'Please select class in which student studies' }]}
                >
                    <Select placeholder="Please select a class">
                        <Option value="class1">Class 1</Option>
                        <Option value="class2">Class 2</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={['user', 'transfercertificate']} label="Transfer Certificate">
                    <Radio.Group>
                        <Radio value="available">Available</Radio>
                        <Radio value="notavailable">Not available</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'electivesubject']} label="Choose Effective Subject">
                    <Radio.Group>
                        <Radio value="elective1">Maths, Physics, Chemistry, Biology</Radio>
                        <Radio value="elective2">Maths, Physics, Chemistry, Computer science</Radio>
                        <Radio value="elective3">Accountancy, Business studies, Economics, Computer science</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'board']} label="Name of Board studied on">
                    <Radio.Group>
                        <Radio value="board1">CBSE</Radio>
                        <Radio value="board2">State Board</Radio>
                        <Radio value="board3">Others</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </>
    );

}


export const SecondStep = () => {
    return (
        <>
            <header>Enter Father Details</header>
            <Form name="nest-messages" validateMessages={validateMessages}>
                <Form.Item name={['user', 'fathersname']} label="Father's Name">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'fathersqualification']} label="Fathers Qualification" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'fathersoccupation']} label="Occupation">
                    <Radio.Group>
                        <Radio value="professional">Professional</Radio>
                        <Radio value="service">Service</Radio>
                        <Radio value="business">Business</Radio>
                        <Radio value="others">Others</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'fathersofficeaddress']} label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: false }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'fathersincome']} label="Approximate Income" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'fathersmobile']} label="Mobile Number" rules={[{ required: false, type: "number" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'fathersemail']} label="Email ID" rules={[{ required: false, type: "email" }]}>
                    <Input />
                </Form.Item>



            <header>Enter Mother Details</header>
                <Form.Item name={['user', 'mothersname']} label="Father's Name">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'motherqualification']} label="Mothers Qualification" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'motheroccupation']} label="Occupation">
                    <Radio.Group>
                        <Radio value="professional">Professional</Radio>
                        <Radio value="service">Service</Radio>
                        <Radio value="business">Business</Radio>
                        <Radio value="others">Others</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'motherofficeaddress']} label="Designation & Office Address" extra={'Kindly enter full address with pin code'} rules={[{ required: false }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'motherincome']} label="Approximate Income" rules={[{ required: false }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'mothermobile']} label="Mobile Number" rules={[{ required: false, type: "number" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'motheremail']} label="Email ID" rules={[{ required: false, type: "email" }]}>
                    <Input />
                </Form.Item>
            </Form>

            <header>Enter Guardian Details</header>
            <Form name="nest-messages" validateMessages={validateMessages} >
                <Form.Item name={['user', 'guardianname']} label="Guardian's Name">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'guardianrelationship']} label="Guardian's Relationship">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'guardianphonenumber']} label="Guardian Phone Number ">
                    <Input />
                </Form.Item>
                </Form>

        </>

    );

}

export const FinalStep = () => {
    return (

        <div>
            test-final
        </div>
    );

}
