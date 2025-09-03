import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'completed' | 'development';
  technologies: string[];
  isPlaceholder?: boolean;
  image?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  status, 
  technologies, 
  isPlaceholder = false,
  image
}: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-muted/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 relative z-10">
        {status === 'development' && (
          <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full border border-accent/30">
            In Development
          </div>
        )}
        
        <div className="space-y-4">
          {/* Project Image Placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center border border-border/30 group-hover:border-primary/30 transition-colors overflow-hidden">
            {isPlaceholder ? (
              <img 
                src={image || '/placeholder-image.png'} 
                alt={`${title} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder-image.png';
                }}
              />
            ) : (
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-primary/40 rounded" />
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};