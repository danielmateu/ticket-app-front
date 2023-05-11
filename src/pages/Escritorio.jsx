import { CloseCircleOutlined, RightCircleTwoTone } from "@ant-design/icons"
import { Button, Col, Divider, Row, Typography } from "antd"
import { useHideMenu } from "../hooks/useHideMenu"

const { Title, Text } = Typography

const EscritorioPage = () => {

    useHideMenu(false)

    const salir = () => {
        console.log('salir')
    }

    const siguienteTiquet = () => {
        console.log('siguienteTiquet')
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>
                        Dani
                    </Title>
                    <Text>Usted está trabajando en el escritorio:</Text>
                    <Text type="success">5</Text>
                </Col>

                <Col span={4} align="right" >
                    <Button shape="round" onClick={salir} danger style={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <CloseCircleOutlined />
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider />

            <Row>
                <Col>
                    <Text>Está atendiendo el ticket número:</Text>
                    <Text
                        style={{
                            fontSize: 30,
                        }}
                        type="danger"
                    >
                        55
                    </Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button
                        shape="round"
                        onClick={siguienteTiquet}
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                    >
                        {/* <CloseCircleOutlined /> */}
                        <RightCircleTwoTone />
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default EscritorioPage