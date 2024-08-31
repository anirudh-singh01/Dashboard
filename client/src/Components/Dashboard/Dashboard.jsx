import { useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import MenuList from "./MenuList";
import ToggleThemeButton from "./ToggleThemeButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activity from "./Activity";

// Destructure Layout components from Ant Design
const { Header, Sider } = Layout;

function Dashboard() {
  // State to manage theme (dark or light) and sidebar collapse state
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Retrieve color background for the header from Ant Design theme tokens
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        {/* Sidebar (Sider) */}
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
          style={{
            minWidth: 400, // Ensures the sidebar has a fixed minimum width
            flex: "0 0 400px",
            maxWidth: 400,
            width: 400,
          }}
        >
          {/* Logo component */}
          <Logo />

          {/* Title that hides when the sidebar is collapsed */}
          <h2
            className="title"
            style={collapsed ? { opacity: 0 } : { opacity: 1 }}
          >
            CIDC Demo Platform
          </h2>

          {/* MenuList component with theme prop */}
          <MenuList darkTheme={darkTheme} />

          {/* Button to toggle the theme */}
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>

        <Layout>
          {/* Header with dynamic background color or image */}
          <Header
            style={{
              padding: 0,
              background: 'url("/Screenshot 2024-08-21 210616.png")',
              backgroundPosition: "center",
            }}
          >
            {/* Button to collapse or expand the sidebar */}
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          {/* Main content area where routes will be rendered */}
          <div className="routes">
            <Routes>
              <Route path="/" element={<Activity />} />
              {/* Placeholder routes for future implementation */}
              {/* <Route path="/activity" element={} />
              <Route path="/sse_task" element={} />
              <Route path="/payload" element={} />
              <Route path="/micro_services" element={} />
              <Route path="/setting" element={} /> */}
              {/* <Route path="/setting" element={<h1>Setting</h1>} /> */}
            </Routes>
          </div>
        </Layout>
      </Layout>
    </>
  );
}

export default Dashboard;
