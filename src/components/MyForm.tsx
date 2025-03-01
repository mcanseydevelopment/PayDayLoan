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
        const iframe = document.getElementById('formIframe');
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
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