# Z.ai Usage Tracker

A Visual Studio Code extension that displays your Z.ai API usage directly in the status bar. Keep track of your token usage, weekly quota, and MCP usage at a glance without leaving your editor.

## Overview

This extension provides real-time visibility into your Z.ai API usage, helping you stay within your quota limits while coding. With color-coded indicators and detailed tooltips, you'll always know exactly where you stand with your usage.

## Key Features

- **Status Bar Display** – Shows your Z.ai usage percentage with color-coded indicators
- **Detailed Tooltip** – Hover to see:
  - 5h token usage with progress bar
  - Weekly quota usage
  - MCP usage count
  - Time remaining until quota reset
  - Current plan level
- **Manual Refresh** – Click the status bar item or use the command palette to refresh usage data
- **API Key Management** – Securely configure your Z.ai API key through VS Code settings or environment variables
- **Color Indicators** – Visual feedback based on usage level:
  - < 50%: Green
  - 50-75%: Yellow
  - 75-90%: Orange
  - 90%+: Red

## Installation

### From VSIX File
1. Clone or download this repository
2. Open VS Code and press `F1` or `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
3. Type "Install from VSIX" and select it
4. Navigate to the folder and select the `.vsix` file

### Building from Source
```bash
npm install
npm run compile

# Package as VSIX
npm install -g @vscode/vsce
vsce package
```

## Configuration

Configure through VS Code settings (`settings.json`) or the Settings UI.

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `zaiUsage.refreshInterval` | number | 60 | Refresh interval in seconds |
| `zaiUsage.notifications.enabled` | boolean | true | Show notifications when approaching limits |
| `zaiUsage.notifications.thresholds` | array | [75, 90, 95] | Percentage thresholds for notifications |
| `zaiUsage.apiKey` | string | "" | Z.ai API key (or use `ZAI_API_KEY` env var) |

### API Key Setup

Three ways to provide your API key:
1. **Via Settings** – Set `zaiUsage.apiKey` in your settings
2. **Via Environment Variable** – Set the `ZAI_API_KEY` environment variable
3. **Via Command** – Run the "Z.ai Usage: Configure" command from the Command Palette

## Commands

| Command | ID | Description |
|---------|----| ----------- |
| Z.ai Usage: Refresh | `zaiUsage.refresh` | Manually refresh usage data |
| Z.ai Usage: Configure | `zaiUsage.configure` | Set up your Z.ai API key |
| Z.ai Usage: Copy Usage (JSON) | `zaiUsage.copyJson` | Copy current usage as JSON |

## Technologies Used

- TypeScript
- VS Code Extension API
- Node.js

## Requirements

- Visual Studio Code 1.85.0 or higher
- Z.ai API key

## Links

- [GitHub Repository](https://github.com/CruiseDevice/Z.ai-usage-tracker)
