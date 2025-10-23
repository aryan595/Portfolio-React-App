import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return (<footer className="py-4 px-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} DevShowcase.co. All rights reserved.</p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp size={28}/>
        </a>
    </footer>
    );
}