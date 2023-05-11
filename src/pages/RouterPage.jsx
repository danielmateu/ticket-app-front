
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import { Routes, Route, Link, Navigate } from "react-router-dom";

import IngresarPage from './Ingresar';
import ColaPage from './Cola';
import CrearTicketPage from './CrearTicket';
import EscritorioPage from './Escritorio';
import { useContext } from 'react';
import { UIContext } from '../context/UIContext';

const { Sider, Content } = Layout;

const RouterPage = () => {

    const { ocultarMenu } = useContext(UIContext)

    return (

        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    hidden={ocultarMenu}
                    collapsedWidth={0}
                    breakpoint="md"
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                // label: 'Ingresar',
                                label: <Link to="/ingresar">Ingresar</Link>,

                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                // label: 'Cola',
                                label: <Link to="/cola">Cola de tiquets</Link>,
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                // label: 'Crear Ticket',
                                label: <Link to="/crear-ticket">Crear Ticket</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            // background: colorBgContainer,
                        }}
                    >
                        <Routes>
                            <Route path="/ingresar" element={<IngresarPage />} />
                            <Route path="/cola" element={<ColaPage />} />
                            <Route path="/crear-ticket" element={<CrearTicketPage />} />

                            <Route path='/escritorio' element={<EscritorioPage />} />

                            <Route path="*" element={<Navigate to='/' replace />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>

    )
}

export default RouterPage