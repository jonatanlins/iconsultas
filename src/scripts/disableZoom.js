function disableZoom() {
  document.addEventListener('gesturestart', e => e.preventDefault());
}

export default disableZoom;
