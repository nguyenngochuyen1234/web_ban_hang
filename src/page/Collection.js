import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
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
          <Col className="gutter-row mr-[10px] mt-[40px]" span={6}>
            <div className=''>
              <img src="https://img.thesitebase.net/10266/10266415/products/ver_1/0x360@168665337004fa5d6aad.jpeg"></img>
              <h1 className='text-center text-sm'>Mio Akiyama J1-Sneakers Custom MN0504</h1>
              <h2 className='text-emerald-800 tracking-widest font-semibold text-center'>$99.95 USD</h2>
            </div>
          </Col>
        </Row>

      </div>
      <Footer />
    </div>
  )
}

export default Collections