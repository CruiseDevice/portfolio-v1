# Déjà Claude

> Browse, search, and revisit your Claude Code chat history.

A VS Code extension that gives you easy access to all your Claude Code conversations, right from your editor.

## Features

- **Project-Specific View** — Automatically shows chats for your current workspace
- **Fuzzy Search** — Find chats across all projects (`⌘⇧⌥H` / `Ctrl+Shift+Alt+H`)
- **Pin & Tag** — Keep important chats at the top, organize with tags
- **Export** — Save any chat as Markdown
- **Clean Viewer** — Rendered markdown with copy buttons per message
- **Auto-Refresh** — Chats update as you work

## Requirements

- **VS Code** 1.80.0 or later
- **macOS** — Reads Claude Code history from `~/.claude/projects/`
- **Claude Code** — You need existing chat history to browse

## Installation

### Manual Install

```bash
# Clone and install
git clone https://github.com/CruiseDevice/deja-claude.git
cd deja-claude
npm install
npm run compile

# Package and install
npm install -g @vscode/vsce
vsce package
code --install-extension deja-claude-*.vsix
```

## Usage

Once installed:

1. Open a folder in VS Code
2. Click the **Déjà Claude** icon in the Activity Bar (✦)
3. See all chats for that project
4. Click any chat to view it in the detail panel

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘⇧⌥H` / `Ctrl+Shift+Alt+H` | Search all chats |
| `⌘⇧⌥R` / `Ctrl+Shift+Alt+R` | Recent chats (last 7 days) |
| `⌘⇧⌥T` / `Ctrl+Shift+Alt+T` | Tagged chats only |

## Commands

| Command | Description |
|---------|-------------|
| `Déjà Claude: Search Chats` | Fuzzy search across all chats |
| `Déjà Claude: Search Recent` | Chats from the last 7 days |
| `Déjà Claude: Search Tagged` | Chats that have tags |
| `Déjà Claude: Search with Code` | Chats containing code blocks |
| `Déjà Claude: Refresh` | Reload chat history |
| `Déjà Claude: Toggle Pin` | Pin/unpin a chat |
| `Déjà Claude: Add Tags` | Add comma-separated tags |
| `Déjà Claude: Export as Markdown` | Save chat to file |

## Data Source

Déjà Claude reads Claude Code's chat history from:

```
~/.claude/projects/<hash>/conversations/*.jsonl
```

Project names are automatically resolved from the folder hash. If no workspace is open, you can still search across all projects.

## Technologies Used

- TypeScript
- VS Code Extension API
- Node.js

## License

MIT

## Links

- [GitHub Repository](https://github.com/CruiseDevice/deja-claude)
