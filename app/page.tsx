import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
  OrganizationSwitcher,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <h3>My Cool App</h3>
      </header>
      <main>
        <p>This is where my app content would go</p>
      </main>
    </>
  );
}
