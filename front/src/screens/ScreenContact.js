import React from 'react';
import '../App.css';

import { Layout, Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import Nav from './Nav';
import FooterComp from './Footer';

const { Content } = Layout;
const { Option } = Select;

function ScreenContact() {

  //Dispostion form
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 14,
    },
  };

  //Préfixe numéro de téléphone
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );
 


  return (
    <Layout style={{minHeight: '100vh', height: 'auto', backgroundColor: 'white'}}className="layout">

      <Nav />

      <Content style={{padding: '0 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '40px 0', textAlign: 'center'}}>

        <h1 style={{fontWeight: 700}}>Contactez-nous</h1>

        <Form {...layout} name="nest-messages" style={{width: '60%', textAlign: 'center', margin: 20}}>
          
          <Form.Item name={['user', 'name']}
                    label="Nom"
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir votre nom!',
                      },
                    ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={['user', 'email']}
                    label="Email"
                    rules={[
                      {
                        type: 'email',
                        message: 'Veuillez saisir un E-mail! valide',
                      },
                      {
                        required: true,
                        message: 'Veuillez saisir votre E-mail!',
                      },
                    ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="Téléphone"
                    label="Téléphone"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item name={['user', 'objet']}
                    label="Objet"
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir un objet!',
                      },
                    ]}
          >
            <Select>
              <Select.Option value="1">Demande d'information</Select.Option>
              <Select.Option value="2">Question sur une commande</Select.Option>
              <Select.Option value="3">Problème sur le site</Select.Option>
              <Select.Option value="3">Suggestion</Select.Option>
              <Select.Option value="4">Autre</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name={['user', 'message']} 
                    label="Message"
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir votre message!',
                      },
                    ]}
          >
            <Input.TextArea rows={6}/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button style= {{width: 150, borderRadius: 5, boxShadow: '0px 3px 3px 0px black', marginTop: 20}} type="primary" htmlType="submit">
              Envoyer
            </Button>
          </Form.Item>

        </Form>

        <h3 style={{fontWeight: 700, fontSize: 20}}>Et suivez-nous sur les réseaux sociaux !</h3>
          
        <div style={{margin: 20}}>
          <a href= '#' target="_blank"><img src= './assets/icones/instagram.png' rel="noopener noreferrer" alt='instagram' style={{width: 45, height: 'auto', margin: '0 3px'}}/></a>
          <a href= 'https://www.facebook.com/Masquesorg-110068767322252/' rel="noopener noreferrer" target="_blank"><img src='./assets/icones/facebook.png' alt='facebook'style={{width: 45, height: 'auto', margin: '0 3px'}}/></a>
          <a href='https://twitter.com/MasquesOrg' target="_blank" ><img src='./assets/icones/twitter.png' rel="noopener noreferrer" alt='twitter' style={{width: 45, height: 'auto', margin: '0 3px'}}/></a>
        </div>
          
      </Content>
      <FooterComp/>
    </Layout>
  );
}

export default ScreenContact;
