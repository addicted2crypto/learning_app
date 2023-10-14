import { ClerkProvider } from "@clerk/nextjs";
import { type Session } from "next-auth";
import { type AppType } from "next/app";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider {...pageProps}>
      {/* clerk history */}
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default MyApp;
