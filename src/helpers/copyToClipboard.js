export default function copyToClipboard() {
  navigator.clipboard.writeText(`http://localhost:3000/foods/${id}/`)
    .then(() => console.log('URL copied!'), () => console.log('Copy URL failed'));
}
