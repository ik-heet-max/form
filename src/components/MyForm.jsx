import React, { useState, useEffect } from 'react';
import { Button, Spin, Checkbox, Form, Input, message, Row, Col } from 'antd';
import axios from 'axios';
import { Typography } from 'antd';

import BioEditor from './BioEditor';
import Silk from './Silk'

const MyForm = () => {
	useEffect(() => {
		const tg = window.Telegram?.WebApp;
		if (tg) {
			tg.expand();
			tg.enableClosingConfirmation();
		}
	}, []);
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();
	const sucksass = (values) => {
		axios.post('http://109.234.36.116:8000/submit', values, {
			headers: {
				'Content-Type': 'application/json',
			}
		}
		).then(r => messageApi.success('Sucks Ass!', values.username))
		.catch(error => messageApi.error('poshol na hui!', values.username))
	;}

	const onFinish = (values) => {
		console.log('Success:', values);
		sucksass(values);
		form.resetFields(); // Clear form after submission
		  };

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
		//herror();
		//sucksass(errorInfo);
		  };

	//const user = window.Telegram.WebApp.initDataUnsafe.user;
	
	const { Text, Title } = Typography;
	
	return (
	<>
	{contextHolder}
	<Spin spinning={loading}>
	  <Form
	    form={form}
	    name="basic"
	    labelCol={{ span: 8 }}
	    wrapperCol={{ span: 16 }}
	    style={{ maxWidth: 600 }}
	    initialValues={{ remember: true }}
	    onFinish={onFinish}
	    onFinishFailed={onFinishFailed}
	    autoComplete="off"
	  >
	    <Form.Item
	      label=<Title level={5} bold style={{ color: '#C0C0C0' }}>Telegram ID</Title>
	      name="id_"
	      rules={[{ required: true, message: 'Пожалуйста, введите свой ID!' }]}
	    >
	      <Input />
	    </Form.Item>
	    <Form.Item
	      label=<Title level={5} bold style={{ color: '#C0C0C0' }}>Фамилия, имя</Title>
	      name="name"
	      rules={[{ required: true, message: 'Пожалуйста, введите свои имя и фамилию!' }]}
	    >
	      <Input />
	    </Form.Item>

	    <Form.Item
	      label=<Title level={5} bold style={{ color: '#C0C0C0' }}>Ссылка на чат</Title>
	      name="chat"
	      rules={[{ required: true, message: 'Пожалуйста, введите ссылку на чат!' }]}
	    >
	      <Input />
	    </Form.Item>

	    <Form.Item
	      label=<Title level={5} bold style={{ color: '#C0C0C0' }}>Ссылка на канал</Title>
	      name="channel"
	      rules={[{ required: true, message: 'Пожалуйста, введите ссылку на канал!' }]}
	    >
	      <Input />
	    </Form.Item>
	    <BioEditor />
	    <Form.Item name="remember" valuePropName="checked" label={null}>
	      <Checkbox>Remember me</Checkbox>
	    </Form.Item>
	    <Form.Item label={null}>
	      <Button type="primary" htmlType="submit">
	        Submit
	      </Button>
	    </Form.Item>
	  </Form>
	</Spin>
	</>
	);
}
export default MyForm;
