import { SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';



const IngresarPage = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
                name="Usuario"
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
                name="Escritorio"
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

            {/* <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Inserte su contraseña!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item> */}

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
                    <SaveOutlined/>
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    )
}

export default IngresarPage