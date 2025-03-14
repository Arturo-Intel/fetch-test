document.getElementById('apiCallButton').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/github');
      const data = await response.json();
      document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('apiResponse').innerText = 'Error fetching data';
    }
  });
  
document.getElementById('apiCallButton2').addEventListener('click', async () => {
    console.log("Local");
    try {
        const response = await fetch('https://api.github.com/repos/IGCIT/Intel-GPU-Community-Issue-Tracker-IGCIT/issues/1051');
        const data = await response.json();
        document.getElementById('apiResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('apiResponse').innerText = 'Error fetching data!!';
    }
});