// src/utils/scriptLoader.ts
export function loadScript(url: string, target: HTMLElement): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error for ${url}`));
      
      target.appendChild(script);
    } catch (error) {
      reject(error);
    }
  });
}