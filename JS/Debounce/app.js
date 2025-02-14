// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
      // Clear the previous timer if the function is invoked again
      clearTimeout(timer);
      
      // Set a new timer to call the function after the delay
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  
  // Simulate an API call (you can replace this with a real API request)
  function fakeApiCall(query) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Results for: "${query}"`);
      }, 1000); // Simulate network delay
    });
  }
  
  // Function to handle the search and display the results
  async function handleSearch(event) {
    const query = event.target.value;
    if (!query) {
      document.getElementById('results').innerHTML = '';
      return;
    }
  
    document.getElementById('status').textContent = 'Loading...';
    const result = await fakeApiCall(query);
    document.getElementById('status').textContent = '';
    document.getElementById('results').innerHTML = result;
  }
  
  // Create a debounced version of the handleSearch function with a 500ms delay
  const debouncedSearch = debounce(handleSearch, 500);
  
  // Add event listener to the input field
  document.getElementById('search-input').addEventListener('input', debouncedSearch);
  