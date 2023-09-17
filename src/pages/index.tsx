import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const user = useUser;
  return (
    <>
      <Head>
        <title>Addicteds App</title>
        <meta name="No more rekt app" content="Curated info for web3" />
        
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#7de692] to-[#a95bf7]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Community <span className="text-[hsl(248,16%,45%)]"> Web3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-20">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/login"
              target="_blank"
            >
              <h3 className="text-2xl text-[#3a3d3a] font-bold">Log in for the alpha</h3>
               <div className="text-lg">
              Learning together and sharing paths that worked for to uplift us all. Security is key. 
              Upvote and upload content that has helped you along the way. Share the hard learned horror stories.
              Get rewarded for sharing with your peers.

               </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/"
              target="_blank"
            >
              <h3 className="text-2xl  text-[#3a3d3a] font-bold">Examples of content</h3>
              <div className="text-lg">
              Together, we empower one another through story-sharing and content upvoting. 
              Each day, the top 5 links, as determined by our community, will be spotlighted on our Twitter account 
              for wider exposure."
                
                
              </div>
     
     
            </Link>
          </div>
        </div>
          <div className="rounded-xl bg-slate-500 hover: bg-white/60">
            
    
  
              {!user && <SignInButton />}
              {!!user && <SignOutButton />}
          </div>
               
      </main>
    </>
  );
}
