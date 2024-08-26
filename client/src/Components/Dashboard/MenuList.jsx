import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  SettingOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// MenuList component receives 'darkTheme' as a prop to determine the theme of the menu
const MenuList = ({ darkTheme }) => {
  return (
    // The Menu component from antd is used to create a sidebar menu.
    // The theme is set based on the 'darkTheme' prop (either 'dark' or 'light').
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
     
    >
      {/* SubMenu: Firewall Automation */}
      {/* This submenu contains tasks related to firewall automation. */}
      <Menu.SubMenu
        key="firewall-tasks"
        icon={<BarsOutlined />}
        title="Firewall Automation"
      >
        {/* Task 1: Link to Context Setting */}
        <Menu.Item key="firewall-task-1">
          <a href="https://www.youtube.com/" target="_blank">
            Context Setting
          </a>
        </Menu.Item>

        {/* Task 2: Link to Change Request */}
        <Menu.Item key="firewall-task-2">
          <a href="https://www.youtube.com/" target="_blank">
            Change Request
          </a>
        </Menu.Item>

        {/* Task 3: Link to HclTech Automation */}
        <Menu.Item key="firewall-task-3">
          <a href="https://www.youtube.com/" target="_blank">
            HclTech Automation
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* SubMenu: SSE */}
      {/* This submenu contains tasks related to SSE (Secure Service Edge). */}
      <Menu.SubMenu key="sse-tasks" icon={<BarsOutlined />} title="SSE">
        {/* Task 1: Link to Before SSE */}
        <Menu.Item key="sse-task-1">
          <a href="https://www.youtube.com/" target="_blank">
            Before SSE
          </a>
        </Menu.Item>

        {/* Task 2: Link to After SSE */}
        <Menu.Item key="sse-task-2">
          <a href="https://www.youtube.com/" target="_blank">
            After SSE
          </a>
        </Menu.Item>

        {/* Task 3: Link to Use cases covered */}
        <Menu.Item key="sse-task-3">
          <a href="https://www.youtube.com/" target="_blank">
            Use cases covered
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Menu Item: Privileged Remote Access */}
      {/* This item now links to an external URL for Privileged Remote Access. */}
      <Menu.Item key="privileged-remote-access" icon={<PayCircleOutlined />}>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privileged Remote Access
        </a>
      </Menu.Item>

      {/* SubMenu: Endpoint Protection */}
      {/* This submenu contains tasks related to Endpoint Protection. */}
      <Menu.SubMenu
        key="endpoint-protection-tasks"
        icon={<BarsOutlined />}
        title="Endpoint Protection"
      >
        {/* Task 1: Link to Context Setting */}
        <Menu.Item key="endpoint-task-1">
          <a href="https://www.youtube.com/" target="_blank">
            Context Setting
          </a>
        </Menu.Item>

        {/* Task 2: Link to RDP Victim Machine */}
        <Menu.Item key="endpoint-task-2">
          <a href="https://www.youtube.com/" target="_blank">
            RDP Victim Machine
          </a>
        </Menu.Item>

        {/* Task 3: Link to Suspicious Machine Contain */}
        <Menu.Item key="endpoint-task-3">
          <a href="https://www.youtube.com/" target="_blank">
            Suspicious Machine Contain
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* SubMenu: SOC */}
      {/* This submenu contains tasks related to Security Operations Center (SOC). */}
      <Menu.SubMenu key="soc-tasks" icon={<BarsOutlined />} title="SOC">
        {/* Task 1: Link to Ransomware Attack (Manual Remediation) */}
        <Menu.Item key="soc-task-1">
          <a href="https://www.youtube.com/" target="_blank">
            Ransomware Attack (Manual Remediation)
          </a>
        </Menu.Item>

        {/* Task 2: Link to SOP Route */}
        <Menu.Item key="soc-task-2">
          <a href="https://www.youtube.com/" target="_blank">
            SOP Route
          </a>
        </Menu.Item>

        {/* Task 3: Link to Automation Capability */}
        <Menu.Item key="soc-task-3">
          <a href="https://www.youtube.com/" target="_blank">
            Automation Capability
          </a>
        </Menu.Item>

        {/* Task 4: Link to Privilege */}
        <Menu.Item key="soc-task-4">
          <a href="https://www.youtube.com/" target="_blank">
            Privilege
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* SubMenu: Microsegmentation */}
      {/* This submenu contains tasks related to microsegmentation. */}
      <Menu.SubMenu
        key="microsegmentation-tasks"
        icon={<BarsOutlined />}
        title="Microsegmentation"
      >
        {/* Task 1: Link to High Level Reference Architecture */}
        <Menu.Item key="microsegmentation-task-1">
          <a href="https://www.youtube.com/" target="_blank">
            High Level Reference Architecture
          </a>
        </Menu.Item>

        {/* Task 2: Link to Use Cases */}
        <Menu.Item key="microsegmentation-task-2">
          <a href="https://www.youtube.com/" target="_blank">
            Use Cases
          </a>
        </Menu.Item>
      </Menu.SubMenu>

      {/* Menu Item: Logout */}
      {/* This item links to the Logout section. */}
      <Menu.Item key="logout" icon={<AreaChartOutlined />}>
        <Link to="logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
