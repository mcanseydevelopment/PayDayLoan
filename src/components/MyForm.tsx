/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import FormDataHandler from './FormDataHandler';

export default function MyForm() {
  const [iframeHeight, setIframeHeight] = useState(500); // Default starting height
  
  useEffect(() => {
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = `${iframeHeight}px`;
    iframe.style.border = 'none';
    iframe.title = "Loan Application Form";
    iframe.id = "formIframe";
    
    // Append iframe to the container
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
      formContainer.appendChild(iframe);
      
      // Access iframe document and write content
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Form</title>
              <style>
                body { margin: 0; padding: 0; }
              </style>
            </head>
            <body>
              <div id="form-container-iframe"></div>
              <script>
                window.lmpost = {
                  options: {
                    campaignid: 279611,
                    theme: 'theme5',
                    leadtypeid: 19
                  }
                };
                
                // Enhanced redirect handling
                function handleRedirect(url) {
                  // Send to parent window and prevent default behavior
                  window.parent.postMessage({ 
                    type: 'redirect', 
                    url: url 
                  }, '*');
                  return false;
                }
                
                // Intercept clicks on links
                document.addEventListener('click', function(e) {
                  if (e.target.tagName === 'A' && e.target.href) {
                    e.preventDefault();
                    handleRedirect(e.target.href);
                  }
                }, true);
                
                // Intercept form submissions
                document.addEventListener('submit', function(e) {
                  const form = e.target;
                  // Store form action for potential redirect
                  if (form && form.action) {
                    setTimeout(function() {
                      handleRedirect(form.action);
                    }, 100);
                  }
                }, true);
                
                // Override form submit method
                const originalSubmit = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                  const formAction = this.action;
                  try {
                    originalSubmit.apply(this, arguments);
                  } catch(e) {
                    console.error(e);
                  }
                  
                  // After submission, check for redirects
                  setTimeout(function() {
                    handleRedirect(formAction);
                  }, 200);
                };
                
                // Override all location changing methods
                const originalAssign = window.location.assign;
                window.location.assign = function(url) {
                  return handleRedirect(url);
                };
                
                const originalReplace = window.location.replace;
                window.location.replace = function(url) {
                  return handleRedirect(url);
                };
                
                // Override window.location setting
                let locationDescriptor = Object.getOwnPropertyDescriptor(window, 'location') || 
                                         Object.getOwnPropertyDescriptor(Window.prototype, 'location');
                
                if (locationDescriptor && locationDescriptor.configurable) {
                  let originalSet = locationDescriptor.set;
                  
                  Object.defineProperty(window, 'location', {
                    configurable: true,
                    get: locationDescriptor.get,
                    set: function(url) {
                      return handleRedirect(url);
                    }
                  });
                }
                
                // Override window.open
                window.open = function(url) {
                  return handleRedirect(url);
                };
                
                // Monitor history changes
                const originalPushState = history.pushState;
                history.pushState = function() {
                  originalPushState.apply(this, arguments);
                  handleRedirect(location.href);
                };
                
                const originalReplaceState = history.replaceState;
                history.replaceState = function() {
                  originalReplaceState.apply(this, arguments);
                  handleRedirect(location.href);
                };
                
                // Create a global event listener
                window.addEventListener('beforeunload', function(e) {
                  handleRedirect(location.href);
                  e.preventDefault();
                  e.returnValue = '';
                });
              </script>
              <script src="https://formrequests.com/installment36/1q_pd_im/form-loader.js" async></script>
              
              <!-- Script to monitor height changes and send to parent -->
              <script>
                // Initialize a previous height variable
                let previousHeight = 0;
                
                // Function to check and report height changes
                function reportHeight() {
                  const body = document.body;
                  const html = document.documentElement;
                  
                  // Get the maximum height considering all content
                  const height = Math.max(
                    body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight
                  );
                  
                  // Only send message if height has changed
                  if (height !== previousHeight) {
                    previousHeight = height;
                    window.parent.postMessage({ type: 'resize', height: height }, '*');
                  }
                  
                  // Continue checking
                  setTimeout(reportHeight, 300);
                }
                
                // Start monitoring after form might be loaded
                window.addEventListener('load', function() {
                  // Give some time for the form to fully render
                  setTimeout(reportHeight, 1000);
                });
                
                // Also set up a mutation observer to detect DOM changes
                const observer = new MutationObserver(function() {
                  reportHeight();
                });
                
                // Start observing once the DOM is ready
                document.addEventListener('DOMContentLoaded', function() {
                  observer.observe(document.body, { 
                    childList: true, 
                    subtree: true,
                    attributes: true,
                    characterData: true
                  });
                });
              </script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    }
    
    // Set up event listener for messages from iframe
    const handleMessage = (event: any) => {
      // Check if the message is a resize request
      if (event.data && event.data.type === 'resize') {
        setIframeHeight(event.data.height);
        
        // Update iframe height directly
        const iframe = document.getElementById('formIframe') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
      
      // Handle redirect messages from the iframe
      if (event.data && event.data.type === 'redirect') {
        console.log('Redirect requested to:', event.data.url);
        
        // Immediately redirect the parent window
        try {
          // Option 1: Direct window location change
          window.location.href = event.data.url;
          
          // Option 2: Open in new tab if that's preferred
          // window.open(event.data.url, '_blank');
        } catch (error) {
          console.error('Redirect failed:', error);
        }
      }
    };
    
    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      if (formContainer && iframe) {
        formContainer.removeChild(iframe);
      }
    };
  }, []); // Remove iframeHeight dependency to prevent recreation

  return (
    <>
      <FormDataHandler />
    </>
  );
}