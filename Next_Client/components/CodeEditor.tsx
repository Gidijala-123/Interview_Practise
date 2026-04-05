'use client';

import dynamic from 'next/dynamic';
import type { Language } from '@/lib/types';

// Monaco is heavy — load it client-side only
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: Language;
  readOnly?: boolean;
  height?: string;
}

export function CodeEditor({ value, onChange, language, readOnly = false, height = '300px' }: CodeEditorProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10">
      <MonacoEditor
        height={height}
        language={language}
        value={value}
        onChange={(v) => onChange(v ?? '')}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          readOnly,
          padding: { top: 12 },
          lineNumbers: 'on',
          wordWrap: 'on',
        }}
      />
    </div>
  );
}
