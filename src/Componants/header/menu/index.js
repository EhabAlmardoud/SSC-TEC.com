import React, { Component } from 'react'
import './style.less'
import { Menu, Icon } from 'antd';
import 'antd/lib/menu/style';
import 'antd/lib/icon/style';

const { SubMenu } = Menu;

export default class headerMenu extends Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };


    render() {
        return (
            <div className='menu'>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ backgroundColor: 'azure', fontSize:'1.2vw' }}
                >
                    <Menu.Item key="home">
                        Home
                    </Menu.Item>
                    <Menu.Item key="about">
                        About Us
                    </Menu.Item>

                    <SubMenu
                        title='Products'>
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    <Menu.Item key="contact">
                        Contact Us
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
