# Presettings README

Easily store and activate VS Code configuration (settings) presets.

## Configure Presets

You can configure presets by adding the `presettings` key to your `settings.json` file.

```
"presettings": {
    "small-font": {
        "editor.fontSize": 12,
        "editor.lineHeight": 32,
    },
    "big-font": {
        "editor.fontSize": 16,
        "editor.lineHeight": 46,
    },
},
```

## Activate Presets

Choose "Presettings: Activate Preset" from the command palette (*CMD+Shift+P*).

Now, select your preset and the settings will be applied.

> Note: Settings that are applied with this extension overwrite settings in your workspace settings file .vscode/settings.json (not global settings). If this is an issue for you, PR a fix or avoid this extension.

**Enjoy!**
