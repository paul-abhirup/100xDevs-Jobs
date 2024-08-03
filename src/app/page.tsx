import "@radix-ui/themes/styles.css";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import Jobs from "@/app/components/Jobs";
import Hero from "@/app/components/Hero";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { addOrgAndUserData, JobModel } from "@/models/Job";
import { getUser } from "@workos-inc/authkit-nextjs";
import mongoose from "mongoose";



import { Libre_Franklin } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";

// Libre_Franklin({
//   subsets: ["latin"],
//   display: "swap",
// });

// ibm_plex_sans({
//   subsets: ["latin"],
//   display: "swap",
// });



export default async function Home() {
  const { user } = await getUser();
  await mongoose.connect(process.env.MONGO_URI as string);
  const latestJobs = await addOrgAndUserData(
    await JobModel.find({}, {}, { limit: 5, sort: "-createdAt" }),
    user
  );
  return (
    <>
      <Theme>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <Hero />
            <section className="py-12 md:py-20 px-6 md:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Latest Job Postings
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-2006.png"
                            width="40"
                            height="40"
                            alt="Company Logo"
                            className="w-8 h-8 object-contain"
                            style={{ aspectRatio: "40/40", objectFit: "cover" }}
                          />
                          <span className="text-sm font-medium">
                            Netflix Inc.
                          </span>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <h3 className="text-lg font-bold">
                        Senior Software Engineer
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-sm">San Francisco, CA</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSignIcon className="w-4 h-4" />
                        <span className="text-sm">$120,000 - $150,000</span>
                      </div>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Koenigsegg-logo-1994-2048x2048.png/600px-Koenigsegg-logo-1994-2048x2048.png?20220419014801"
                            width="40"
                            height="40"
                            alt="Company Logo"
                            className="w-8 h-8 object-contain"
                            style={{ aspectRatio: "40/40", objectFit: "cover" }}
                          />
                          <span className="text-sm font-medium">
                            Koenigsegg
                          </span>
                        </div>
                        <Badge variant="secondary">Part-time</Badge>
                      </div>
                      <h3 className="text-lg font-bold">
                        Marketing Coordinator
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-sm">New York, NY</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSignIcon className="w-4 h-4" />
                        <span className="text-sm">$50,000 - $65,000</span>
                      </div>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png"
                            width="40"
                            height="40"
                            alt="Company Logo"
                            className="w-8 h-8 object-contain"
                            style={{ aspectRatio: "40/40", objectFit: "cover" }}
                          />
                          <span className="text-sm font-medium">BMW</span>
                        </div>
                        <Badge>Full-time</Badge>
                      </div>
                      <h3 className="text-lg font-bold">Product Designer</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPinIcon className="w-4 h-4" />
                        <span className="text-sm">Seattle, WA</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSignIcon className="w-4 h-4" />
                        <span className="text-sm">$80,000 - $100,000</span>
                      </div>
                      <Button className="w-full">Apply Now</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-muted text-muted-foreground py-6 px-6 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm">
                &copy; 2024 100xDevs. All rights reserved.
              </p>
              <nav className="flex items-center gap-4">
                <Link href="#" className="hover:underline" prefetch={false}>
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Terms of Service
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Contact Us
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </Theme>
    </>
  );
}

// this function creates the svg icons6
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

