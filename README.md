<div align="center">

# 🔊 Volume Plus Extension

**A powerful Chrome extension to boost your browser volume up to 600%**

Built with high-fidelity audio processing for crystal-clear sound.

[![Chrome - Manifest V3](https://img.shields.io/badge/Chrome-Manifest%20V3-green?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-65.3%25-yellow?logo=javascript&logoColor=white)](#)

[Features](#-features) • [Installation](#-installation) • [Usage](#-how-to-use) • [Tech Stack](#-the-tech-behind-it)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [How to Use](#-how-to-use)
- [The Tech Behind It](#-the-tech-behind-it)
- [Disclaimer](#-disclaimer)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🚀 **Up to 600% Volume Boost**
Amplify quiet audio beyond the standard maximum limit. Perfect for:
- Quiet laptop speakers
- Low-volume video calls
- Whisper-quiet streaming content

### 🎵 **High-Fidelity Audio Engine**
- **Smart Limiter**: Automatically prevents distortion and crackling, even at maximum boost
- **Soft Clipping**: Smooths out audio peaks for warm, natural loudness

### 🗣️ **Voice Boost Mode**
Optimized for dialogues and podcasts:
- Cuts background rumble (filters below 150Hz)
- Enhances vocal clarity (boosts 2.5kHz frequencies)
- Makes dialogues in movies and podcasts crisp and easy to hear

### 🎸 **Bass Boost**
Adds depth and punch to:
- Music playback
- Action scenes in movies
- Gaming audio

### 🔊 **Mono Mode**
- Converts stereo audio to mono
- Centers audio output
- Ideal for single-speaker laptop users

### 🌙 **Additional Features**
- **Dark Mode**: Sleek, modern dark user interface
- **Tab Manager**: View and switch to any tab playing audio with a single click
- **Privacy Focused**: No ads, no tracking, no data collection

---

## 📸 Screenshots

<div align="center">

### Main Popup
![Main Popup](screenshots/popup.png)
*Control volume, toggle modes, and manage audio settings*

### Settings Panel
![Settings Panel](screenshots/settings.png)
*Advanced audio controls and preferences*

</div>

---

## 🛠️ Installation

Since this is a personal project, install it manually in Developer Mode.

### **Step 1: Download or Clone**

**Option A: Download ZIP**
1. Click the green **Code** button at the top of this page
2. Select **Download ZIP**
3. Extract the ZIP file to a folder

**Option B: Clone with Git**
```bash
git clone https://github.com/24f2006874/Volume-plus-Extension.git
cd Volume-plus-Extension
```

### **Step 2: Load in Chrome**
1. Open Google Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** using the toggle in the top right corner
3. Click **Load unpacked** in the top left
4. Select the folder containing the extension files (`manifest.json`, `content.js`, etc.)

### **Step 3: Pin the Extension**
1. Click the puzzle piece icon 🧩 in the Chrome toolbar
2. Find **"Volume Plus Extension"** in the list
3. Click the pin icon 📌 to keep it visible in your toolbar

---

## 🎮 How to Use

### **Basic Usage**

1. **Navigate** to a tab with audio (YouTube, Netflix, Spotify, etc.)
2. **Click** the Volume Plus icon in your toolbar
3. **Adjust** the slider:
   - `100%` = Standard system volume
   - `200%+` = Boosted volume (up to 600%)

### **Audio Modes**

| Mode | When to Use | What It Does |
|------|-------------|--------------|
| 🗣️ **Voice Boost** | Movies, calls, podcasts | Enhances vocal clarity, reduces background noise |
| 🎸 **Bass Boost** | Music, gaming | Adds depth and punch to low frequencies |
| 🔊 **Mono Mode** | Laptop speakers | Centers stereo audio for better single-speaker output |

### **Tab Manager**

- Click **"Active Tabs"** to see all tabs currently playing audio
- Click any tab in the list to instantly switch to it

### **Reset**

Click the **"Reset to Default"** button to instantly return to original audio settings.

---

## 🧠 The Tech Behind It

This extension uses the **Web Audio API** to manipulate sound in real-time.

### **Architecture**

```
AudioContext 
  → BiquadFilter (EQ) 
    → DynamicsCompressor (Limiter) 
      → AudioDestinationNode
```

### **Key Components**

#### **1. Dynamics Compression (Limiter)**
- Uses `DynamicsCompressor` configured as a limiter
- Reduces gain of loud peaks to prevent clipping
- Allows overall volume boost without distortion

#### **2. Filtering System**
- **High-Pass Filter**: Removes low-frequency mud for voice clarity
- **Peaking Filter**: Boosts vocal frequencies (2.5kHz) for presence
- **Low-Pass Filter**: Bass boost adds depth to low frequencies

#### **3. Real-Time Processing**
- All audio processing happens in the browser
- Zero latency
- No data sent to external servers

### **Technology Stack**

| Technology | Purpose |
|------------|---------|
| Web Audio API | Real-time audio processing |
| Chrome Extension API | Browser integration |
| JavaScript (65.3%) | Core functionality |
| CSS (22.1%) | User interface styling |
| HTML (12.6%) | Popup structure |

---

## ⚠️ Disclaimer

### **Use Responsibly**

- ⚠️ **Hearing Protection**: Prolonged exposure to high volume levels can damage your hearing
- 🔊 **Speaker Protection**: Excessive volume can damage small laptop speakers
- 📉 **Start Low**: Begin at lower volumes and increase gradually

**This extension is provided "as-is" for personal use. The developer is not responsible for any hearing damage or equipment damage resulting from misuse.**

---

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

### **How to Contribute**

1. **Report Bugs**: Open an issue describing the problem
2. **Suggest Features**: Share your ideas in the issues section
3. **Submit Pull Requests**: Fork the repo and submit PRs for bug fixes or improvements

### **Development Setup**

```bash
# Clone the repository
git clone https://github.com/24f2006874/Volume-plus-Extension.git

# Make your changes
# Load the unpacked extension in Chrome for testing
# Submit a pull request
```

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ for personal use
- Powered by the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- Chrome Extension Manifest V3

---

## 📬 Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/24f2006874/Volume-plus-Extension/issues)
2. Open a new issue with details about your problem
3. Include your Chrome version and OS information

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by [24f2006874](https://github.com/24f2006874)

</div>
