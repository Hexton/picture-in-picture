const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
  } catch (error) {
    console.log('Encounter error', error);
  }
}

// On Load
selectMediaStream();
