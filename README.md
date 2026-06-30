# Layer Cleanup

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Photoshop](https://img.shields.io/badge/Photoshop-CC2020+-ff00ff)
![Status](https://img.shields.io/badge/status-active-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

Professional JSX/ExtendScript automation script for Adobe Photoshop. Engineered for document optimization and layer management by automatically removing empty and invisible layers, streamlining complex PSD files for production workflows.

---

## Overview

Layer Cleanup automates the tedious process of removing unnecessary layers from Photoshop documents. Perfect for cleaning up complex projects, preparing files for export, and optimizing PSD performance by eliminating empty and invisible layers in batch operations.

### Capabilities

- Automated removal of empty layers
- Automated removal of invisible layers
- Production-ready implementation
- Non-destructive operations
- Cross-platform support (macOS, Windows)
- Extensive version compatibility (CC 2020+)

---

## Installation

### macOS

```bash
git clone https://github.com/TheMaestr-o/layer-cleanup.git
cp Layer_Cleanup.jsx ~/Library/Application\ Support/Adobe/Adobe\ Photoshop\ [VERSION]/Presets/Scripts/
```

**Version-specific paths:**
- Photoshop 2025: `~/Library/Application Support/Adobe/Adobe Photoshop 2025/Presets/Scripts/`
- Photoshop 2024: `~/Library/Application Support/Adobe/Adobe Photoshop 2024/Presets/Scripts/`
- Photoshop 2023: `~/Library/Application Support/Adobe/Adobe Photoshop 2023/Presets/Scripts/`
- Photoshop CC 2020: `~/Library/Application Support/Adobe/Adobe Photoshop 2020/Presets/Scripts/`

### Windows

```bash
git clone https://github.com/TheMaestr-o/layer-cleanup.git
copy Layer_Cleanup.jsx "C:\Program Files\Adobe\Adobe Photoshop [VERSION]\Presets\Scripts\"
```

**Version-specific paths:**
- Photoshop 2025: `C:\Program Files\Adobe\Adobe Photoshop 2025\Presets\Scripts\`
- Photoshop 2024: `C:\Program Files\Adobe\Adobe Photoshop 2024\Presets\Scripts\`
- Photoshop 2023: `C:\Program Files\Adobe\Adobe Photoshop 2023\Presets\Scripts\`

### Quick Setup

1. Download `Layer_Cleanup.jsx`
2. Open Photoshop
3. File → Scripts → Browse
4. Select script
5. Execute

---

## Usage

### Method 1: Photoshop Menu

```
File → Scripts → Other Scripts → Layer_Cleanup
```

### Method 2: Scripts Panel

1. Window → Scripts
2. Locate "Layer_Cleanup"
3. Double-click

### Method 3: ExtendScript Console

```javascript
#include "/path/to/Layer_Cleanup.jsx"
main();
```

---

## Technical Specifications

### System Requirements

| Component | Specification |
|-----------|---------------|
| Operating System | macOS 10.14+ / Windows 10+ |
| Photoshop | CC 2020+ |
| Runtime | ExtendScript (included with Photoshop) |
| Dependencies | None |

### Compatibility Matrix

| Photoshop Version | Support |
|-------------------|---------|
| CS6 | ✓ |
| CC 2015 | ✓ |
| CC 2017 | ✓ |
| CC 2018 | ✓ |
| CC 2019 | ✓ |
| CC 2020 | ✓ |
| CC 2021 | ✓ |
| CC 2022 | ✓ |
| CC 2023 | ✓ |
| CC 2024 | ✓ |
| CC 2025 | ✓ |

---

## Cleanup Process

1. Open document with unused layers
2. Execute script via File → Scripts → Layer_Cleanup
3. Script identifies empty and invisible layers
4. Removes identified layers automatically
5. Document ready with optimized layer structure

---

## What Gets Cleaned

**Empty Layers:**
- Layers with no visible content
- Layers with no effects
- Adjustment layers with no adjustments

**Invisible Layers:**
- Layers with visibility turned off
- Layers in hidden groups
- Layers below visibility threshold

---

## FAQ

**Q: Script not appearing in Photoshop menu**

A: Verify installation path matches your Photoshop version. Restart Photoshop. Confirm .jsx file extension is correct.

**Q: Can I undo the cleanup?**

A: Yes. Use Edit → Undo Layer Cleanup immediately after script execution. Or keep a backup copy of original file.

**Q: Does it remove text layers?**

A: No. Script only removes completely empty layers. Text layers with content are preserved.

**Q: What about layer groups?**

A: Empty groups are removed. Groups containing visible layers are preserved.

**Q: Batch processing multiple files**

A: Use File → Automate → Batch to process multiple documents sequentially.

**Q: Performance optimization**

A: Processing speed depends on layer count. Large layer stacks process quickly. Close unnecessary applications.

---

## Licensing

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support & Contact

For questions, feedback, or collaboration:

[![Email](https://img.shields.io/badge/Email-gssdarm%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:gssdarm@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-%40ohnedan-0088cc?style=flat-square&logo=telegram&logoColor=white)](https://t.me/ohnedan)
[![GitHub](https://img.shields.io/badge/GitHub-TheMaestr--o-black?style=flat-square&logo=github&logoColor=white)](https://github.com/TheMaestr-o)

---

Part of the [Photoshop-Scripts](https://github.com/TheMaestr-o/Photoshop-Scripts) collection.

Last updated: June 2026
