import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from '../page/Footer';
import { Breadcrumb } from 'antd';
import { FilterOutlined, CaretDownOutlined } from '@ant-design/icons';
import productsApi from "../api"
import { Col, Divider, Row } from 'antd';

const Collections = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='mt-[88px] min-h-[600px] px-[9%] py-[15px]'>
        <Breadcrumb className="text-xs"
          items={[
            {
              title: <a href="http://localhost:3000">HOME</a>,
            },
            {
              title: 'COLLECTIONS',
            },
          ]}
        />
        <h1 className="text-2xl tracking-wide">CUSTOM NAME SHOES</h1>
        <button className='py-[7px]  px-[2px] pr-[30px] border  text-sm shadow mt-[5px] translate-y-[-3px]' > <FilterOutlined className='mx-[7px]' />Featured </button>

        <Row>
       {
        
       }
        </Row>

      </div>
      <Footer />
    </div>
  )
}

export default Collections