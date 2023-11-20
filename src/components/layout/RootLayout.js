import Link from 'next/link';

const { Breadcrumb, Layout, Menu, theme, Button } = require('antd')

const RootLayout = ({children}) => {
      const { Header, Content, Footer } = Layout;
    return (
     <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        
       >
       
          <Link href="/about">
          <Button type='primary'>About</Button>
          </Link>
</Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: "#fff",
            height:"60vh"
          }}
        >
         {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
    );
};

export default RootLayout;