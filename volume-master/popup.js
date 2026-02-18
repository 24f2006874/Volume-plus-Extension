document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('volumeSlider');
  const display = document.getElementById('volume-display');
  const bassToggle = document.getElementById('bassBoost');
  const voiceToggle = document.getElementById('voiceBoost');
  const monoToggle = document.getElementById('monoMode'); 
  const resetBtn = document.getElementById('resetBtn');
  const tabsList = document.getElementById('audioTabs');

  // Load saved settings
  chrome.storage.sync.get(['volume', 'bass', 'voice', 'mono'], (data) => {
    if (data.volume !== undefined) {
      slider.value = data.volume;
      display.innerText = data.volume + '%';
    }
    if (data.bass !== undefined) bassToggle.checked = data.bass;
    if (data.voice !== undefined) voiceToggle.checked = data.voice;
    if (data.mono !== undefined) monoToggle.checked = data.mono; 
  });

  // Slider Event
  slider.addEventListener('input', () => {
    const val = slider.value;
    display.innerText = val + '%';
    chrome.storage.sync.set({ volume: val });
    sendMessageToActiveTab({ action: 'setVolume', value: val });
  });

  // Toggle Events
  bassToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ bass: bassToggle.checked });
    sendMessageToActiveTab({ action: 'setBass', value: bassToggle.checked });
  });

  voiceToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ voice: voiceToggle.checked });
    sendMessageToActiveTab({ action: 'setVoice', value: voiceToggle.checked });
  });

  // Mono Event
  monoToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ mono: monoToggle.checked });
    sendMessageToActiveTab({ action: 'setMono', value: monoToggle.checked });
  });

  // Reset Button Event
  resetBtn.addEventListener('click', () => {
    slider.value = 100;
    display.innerText = '100%';
    bassToggle.checked = false;
    voiceToggle.checked = false;
    monoToggle.checked = false; // NEW

    chrome.storage.sync.set({ volume: 100, bass: false, voice: false, mono: false });
    sendMessageToActiveTab({ action: 'reset' });
  });

  // Tab List Logic
  updateAudioTabs();
  
  function updateAudioTabs() {
    chrome.tabs.query({ audible: true }, (tabs) => {
      tabsList.innerHTML = '';
      if (tabs.length === 0) {
        tabsList.innerHTML = '<li style="opacity:0.5; cursor:default;">No tabs playing audio</li>';
        return;
      }
      tabs.forEach(tab => {
        const li = document.createElement('li');
        li.innerText = tab.title;
        li.addEventListener('click', () => {
          chrome.tabs.update(tab.id, { active: true });
          chrome.windows.update(tab.windowId, { focused: true });
        });
        tabsList.appendChild(li);
      });
    });
  }

  function sendMessageToActiveTab(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id && tabs[0].url && !tabs[0].url.startsWith('chrome://')) {
        chrome.tabs.sendMessage(tabs[0].id, message).catch(() => {});
      }
    });
  }
});