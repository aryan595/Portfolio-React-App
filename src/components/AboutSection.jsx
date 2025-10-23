import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">A Passionate Web developer</h3>
                        <p className="text-muted-foreground">
                            I'm a passionate and aspiring Full Stack Developer constantly dedicated to honing my craft. 
                            I enjoy turning creative ideas into functional, clean code and am always eager to dive
                            into new frameworks and challenging problems.
                        </p>
                        <p className="text-muted-foreground">
                            I focus on creating great user experiences by tackling complexity and building responsive, 
                            scalable applications from the ground up. I believe thoughtful code can truly elevate a product, 
                            and I'm committed to bringing exciting concepts into clean, functional reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                            <a href="notfound" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-center">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">Creating responsive and user-friendly websites using the latest technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                    <p className="text-muted-foreground">Designing user-friendly interfaces and experiences that delight users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> 
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foreground">Leading projects from conception to completion, ensuring timely delivery and stakeholder satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};