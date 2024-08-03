import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
      <Link href="#" className="text-xl font-bold" prefetch={false}>
        100xDevs Job Portal
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="#" className="hover:underline" prefetch={false}>
          Bug Bounty
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Find Jobs
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Companies
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Contact
        </Link>
      </nav>
      <nav className="flex gap-2">
        {!user && (
          <Link
            className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4"
            href={signInUrl}
          >
            Login
          </Link>
        )}
        {user && (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="rounded-md bg-gray-200 py-1 px-2 sm:py-2 sm:px-4"
            >
              Logout
            </button>
          </form>
        )}
        <Button variant="secondary" className="hidden md:inline-flex">
          <Link
            className="rounded-md  bg-gray-600 text-white"
            href={"/new-listing"}
          >
            Post a job
          </Link>{" "}
        </Button>
      </nav>
    </header>
  );
}
