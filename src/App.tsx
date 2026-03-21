import { useState, useMemo, useEffect } from 'react';
import { Layers, Plus } from 'lucide-react';
import { loadTemplates, saveTemplates } from './data/mockData';
import { Sidebar } from './components/Sidebar';
import { TemplateGrid } from './components/TemplateGrid';
import { TemplateModal } from './components/TemplateModal';
import { AddTemplateModal } from './components/AddTemplateModal';
import type { Template } from './data/mockData';

export default function App() {
  const [templates, setTemplates] = useState<Template[]>(() => loadTemplates());
  const [selectedWebsite, setSelectedWebsite] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTemplate, setActiveTemplate] = useState<Template | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    saveTemplates(templates);
  }, [templates]);

  const websites = useMemo(() => ['All', ...new Set(templates.map(t => t.website))], [templates]);
  const categories = useMemo(() => ['All', ...new Set(templates.map(t => t.category))], [templates]);

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchWebsite = selectedWebsite === 'All' || t.website === selectedWebsite;
      const matchCategory = selectedCategory === 'All' || t.category === selectedCategory;
      return matchWebsite && matchCategory;
    });
  }, [templates, selectedWebsite, selectedCategory]);

  const handleAddTemplate = (newTemplate: Omit<Template, 'id' | 'createdAt'>) => {
    const templateWithId: Template = {
      ...newTemplate,
      id: crypto.randomUUID(),
      createdAt: Date.now()
    };
    setTemplates(prev => [templateWithId, ...prev]);
  };

  const handleDeleteTemplate = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this template?')) {
      setTemplates(prev => prev.filter(t => t.id !== id));
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="glass-panel" style={{ margin: '1rem', padding: '1.25rem 2rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--accent-glow)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
            <Layers size={24} color="var(--accent-secondary)" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Bricks Vault</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Your premium component library</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="glass-pill"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.75rem 1.5rem',
            background: 'var(--accent-glow)',
            color: '#fff',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <Plus size={20} /> New Template
        </button>
      </header>

      {/* Main Layout */}
      <main className="app-main">
        <Sidebar 
          websites={websites} 
          categories={categories}
          selectedWebsite={selectedWebsite}
          selectedCategory={selectedCategory}
          onSelectWebsite={setSelectedWebsite}
          onSelectCategory={setSelectedCategory}
        />
        <TemplateGrid 
          templates={filteredTemplates} 
          onSelectTemplate={setActiveTemplate} 
          onDeleteTemplate={handleDeleteTemplate}
        />
      </main>

      {/* Add Template Modal */}
      {isAddModalOpen && (
        <AddTemplateModal 
          onAdd={handleAddTemplate} 
          onClose={() => setIsAddModalOpen(false)} 
        />
      )}

      {/* Full Demo Modal */}
      {activeTemplate && (
        <TemplateModal 
          template={activeTemplate} 
          onClose={() => setActiveTemplate(null)} 
        />
      )}
    </div>
  );
}
