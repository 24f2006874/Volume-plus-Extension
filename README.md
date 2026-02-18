# Volume-plus-Extension

A powerful, open-source Chrome extension to boost your browser volume up to 600%.
Built with high-fidelity audio processing for crystal-clear sound.

Chrome VersionLicense

✨ Features
🚀 Up to 600% Volume Boost: Amplify quiet audio beyond the standard maximum limit. Perfect for laptops or quiet video calls.
🎵 High-Fidelity Audio Engine:
Smart Limiter: Automatically prevents distortion and crackling, even at maximum boost.
Soft Clipping: Smooths out audio peaks for a warm, natural loudness.
🗣️ Voice Boost Mode:
Cuts background rumble (below 150Hz).
Enhances vocal clarity (boosts 2.5kHz frequencies).
Makes dialogues in movies and podcasts crisp and easy to hear.
🎸 Bass Boost: Adds depth and punch to music and action scenes.
🔊 Mono Mode:
Converts stereo audio to mono.
Ideal for laptop users—centers the audio so you don't miss a word.
🌙 Dark Mode: A sleek, modern dark user interface.
⚡ Tab Manager: View and switch to any tab playing audio with a single click.
🔒 Privacy Focused: No ads, no tracking, and no data collection. Open source forever.
📸 Screenshots
Main Popup	Settings
(Add Screenshot Here)	(Add Screenshot Here)
🛠️ Installation
Since this is a personal project, you can install it manually in Developer Mode.

Step 1: Download or Clone
Download the source code as a ZIP file or clone this repository:

git clone https://github.com/your-username/volume-master.git
Step 2: Load in Chrome
Open Google Chrome and navigate to chrome://extensions/.
Enable Developer mode using the toggle switch in the top right corner.
Click the Load unpacked button in the top left.
Select the folder containing the extension files (manifest.json, content.js, etc.).
Step 3: Pin the Extension
Click the puzzle piece icon 🧩 in the Chrome toolbar.
Find "Volume Master 600%" and click the pin icon 📌 to keep it in your toolbar.
🎮 How to Use
Navigate to a tab with audio (YouTube, Netflix, Spotify, etc.).
Click the Volume Master icon in your toolbar.
Drag the Slider:
100% = Standard System Volume.
200%+ = Boosted Volume.
Toggle Modes:
Enable Voice Boost for movies/calls.
Enable Mono Mode if you are using laptop speakers.
Reset: Click the "Reset to Default" button to return to original audio settings instantly.
🧠 The Tech Behind It
This extension uses the Web Audio API to manipulate sound in real-time.

Architecture: AudioContext → BiquadFilter (EQ) → DynamicsCompressor (Limiter) → AudioDestinationNode.
Dynamics Compression: We use a DynamicsCompressor configured as a limiter. This reduces the gain of loud peaks, allowing us to raise the overall volume (gain) without "clipping" (distortion).
Filtering:
High-Pass Filter: Removes low-frequency mud for voice clarity.
Peaking Filter: Boosts specific vocal frequencies (2.5kHz) for presence.
⚠️ Disclaimer
Use Responsibly.

Prolonged exposure to high volume levels can damage your hearing.
Excessive volume can damage small laptop speakers.
Start at lower volumes and increase gradually.
📝 License
This project is licensed under the MIT License.

<p align="center">
Made with ❤️ for personal use.
</p>
