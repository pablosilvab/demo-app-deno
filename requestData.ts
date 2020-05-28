const response  = await fetch('http://apis.kadevl.com/catalog')
const data = await response.json()

export default data;