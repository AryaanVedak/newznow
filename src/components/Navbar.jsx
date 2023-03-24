import {Link} from "react-router-dom";
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: (
      <Link to="/general" className='about'>
        General
      </Link>
    ),
    key: 'general',
  },
  {
    label: (
      <Link to="/entertainment" className='about'>
        Entertainment
      </Link>
    ),
    key: 'entertainment',
  },
  {
    label: (
      <Link to="/health" className='about'>
        Health
      </Link>
    ),
    key: 'health',
  },
  {
    label: (
      <Link to="/science" className='about'>
        Science
      </Link>
    ),
    key: 'science',
  },
  {
    label: (
      <Link to="/sports" className='about'>
        Sports
      </Link>
    ),
    key: 'sports',
  },
  {
    label: (
      <Link to="/technology" className='about'>
        Technology
      </Link>
    ),
    key: 'technology',
  },
];

const Nav = () => {

  const [current, setCurrent] = useState('general');
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
