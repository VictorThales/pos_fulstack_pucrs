// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous request
    setTimeout(() => {
      const data = { id: 1, name: 'Test async' };
      // Check if the request was successful
      if (data) {
        resolve(data); // Resolve the Promise with the data
      } else {
        reject('Error: Failed to fetch data.'); // Reject the Promise with an error message
      }
    }, 2000); // Simulated 2-second delay
  });
}

// Async function using await to handle Promises
async function fetchDataAsync() {
  try {
    const data = await fetchData(); // Wait for the Promise to resolve
    console.log('Data:', data); // Data received successfully
  } catch (error) {
    console.error(error); // Error handling if the request fails
  }
}

// Call the async function
fetchDataAsync();
