import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Quote } from 'lucide-react';

interface Source {
  content: string;
  metadata?: Record<string, any>;
}

interface SourceDisplayProps {
  sources: Source[];
}

export function SourceDisplay({ sources }: SourceDisplayProps) {
  if (sources.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        <FileText className="w-12 h-12 mx-auto mb-4 text-primary/30" />
        <h3 className="text-lg font-medium mb-2">Source Material</h3>
        <p className="text-sm">
          Source text will appear here after you ask a question.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Quote className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">Cited Sources</h2>
        <Badge variant="secondary" className="ml-auto">
          {sources.length} source{sources.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      <div className="space-y-4">
        {sources.map((source, index) => (
          <Card key={index} className="source-card">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-medium text-sm text-primary">
                Source {index + 1}
              </h3>
              {source.metadata?.source && (
                <Badge variant="outline" className="text-xs">
                  {source.metadata.source}
                </Badge>
              )}
            </div>
            
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>{source.content}</p>
            </div>
            
            {source.metadata && Object.keys(source.metadata).length > 1 && (
              <div className="mt-3 pt-3 border-t">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(source.metadata).map(([key, value]) => {
                    if (key === 'source') return null;
                    return (
                      <Badge key={key} variant="secondary" className="text-xs">
                        {key}: {String(value)}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}