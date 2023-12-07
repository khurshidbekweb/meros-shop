import Logo from '../../assets/icons/logo.svg'
import userLogo from '../../assets/icons/profil.svg'

function Dashboart() {
  return (
    <div>
      <div className="dashboart">
        <div className="container">
          <div className="dashboart-inner flex">
            <div className="aside-dashboart w-[300px] h-[100vh] bg-[#2B2A4C] p-5">
                <img className='bg-white p-3 px-5 rounded-md' src={Logo} alt="logo" />
                <h2 className='text-center text-[22px] text-white font-bold mt-3 mb-5'>User</h2>
                <hr />
            </div>
            <div className="main-dashboart w-[100%] bg-[#EEF5FF] p-5">
              <div className="header-dashboart flex justify-between items-center">
                <form>
                  <input className='p-2 pl-5 rounded-md' type="search" name="search" placeholder='Search praducts...'/>
                </form>
                <div className="user-dashboatr-header">
                  <img src={userLogo} alt="userLogo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboart














































// import { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, Button, theme } from "antd";
// const { Header, Sider, Content } = Layout;
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout className="w-[1280px] mx-auto">
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["1"]}
//           items={[
//             {
//               key: "0",
//               icon: <img src="https://picsum.photos/id/25/120/120" alt="ok" />,
//               label: "",		 
//             },
//             {
//               key: "1",
//               icon: <UserOutlined />,
//               label: "User",
//             },
//             {
//               key: "2",
//               icon: <VideoCameraOutlined />,
//               label: "Video Camera",
//             },
//             {
//               key: "3",
//               icon: <UploadOutlined />,
//               label: "Upload",
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: "16px",
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//             height: 590,
//             background: colorBgContainer,
//           }}
//         ></Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;

