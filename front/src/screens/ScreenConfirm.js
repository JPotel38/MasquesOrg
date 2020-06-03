import React from 'react';
import '../App.css';

import { Layout, Menu, Button } from 'antd';
import {CheckCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;


function LayoutDesign (){

    return(

            

    <Layout className="layout" style={{height: '100vh'}}>
        
        <Menu className='Menu' theme="dark" style={{backgroundColor: '#1e272e'}} mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item className='logo' key="1">Masques.org</Menu.Item>
            <Menu.Item key="2" className="menuItem">Accueil</Menu.Item>
            <Menu.Item key="3">Fabricants</Menu.Item>
            <Menu.Item key="4" style={{float: 'right'}}>S'inscrire / Se connecter</Menu.Item>
        </Menu>
    
        <Content style={{ padding: '0 50px' }}>
            {/* ----------------CONTENU---------------- */}
          
                
            <h3 style={{fontFamily: 'Oswald', fontWeight: 700, fontSize: 25, marginTop: 20}}> Merci Jacob Wilson !</h3>

            <div style={{textAlign : 'center', color : '#1E272E', fontSize: 20, marginTop: 80}}>


                <CheckCircleFilled style={{color: '#5CCF33', fontSize: 150}}/>
                <p style={{fontWeight : 700, marginTop: 30}}>Votre commande à bien été prise en compte !</p>
                <p>Merci pour votre confiance.</p>

                <Button style={{backgroundColor : '#E23D70', borderRadius: 5, boxShadow: '0px 3px 3px 0px black'}}>Retour à l'accueil</Button>

            </div>
           
                
              
            



        </Content>
        <Footer style={{ textAlign: 'center' }}>© 2020 Masques.org. Tous droits réservés.</Footer>
    </Layout>

    )

    
}

export default LayoutDesign;