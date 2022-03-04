const express = require('express')
let stream = require('getstream');

const app = express()
const port = 3000

const STREAM_API_KEY='5ff53k2qw8ee'
const STREAM_API_TOKEN='sjtxc7qs5a5du7f7ruyyrc6g6f33md3uhfacbbxr7h2ktv6wgcet97jxssq9y9cs'

app.get('/', async (req, res) => {
    // Connection to GetStream client
    let client = await stream.connect(STREAM_API_KEY, STREAM_API_TOKEN);
  
    // User private token creation
    let userToken = await client.createUserToken('timeline');
    
    // User creation
    await client.user('tester').getOrCreate({
        name: "Tester",
        fullname: 'Tester',
    })
  
    // Addin user to a feed and to follow feed's activities
    const timelineFeed = client.feed('timeline', 'timeline')
    timelineFeed.follow('user', 'tester')
  
  
    // Return private token and user id
    res.send({userToken, userId: 'tester'})
  
    })
  
  app.listen(port, () => {
    console.log(`Backend api listening at http://localhost:${port}`)
  })