let bulletAudio, explosionAudio, flameAudio;
bulletAudio = new Audio('audio/fire.wav');
explosionAudio = new Audio('audio/flame.wav');
flameAudio = new Audio('audio/flame.wav');
bulletAudio.preload = 'auto';

export {bulletAudio, explosionAudio, flameAudio};