const express = require('express');
const axios = require('axios');
const router = express.Router();

// Define a route to call the GitHub API
router.get('/github', async (req, res) => {
    console.log("Server");
    try {
        const response = await fetch('https://api.github.com/repos/IGCIT/Intel-GPU-Community-Issue-Tracker-IGCIT/issues/1051');
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.log( 'Error fetching data!!');
    }
  });

module.exports = router;