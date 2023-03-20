import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'NewzNow',
    key: 'main',
  },
  {
    label: 'Home',
    key: 'mail',
  },
  {
    label: 'Latest News',
    key: 'app',
  },
  {
    label: 'Genre',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Sports',
        children: [
          {
            label: 'Cricket',
            key: 'setting:1',
          },
          {
            label: 'Football',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer" className='about'>
        About Us
      </a>
    ),
    key: 'alipay',
  },
];

const Nav = () => {

  
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div>
      <div className='title-container'>
        <h1 className='web-title'>NewzNow</h1>
      </div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
  )
  
}

export default Nav
