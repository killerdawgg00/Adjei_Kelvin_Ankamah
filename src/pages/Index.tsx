import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollSection } from '@/components/ScrollSection';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollSection>
            <div className="space-y-8">
              <Avatar className="w-32 h-32 mx-auto border-4 border-primary/30 shadow-lg shadow-primary/20">
                <AvatarImage src="/00.png" alt="Profile" />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  Adjei Kelvin Ankamah
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                  Adjei Kelvin Ankamah
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Web and Mobile App Developer, creative mind and problem solver with  a Big God.
                </p>
                <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto">
                  Crafting digital experiences with modern technologies and innovative solutions.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:keladjei515@yahoo.com'}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-left">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a passionate developer who loves creating innovative solutions that make a difference. 
                    With expertise in modern web technologies, I focus on building user-centric applications 
                    that are both beautiful and functional.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-card/50 rounded-lg border border-border/30">
                      <div className="text-2xl font-bold text-accent">10+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                  <div className="space-y-3">
                    {['React/Next.js', 'TypeScript', 'JavaScript', 'Python', 'FireBase', 'MongoDB', 'Tailwind', 'HTML', 'CSS'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between p-3 bg-card/30 rounded-lg border border-border/20">
                        <span className="font-medium">{skill}</span>
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${85 + index * 2}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A showcase of my completed work and creative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollSection delay={100}>
                <ProjectCard
                  title="Career Atlas"
                  description="A Platform for career development and job search encased for both Employers and Jobseekers."
                  status="completed"
                  technologies={['HTML', 'CSS', 'PostgreSQL']}
                  isPlaceholder={true}
                  image="/offline.jpg"
                />
              </ScrollSection>
              
              <ScrollSection delay={200}>
                <ProjectCard
                  title="EchoBank.AI"
                  description="An Ai-Powered Bank Management System."
                  status="completed"
                  technologies={['Next.js', 'TypeScript', 'WebSocket']}
                  isPlaceholder={true}
                  image="/offline.jpg"
                />
              </ScrollSection>
              
              <ScrollSection delay={300}>
                <ProjectCard
                  title="Office Comms."
                  description="An online Collaborative Communication Platform for office use."
                  status="completed"
                  technologies={['React', 'D3.js', 'Python', 'FastAPI']}
                  isPlaceholder={true}
                  image="/offline.jpg"
                />
              </ScrollSection>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Projects in Development Section */}
      <section id="development" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <ScrollSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">In Development</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Current projects and exciting ideas coming to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollSection delay={100}>
                <ProjectCard
                  title="Hira Prep"
                  description="An Ai-powered Interview webapp, for jobseekers to prepare for Tech job interviews."
                  status="development"
                  technologies={['React', 'FireBase', 'Vapi', 'Tailwind']}
                  isPlaceholder={true}
                  image="/Hira Prep.png"
                />
              </ScrollSection>
              
              <ScrollSection delay={200}>
                <ProjectCard
                  title="Adventuroo"
                  description="An Adventure Travel mobile app, for users to explore and enjoy their travels."
                  status="development"
                  technologies={['Supabase', 'Nodejs', 'SwiftUI']}
                  isPlaceholder={true}
                  image="/Adventuroo.png"
                />
              </ScrollSection>
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <ScrollSection>
            <div className="space-y-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </div>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Ready to turn your ideas into reality? I'd love to hear about your project.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => window.location.href = 'mailto:keladjei515@yahoo.com'}
              >
                Get In Touch
              </Button>
            </div>
          </ScrollSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
