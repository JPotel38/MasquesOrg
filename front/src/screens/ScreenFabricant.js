import React from 'react';
import '../App.css';

import { Layout, Menu, Avatar, Card, Form, Select, Input, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;
const { Option } = Select;


function ScreenFabricant (){

    return(

            

    <Layout style={{height: 'auto'}}className="layout">
        
        <Menu className='Menu' theme="dark" style={{backgroundColor: '#1e272e'}} mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item className='logo' key="1">Masques.org</Menu.Item>
            <Menu.Item key="2" className="menuItem">Accueil</Menu.Item>
            <Menu.Item key="3">Fabricants</Menu.Item>
            <Menu.Item key="4" style={{float: 'right'}}>S'inscrire / Se connecter</Menu.Item>
        </Menu>
    
        <Content style={{ padding: '0 50px'}}>
    
            {/* ----------------CONTENU---------------- */}
        <div /* direction='vertical' */ align='center'style={{display:'flex', flexDirection: 'column', width: '100%'}}>
            {/* Profil fabricant */}
            
            <div style={{marginTop: 30, textAlign: 'left', display: 'flex'}} align='start'>
                <Avatar size={64} icon={<UserOutlined />} />
                <div /* direction='vertical' */ style={{marginLeft: 20, color: '#1E272E'}}>
                    
                    <h3 style={{fontWeight: 700, fontSize: 25}}>Shawn Williamson</h3>
                    <p style={{width : 400}}>Dolor eu nostrud magna ut dolore ad non mollit occaecat. Adipisicing ullamco et tempor nostrud. Occaecat occaecat non magna consectetur quis adipisicing sunt culpa.</p>
                
                </div>
               
            </div>
       
            {/* images +  choix masques */}
            <div style={{margin: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left'}} /* direction='horizontal' */ align='center'>

                <Card style={{ width: 300}}
                    hoverable
                    cover={<img alt="example" src='../assets/masques1.jpg' />}
                >
                </Card>
                <div style={{marginLeft : 30, textAlign: 'center'}}>

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

                    </Form>

                    <Button style={{backgroundColor : '#E23D70', width: 90, borderRadius: 5, boxShadow: '0px 3px 3px 0px black'}}>Valider</Button>


                </div>
                
                

            </div>

        </div>
        </Content>
        <Footer style={{ textAlign: 'center'}}>© 2020 Masques.org. Tous droits réservés.</Footer>
    </Layout>

    )

    
}

export default ScreenFabricant;