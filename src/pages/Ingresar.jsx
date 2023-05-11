import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { useState } from 'react';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';


const { Title, Text } = Typography

const IngresarPage = () => {

    useHideMenu(false)
    const navigate = useNavigate()

    const [usuario] = useState(getUsuarioStorage())
    // console.log(usuario);

    const onFinish = ({ agente, escritorio }) => {
        // console.log('Success:', values);
        localStorage.setItem('agente', JSON.stringify(agente))
        localStorage.setItem('escritorio', JSON.stringify(escritorio))
        navigate('/escritorio')

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (usuario.agente && usuario.escritorio) {
        return <Navigate to='/escritorio' />
    }

    return (
        <>
            <Title
                level={2}
                style={{
                    textAlign: 'center',
                    marginTop: 20,
                }}
            >
                Ingresar
            </Title>
            <Divider />
            <Text>
                Ingrese su nombre y número de escritorio
            </Text>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre del usuario"
                    name="agente"
                    // placeholder="Ingrese su nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Inserte su nombre por favor!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Número de escritorio"
                    name="escritorio"
                    // placeholder="Ingrese su nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Inserte su número de escritorio!',
                        },
                    ]}
                >
                    <InputNumber
                        min={1}
                        max={40}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        shape='round'
                        style={{
                            // width: '100%',
                            backgroundColor: '#4BC0C8',
                        }}
                    >
                        <SaveOutlined />
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default IngresarPage