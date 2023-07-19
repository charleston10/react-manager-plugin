import React from "react";
import Frame from "react-frame-component";

import "./App.css";
import { PluginManager } from "./plugin/api/PluginManager";
import { FormPlugin } from "./plugin/Form.plugin";

function App() {
  const manager = new PluginManager();
  manager.loadPlugin(FormPlugin);

  const pluginComponents = manager.getPluginComponents();

  return (
    <div
      style={{
        paddingLeft: "20px",
      }}
    >
      <h1>Home Page</h1>

      {pluginComponents.map((plugin, index) => {
        const Component = plugin.component;
        const name = plugin.name;

        return (
          <Frame key={index}>
            <h2>{name}</h2>
            <Component />
          </Frame>
        );
      })}
    </div>
  );
}

export default App;
