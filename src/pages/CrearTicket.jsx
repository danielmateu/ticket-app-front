import { DownloadOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row, Typography } from "antd"
import { useHideMenu } from "../hooks/useHideMenu"

const { Title, Text } = Typography

const CrearTicketPage = () => {

    useHideMenu(true)

    const nuevoTicket = () => {
        console.log('Nuevo Ticket')
    }

    return (
        <>
            <Row>
                <Col
                    span={14} offset={6} align="center"
                >
                    <Title
                        level={3}
                    >
                        Presione el botón para un nuevo ticket
                    </Title>

                    <Button
                        shape="round"
                        icon={<DownloadOutlined />}
                        size="large"
                        onClick={nuevoTicket}
                    >
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            <Row
                style={{
                    marginTop: 100,
                }}
            >
                <Col
                    span={14} offset={6} align="center"
                >
                    <Text level={2}>
                        Su número
                    </Text>
                    {/* <Divider/> */}
                    <Divider>
                        <Text
                            type="success"
                            style={{
                                fontSize: 55,
                            }}
                        >

                            55
                        </Text>
                    </Divider>
                </Col>
            </Row>

        </>
    )
}

export default CrearTicketPage