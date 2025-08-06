import { useState } from 'react';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { SourceDisplay } from '@/components/SourceDisplay';

interface Source {
  content: string;
  metadata?: Record<string, any>;
}

const Index = () => {
  const [sources, setSources] = useState<Source[]>([]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 flex">
        {/* Chat Interface - Left Column */}
        <div className="flex-1 lg:flex-[2] border-r border-border">
          <ChatInterface onSourcesUpdate={setSources} />
        </div>
        
        {/* Source Display - Right Column */}
        <div className="hidden lg:block lg:flex-1 bg-muted/20">
          <SourceDisplay sources={sources} />
        </div>
      </div>
      
      {/* Mobile Source Display */}
      <div className="lg:hidden border-t border-border bg-muted/20">
        <SourceDisplay sources={sources} />
      </div>
    </div>
  );
};

export default Index;
