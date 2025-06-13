import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
const items = [
	  {
		      key: 'sub2',
		      label: 'Navigation Two',
		      icon: <AppstoreOutlined />,
		      children: [
			            { key: '5', label: 'Option 5' },
			            { key: '6', label: 'Option 6' },
			            {
					            key: 'sub3',
					            label: 'Submenu',
					            children: [
							              { key: '7', label: 'Option 7' },
							            ],
					          },
			          ],
		    },
	  {
		      key: 'sub4',
		      label: 'Navigation Three',
		      icon: <SettingOutlined />,
		      children: [
			            { key: '9', label: 'Option 9' },
			            { key: '10', label: 'Option 10' },
			            { key: '11', label: 'Option 11' },
			            { key: '12', label: 'Option 12' },
			          ],
		    },
];
const MyMenu = () => {
	  const [theme, setTheme] = useState('dark');
	  const [current, setCurrent] = useState('1');
	  const changeTheme = value => {
		      setTheme(value ? 'dark' : 'light');
		    };
	  const onClick = e => {
		      console.log('click ', e);
		      setCurrent(e.key);
		    };
	  return (
		      <>
		        <Switch
		          checked={theme === 'dark'}
		          onChange={changeTheme}
		          checkedChildren="Dark"
		          unCheckedChildren="Light"
		        />
		        <br />
		        <br />
		        <Menu
		          theme={theme}
		          onClick={onClick}
		          style={{ width: 256 }}
		          defaultOpenKeys={['sub1']}
		          selectedKeys={[current]}
		          mode="inline"
		          items={items}
		        />
		      </>
		    );
};
export default MyMenu;
