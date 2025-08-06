import { Brain, Activity } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Brain className="w-8 h-8 text-primary" />
              <Activity className="w-4 h-4 text-accent absolute -bottom-1 -right-1" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">MED AI</h1>
            <p className="text-sm text-muted-foreground">
              Your AI-Powered Medical Research Assistant
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground max-w-2xl">
            Ask any question about the loaded medical knowledge base. Get comprehensive answers 
            backed by source citations from peer-reviewed medical literature.
          </p>
        </div>
      </div>
    </header>
  );
}