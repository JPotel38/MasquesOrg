import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Nav from './Nav'

import { Row, Col, Layout, Avatar, Card, Form, Select, Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { Option } = Select;


function ScreenFabricant (){


    return(


    <Layout style={{height: 'auto', backgroundColor: 'white'}}className="layout">
        
        <Nav/>
    
        <Content style={{ padding: '0 50px', display: 'flex',flexDirection: 'column', alignItems: 'center'}} >
    
            {/* ----------------CONTENU---------------- */}
        
            <Row style={{display: 'flex', flexDirection: 'row', marginTop: 25}}>
            {/* Profil fabricant */}
            
                <Avatar size={64} icon={<UserOutlined />} />
                <div style={{marginLeft: 20, color: '#1E272E'}}>
                    
                    <h3 style={{fontWeight: 700, fontSize: 25}}>Shawn Williamson</h3>
                    <p style={{width : 400}}>Dolor eu nostrud magna ut dolore ad non mollit occaecat. Adipisicing ullamco et tempor nostrud. Occaecat occaecat non magna consectetur quis adipisicing sunt culpa.</p>
                
                </div>

            </Row>
            {/* images +  choix masques */}
            <Row style={{marginTop: 30}}>
        

                <Col md={{span : 12}} sm={{span : 24}}>
                    <Card style={{ width: 300}}
                        hoverable
                        cover={<img alt="example" src='../assets/typeMasque1.jpg' />}
                    >
                    </Card>

                
                </Col>
                <Col md={{span : 12}} sm={{span : 24}}>
                    <Form style={{textAlign:'left'}}>
                        <Form.Item style={{width: 400}}name="Modèle" label="Modèle" rules={[{ required: true }]}>
                        <Select
                            placeholder="Choisissez votre modèle"
                            allowClear
                        >
                            <Option value="male">Modèle 1</Option>
                            <Option value="female">Modèle 2</Option>
                            <Option value="other">Modèle 3</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item style={{width: 400}}name="Couleur" label="Couleur" rules={[{ required: true }]}>
                        <Select
                            placeholder="Choisissez votre couleur"
                            allowClear
                        >
                            <Option value="male">Couleur 1</Option>
                            <Option value="female">Couleur 2</Option>
                            <Option value="other">Couleur 3</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item label="Personnalisation" name="Personnalisation"
                                    rules={[{ required: false}]}
                        >
                            <Input.TextArea placeholder= 'Entrez l’inscription souhaitée'/>
                        </Form.Item>

                        <Form.Item label="Quantité" name="Quantité"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder= 'Entrez la quantité souhaitée'/>
                        </Form.Item>

                        <Link to= '/screenbasket'><Button style={{backgroundColor : '#E23D70', width: 90, borderRadius: 5, boxShadow: '0px 3px 3px 0px black'}}>Valider</Button></Link>

                    </Form>

                </Col> 

            </Row>       
        </Content>
        <Footer style={{ textAlign: 'center', marginTop: 30}}>© 2020 Masques.org. Tous droits réservés.</Footer>
    </Layout>

    )

    
}

export default ScreenFabricant;