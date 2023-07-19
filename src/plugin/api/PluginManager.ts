import { AppPlugin } from "./AppPlugin";

export class PluginManager {
  plugins: AppPlugin[] = [];

  loadPlugin(plugin: () => AppPlugin): void {
    this.plugins.push(plugin());
  }

  getPluginComponents(): AppPlugin[] {
    return this.plugins;
  }
}
