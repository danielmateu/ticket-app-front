import { Col, Divider, List, Row, Tag, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { getUltimos } from "../helpers/getUltimos";

const { Title, Text } = Typography

const ColaPage = () => {

    useHideMenu(true)

    const { socket } = useContext(SocketContext)

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        socket.on('ticket-asignado', (asignados) => {
            // console.log(asignados)
            setTickets(asignados)
        })

        return () => {
            socket.off('ticket-asignado')
        }
    }, [socket])

    useEffect(() => {
        getUltimos().then(setTickets)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <Title level={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List
                        dataSource={tickets.slice(0, 3)}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`No. ${item.numero}`}
                                    description={
                                        <>
                                            {/* <Text type="secondary">Escritorio: </Text> */}
                                            <Tag color="magenta">{item.escritorio}</Tag>
                                            {/* <Text type="secondary">Agente: </Text> */}
                                            <Tag color="volcano">{item.agente}</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>

                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List
                        dataSource={tickets.slice(3)}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={`Ticket No. ${item.numero}`}
                                    description={
                                        <>
                                            <Text type="secondary">Escritorio: </Text>
                                            <Tag color="magenta">{item.escritorio}</Tag>
                                            <Text type="secondary">Agente: </Text>
                                            <Tag color="volcano">{item.agente}</Tag>
                                        </>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ColaPage