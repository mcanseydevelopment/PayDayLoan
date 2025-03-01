"use client";
import { useEffect } from 'react';
import FormDataHandler from './FormDataHandler';

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
    window.lmpost = {
      options: {
        campaignid: 279611,
        theme: 'theme5',
        leadtypeid: 19
      }
    };

    const script = document.createElement('script');
    script.src = 'https://formrequests.com/installment36/1q_pd_im/form-loader.js';
    script.async = true;
    
    // Add container div for the form
    const formContainer = document.getElementById('form-container');
    if (formContainer) {
      formContainer.appendChild(script);
    } else {
      document.body.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <FormDataHandler />
    </>
  );
}