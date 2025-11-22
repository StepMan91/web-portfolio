export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Bastien Caspani Portfolio. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
