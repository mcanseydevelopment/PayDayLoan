"use client";
import { useEffect } from 'react';
// import FormDataHandler from './FormDataHandler';

declare global {
  interface Window {
    lmpost: {
      options?: {
        campaignid: number;
        theme: string;
        leadtypeid: number;
      };
    };
  }
}

export default function MyForm() {
  useEffect(() => {
    // Set up MutationObserver to detect and remove the unwanted style tags
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            // Check if the added node is a style tag
            if (node.nodeName === 'STYLE') {
              const styleContent = (node as HTMLStyleElement).textContent || '';
              
              // Check if it contains the aggressive reset CSS
              if (styleContent.includes('div, span, object, iframe') && 
                  styleContent.includes('border: 0;margin: 0;padding: 0')) {
                
                console.log('Removing aggressive CSS reset style tag');
                node.parentNode?.removeChild(node);
                
                // Add scoped styles for the form only
                const scopedStyle = document.createElement('style');
                scopedStyle.textContent = `
                  /* Scoped reset styles that only apply to the form */
                  /* Preserve jsf-specific styles */
                  [class*="jsf"] {
                    box-sizing: border-box;
                  }
                  
                  [class*="jsf"] :focus {
                    outline: 0;
                  }
                `;
                document.head.appendChild(scopedStyle);
              }
            }
          });
        }
      });
    });

    // Start observing the head for style tag additions
    observer.observe(document.head, { 
      childList: true,
      subtree: true 
    });

    // Initialize the form
    window.lmpost = {
      options: {
        campaignid: 296709,
        theme: 'theme5',
        leadtypeid: 19
      }
    };

    const script = document.createElement('script');
    script.src = 'https://formrequests.com/installment36/1q_pd_im/form-loader.js';
    script.async = true;
    
    // Create the form container if it doesn't exist
    let formContainer = document.getElementById('form-container');
    if (!formContainer) {
      formContainer = document.createElement('div');
      formContainer.id = 'form-container';
      formContainer.style.width = '100%';
      formContainer.style.minHeight = '500px';
      formContainer.style.backgroundColor = '#fff';
      formContainer.style.borderRadius = '8px';
      
      const currentNode = document.currentScript || document.querySelector('script');
      if (currentNode && currentNode.parentNode) {
        currentNode.parentNode.insertBefore(formContainer, currentNode);
      } else {
        document.body.appendChild(formContainer);
      }
    }
    
    formContainer.appendChild(script);

    // Cleanup function
    return () => {
      observer.disconnect();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      {/* <FormDataHandler /> */}
    </>
  );
}