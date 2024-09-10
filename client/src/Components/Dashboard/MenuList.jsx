import { Menu } from "antd";
import {
  AreaChartOutlined,
  PayCircleOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";

const MenuList = ({ darkTheme }) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication tokens or session data here if needed
    localStorage.removeItem("authToken"); // Example
    navigate("/"); // Redirect to the home page
  };

  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      {/* Firewall Automation SubMenu */}
      <Menu.SubMenu
        key="firewall-tasks"
        icon={<BarsOutlined />}
        title="Firewall Automation"
      >
        <Menu.Item key="firewall-task-1">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Context Setting
          </a>
        </Menu.Item>
        <Menu.Item key="firewall-task-2">
          <a
            href="https://hclpbtest3.service-now.com/login.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            Change Request
          </a>
        </Menu.Item>
        <Menu.Item key="firewall-task-3">
          <a
            href="https://192.168.60.12"
            target="_blank"
            rel="noopener noreferrer"
          >
            HclTech Automation
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* SSE SubMenu */}
      <Menu.SubMenu key="sse-tasks" icon={<BarsOutlined />} title="SSE">
        <Menu.Item key="sse-task-1">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Before SSE
          </a>
        </Menu.Item>
        <Menu.Item key="sse-task-2">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            After SSE
          </a>
        </Menu.Item>
        <Menu.Item key="sse-task-3">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use cases covered
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Privileged Remote Access */}
      <Menu.Item key="privileged-remote-access" icon={<PayCircleOutlined />}>
        <a
          href="https:/pra.cyberlab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privileged Remote Access
        </a>
      </Menu.Item>

      {/* Endpoint Protection SubMenu */}
      <Menu.SubMenu
        key="endpoint-protection-tasks"
        icon={<BarsOutlined />}
        title="Endpoint Protection"
      >
        <Menu.Item key="endpoint-task-1">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Context Setting
          </a>
        </Menu.Item>
        <Menu.Item key="endpoint-task-2">
          <a
            href="https://192.168.8.140"
            target="_blank"
            rel="noopener noreferrer"
          >
            RDP Victim Machine
          </a>
        </Menu.Item>
        <Menu.Item key="endpoint-task-3">
          <a
            href="https://192.168.8.161"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suspicious Machine Contain
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* SOC SubMenu */}
      <Menu.SubMenu key="soc-tasks" icon={<BarsOutlined />} title="SOC">
        <Menu.Item key="soc-task-1">
          <a
            href="https://192.168.60.26"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ransomware Attack (Manual Remediation)
          </a>
        </Menu.Item>
        <Menu.Item key="soc-task-2">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOP
          </a>
        </Menu.Item>
        <Menu.Item key="soc-task-3">
          <a
            href="https://192.168.8.161"
            target="_blank"
            rel="noopener noreferrer"
          >
            Automation Capability
          </a>
        </Menu.Item>
        <Menu.Item key="soc-task-4">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privilege
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Microsegmentation SubMenu */}
      <Menu.SubMenu
        key="microsegmentation-tasks"
        icon={<BarsOutlined />}
        title="Microsegmentation"
      >
        <Menu.Item key="microsegmentation-task-1">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            High Level Reference Architecture
          </a>
        </Menu.Item>
        <Menu.Item key="microsegmentation-task-2">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Use Cases
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Logout Button */}
      <Menu.Item key="logout" icon={<AreaChartOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
