/**
 * Bricks JSON Transformer
 * Handles recursive modification of Bricks template data.
 */

export interface TransformOptions {
  cleanVersion?: boolean;
  customClasses?: string;
}

export function transformBricksJson(jsonString: string, options: TransformOptions): string {
  try {
    let data = JSON.parse(jsonString);
    
    // 1. Process recursively if cleanVersion is requested
    if (options.cleanVersion) {
      data = processElements(data);
    }

    // 2. Add custom classes to the root element(s)
    if (options.customClasses) {
      const classesToAdd = options.customClasses.split(' ').filter(c => c.trim());
      if (Array.isArray(data)) {
        data.forEach(el => injectClasses(el, classesToAdd));
      } else {
        injectClasses(data, classesToAdd);
      }
    }

    return JSON.stringify(data);
  } catch (e) {
    console.error('Bricks Transformation Failed:', e);
    return jsonString;
  }
}

function processElements(el: any): any {
  if (!el || typeof el !== 'object') return el;

  // Handle styles
  if (el.settings) {
    const s = el.settings;

    // Strip Colors
    delete s.color;
    delete s.backgroundColor;
    delete s.borderColor;

    // Strip Typography
    delete s.fontFamily;
    delete s.fontSize;
    delete s.fontWeight;
    delete s.lineHeight;
    delete s.letterSpacing;
    delete s.textAlign;
    delete s.textTransform;

    // Strip Spacing
    delete s.margin;
    delete s.padding;
    ['Top', 'Right', 'Bottom', 'Left'].forEach(dir => {
      delete s[`margin${dir}`];
      delete s[`padding${dir}`];
    });
  }

  // Handle children recursively
  if (el.children && Array.isArray(el.children)) {
    el.children = el.children.map((child: any) => processElements(child));
  }

  return el;
}

function injectClasses(el: any, classes: string[]) {
  if (!el.settings) el.settings = {};
  if (!el.settings._classes) el.settings._classes = [];
  
  classes.forEach(cls => {
    if (!el.settings._classes.includes(cls)) {
      el.settings._classes.push(cls);
    }
  });
}
