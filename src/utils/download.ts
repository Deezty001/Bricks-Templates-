/**
 * Triggers a browser download of a Bricks template as a .json file.
 */
export function downloadTemplate(title: string, content: string) {
  try {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Clean the filename
    const filename = title.toLowerCase().replace(/[^a-z0-0]/g, '-').replace(/-+/g, '-') + '.json';
    
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log(`Successfully triggered download for: ${filename}`);
  } catch (error) {
    console.error('Failed to trigger download:', error);
    alert('Failed to download template file.');
  }
}
