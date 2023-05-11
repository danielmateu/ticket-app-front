import { DownloadOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row, Typography } from "antd"
import { useHideMenu } from "../hooks/useHideMenu"
import { useContext, useState } from "react"
import { SocketContext } from "../context/SocketContext"

const { Title, Text } = Typography

const CrearTicketPage = () => {

    useHideMenu(true)
    const { socket } = useContext(SocketContext)
    const [ultimoTicket, setUltimoTicket] = useState({})

    const nuevoTicket = () => {
        // console.log('Nuevo Ticket')
        socket.emit('solicitar-ticket', null, (ticket) => {
            console.log(ticket)
            setUltimoTicket(ticket)
        })
    }

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title level={3}>Presione el botón para un nuevo ticket</Title>
                    <Button shape="round" icon={<DownloadOutlined />} size="large" onClick={nuevoTicket}>
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            {
                ultimoTicket.numero ?
                    (<Row style={{ marginTop: 100 }}>
                        <Col span={14} offset={6} align="center">
                            <Text level={2}>Su número</Text>
                            {/* <Divider/> */}
                            <Divider>
                                <Text type="success" style={{ fontSize: 55, }}>
                                    {ultimoTicket.numero}
                                </Text>
                            </Divider>
                        </Col>
                    </Row>) :
                    (<Row style={{ marginTop: 100, }}>
                        <Col span={14} offset={6} align="center">
                            <Text level={2}>No hay tickets en cola</Text>
                        </Col>
                    </Row>)
            }
        </>
    )
}

export default CrearTicketPage