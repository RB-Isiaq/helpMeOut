export function updateRecordingDuration(recordingStartTime) {
  const currentTime = Date.now();
  const elapsedTime = currentTime - recordingStartTime;

  // Format elapsedTime as HH:MM:SS or as needed
  const formattedDuration = formatElapsedTime(elapsedTime);

  // Update your UI with the formatted duration
  console.log(formattedDuration);
  return formattedDuration;
}

export function formatElapsedTime(elapsedTime) {
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  return `${hours}:${minutes}:${seconds}`;
}
