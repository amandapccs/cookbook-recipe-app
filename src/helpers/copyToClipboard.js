export default function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href)
    .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
}
