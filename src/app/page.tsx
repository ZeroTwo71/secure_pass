import { FAQSection } from "@/components/faq-section";
import { ThemeToggle } from "@/components/theme-toggle";
import { PasswordInfoCards } from "@/components/password-info-cards";
import { PasswordWrapper } from "@/components/password-wrapper";
import { Shield, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with theme toggle */}
      <header className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <h1 className="font-bold text-xl">SecurePass</h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <section className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Generate Strong, Secure Passwords
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Create unique passwords that are virtually impossible to crack while being easy to use.
            All generation happens in your browser for maximum privacy and security.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm mb-10 text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>Client-side generation — your passwords never leave your device</span>
          </div>

          {/* Password Generator and QR Code */}
          <PasswordWrapper />
        </section>

        {/* Password Info Cards */}
        <section className="py-12 flex flex-col items-center">
          <PasswordInfoCards />
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 flex flex-col items-center">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center text-sm text-muted-foreground space-y-2">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/ZeroTwo71"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZeroTwo71
            </a>
            . All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind, ShadCn and Vercel.</p>
        </div>
      </footer>
    </div>
  );
}
