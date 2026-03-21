/**
 * Robustly copies text to the clipboard with fallback support for older browsers
 * or non-secure contexts.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  console.log('Attempting to copy text to clipboard...');
  
  // 1. Try modern navigator.clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Clipboard copy successful via navigator.clipboard');
      return true;
    } catch (err) {
      console.warn('navigator.clipboard failed, trying fallback:', err);
    }
  }

  // 2. Fallback to execCommand('copy')
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Ensure textarea is not visible but part of the DOM
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    if (successful) {
      console.log('Clipboard copy successful via fallback execCommand');
      return true;
    }
  } catch (err) {
    console.error('Fallback clipboard copy failed:', err);
  }

  return false;
}
