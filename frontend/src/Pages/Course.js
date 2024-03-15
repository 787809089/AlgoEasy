import React from 'react'
import Navbar from '../components/Navbar';
import MenuCourse from '../components/Menu';
import DragEle from '../components/DragEle'
import { Col, Grid, Layout, Row, Typography } from 'antd';
import InfoBody from '../components/IntroBody';
import 'antd'
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';

const siderStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#1677ff',
    height: '100%'
  };

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    backgroundColor: '#0958d9',
    height: '100%'
  };

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
    height: '100%'
  };

export default function Course(){
    return (
        <Layout style={layoutStyle}>
            <Sider width= "25%" style={siderStyle}>
                <MenuCourse style={{height:'100%'}}/>
            </Sider>
            <Content style={contentStyle}>
                <InfoBody/>
                <DragEle/>
            </Content>
        </Layout>
    );
}