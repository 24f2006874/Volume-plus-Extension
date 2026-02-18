let audioContext = null;
let gainNode = null;
let bassFilter = null;
let voiceFilter = null;
let voicePresence = null;
let voiceHighPass = null;
let limiter = null;

function initAudio() {
  if (audioContext) return;

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // 1. Main Volume
  gainNode = audioContext.createGain();
  
  // 2. Bass Filter
  bassFilter = audioContext.createBiquadFilter();
  bassFilter.type = 'lowshelf';
  bassFilter.frequency.value = 200;
  bassFilter.gain.value = 0;

  // 3. Voice Enhancement Chain
  voiceHighPass = audioContext.createBiquadFilter();
  voiceHighPass.type = 'highpass';
  voiceHighPass.frequency.value = 100; 
  voiceHighPass.Q.value = 0.7;

  voicePresence = audioContext.createBiquadFilter();
  voicePresence.type = 'peaking';
  voicePresence.frequency.value = 2500;
  voicePresence.Q.value = 1.0;
  voicePresence.gain.value = 0;

  voiceFilter = audioContext.createBiquadFilter();
  voiceFilter.type = 'highshelf';
  voiceFilter.frequency.value = 1000;
  voiceFilter.gain.value = 0;

  // 4. Limiter (Stops distortion)
  limiter = audioContext.createDynamicsCompressor();
  limiter.threshold.value = -5.0; 
  limiter.knee.value = 10.0;      
  limiter.ratio.value = 12.0;
  limiter.attack.value = 0.005;
  limiter.release.value = 0.050;
  
  console.log("Volume Master: Engine Initialized");
}

function connectMediaElements() {
  if (!audioContext) initAudio();
  if (audioContext.state === 'suspended') audioContext.resume();

  const elements = document.querySelectorAll('video, audio');
  
  elements.forEach(el => {
    if (!el.dataset.vmConnected) {
      try {
        const source = audioContext.createMediaElementSource(el);
        
        // Chain: Source -> Bass -> Voice -> Volume -> Limiter -> Speakers
        source.connect(bassFilter);
        bassFilter.connect(voiceHighPass);
        voiceHighPass.connect(voicePresence);
        voicePresence.connect(voiceFilter);
        voiceFilter.connect(gainNode);
        gainNode.connect(limiter);
        limiter.connect(audioContext.destination);
        
        el.dataset.vmConnected = "true";
        console.log("Volume Master: CONNECTED!");
        
      } catch (e) {
        console.error("Volume Master: Connection Error", e);
      }
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (!audioContext) initAudio();
  if (audioContext.state === 'suspended') audioContext.resume();

  if (request.action === 'reset') {
    connectMediaElements();
    if (gainNode) gainNode.gain.value = 1.0;
    if (bassFilter) bassFilter.gain.value = 0;
    if (voiceHighPass) voiceHighPass.frequency.value = 100;
    if (voicePresence) voicePresence.gain.value = 0;
    if (voiceFilter) voiceFilter.gain.value = 0;
    return;
  }

  connectMediaElements();

  if (request.action === 'setVolume') {
    const vol = request.value / 100;
    if (gainNode) gainNode.gain.value = vol;

    // Adjust limiter for high volume
    if (vol > 2.0) {
        limiter.threshold.value = -2.0; 
        limiter.knee.value = 15.0; 
    } else {
        limiter.threshold.value = -5.0;
        limiter.knee.value = 10.0;
    }
  }
  
  if (request.action === 'setBass') {
    if (bassFilter) bassFilter.gain.value = request.value ? 10 : 0;
  }

  if (request.action === 'setVoice') {
    const enabled = request.value;
    if (voiceHighPass) voiceHighPass.frequency.value = enabled ? 150 : 100;
    if (voicePresence) voicePresence.gain.value = enabled ? 6 : 0; 
    if (voiceFilter) voiceFilter.gain.value = enabled ? 4 : 0;
  }

  // FIXED: Correct Mono Logic
  if (request.action === 'setMono') {
    if (gainNode) {
        if (request.value) {
            // Force Mono (Mix Left and Right)
            gainNode.channelCount = 1;
            gainNode.channelInterpretation = 'speakers';
        } else {
            // Restore Stereo
            gainNode.channelCount = 2;
            gainNode.channelInterpretation = 'speakers';
        }
    }
  }
});

connectMediaElements();
const observer = new MutationObserver(() => {
  if (document.querySelector('video, audio')) connectMediaElements();
});
observer.observe(document.body, { childList: true, subtree: true });