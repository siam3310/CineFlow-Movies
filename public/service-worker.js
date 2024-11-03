self.addEventListener('install', (_event) => {
    // console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', (_event) => {
    // console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', (event) => {
    // console.log('Fetching:', event.request.url);
  });
  

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        if (registration.active.scriptURL.includes("service-worker.js")) {
          registration.unregister();
        }
      } 
  });
  }