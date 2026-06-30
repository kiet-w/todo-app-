import React, { ReactNode } from 'react';

interface MainTemplateProps {
  header: ReactNode;
  controls: ReactNode;
  content: ReactNode;
}

export function MainTemplate({ header, controls, content }: MainTemplateProps) {
  return (
    <main className="template-main">
      <div className="template-container">
        {header}
        <section className="template-controls">
          {controls}
        </section>
        <section className="template-content">
          {content}
        </section>
      </div>
    </main>
  );
}
