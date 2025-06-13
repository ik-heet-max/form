import React, { useRef } from 'react';
import { Button, Input, Space } from 'antd';
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons';

const BioEditor = () => {
	const bioRef = useRef(null);
	const formatText = (command) => {
		document.execCommand(command, false, null);
		bioRef.current.focus(); // Keep focus on the editable area
	};

	return (
	<div>
		<Space direction="vertical" style={{ width: '100%' }}>
		        {/* Formatting Toolbar */}
		  <Space>
		    <Button icon={<BoldOutlined />} onClick={() => formatText('bold')} />
		    <Button icon={<ItalicOutlined />} onClick={() => formatText('italic')} />
		    <Button icon={<UnderlineOutlined />} onClick={() => formatText('underline')} />
		  </Space>

		        {/* Editable Bio Area */}
	<div
		ref={bioRef}
		contentEditable
		style={{
			border: '1px solid #d9d9d9',
			borderRadius: '4px',
			padding: '8px',
			minHeight: '100px',
			outline: 'none',
		}}
		placeholder="Write your bio here..."
	/>
		</Space>
	</div>
	);
};

export default BioEditor;
