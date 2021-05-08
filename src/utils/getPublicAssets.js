// https://create-react-app.dev/docs/using-the-public-folder/
const { PUBLIC_URL } = process.env

function getPublicAssets(path) {
  return `${PUBLIC_URL}/assets/${path}`
}

export default getPublicAssets
