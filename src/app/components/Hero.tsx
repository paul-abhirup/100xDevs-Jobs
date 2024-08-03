import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Find Your Dream Job
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground">
            Search through thousands of job listings and find the perfect
            opportunity for you.
          </p>
          <form className="flex items-center gap-2 bg-primary-foreground rounded-md shadow-md">
            <Input
              type="search"
              placeholder="Job title, keywords or company"
              className="flex-1 px-4 py-3 rounded-md focus:outline-none"
            />
            <Button className="px-6 py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
              Search
            </Button>
          </form>
        </div>
      </section>
      <section className="py-12 md:py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Browse Job Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <BriefcaseIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Engineering</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <CodeIcon className="w-8 h-8" />
              <span className="text-sm font-medium">IT & Software</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <ClipboardIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Marketing</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <BriefcaseIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Finance</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <ApertureIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Design</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <UsersIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Human Resources</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <BriefcaseIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Sales</span>
            </Link>
            <Link
              href="#"
              className="bg-muted rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <ClipboardIcon className="w-8 h-8" />
              <span className="text-sm font-medium">Administrative</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-6 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured Companies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link
              href="#"
              className="bg-background rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width="80"
                height="80"
                alt="Company Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium">Netflix Inc.</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Koenigsegg-logo-1994-2048x2048.png/600px-Koenigsegg-logo-1994-2048x2048.png?20220419014801"
                width="80"
                height="80"
                alt="Company Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium">Koenigsegg</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Stark_Industries_Logo.png"
                width="80"
                height="80"
                alt="Company Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium">Stark Industries</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-md p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
              prefetch={false}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png"
                width="80"
                height="80"
                alt="Company Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-sm font-medium">BMW</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ApertureIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
