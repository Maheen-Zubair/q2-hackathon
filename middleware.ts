
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Apna Clerk Sign-Up URL yahan replace karein
const CLERK_SIGN_UP_URL = "https://modest-leech-95.accounts.dev/sign-in"; 

const isCartRoute = createRouteMatcher(["/shoppingCart"]);
// const isAdminRoute = createRouteMatcher(["/admin-dashboard"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Agar user sign-in nahi hai aur /cart route par hai, toh redirect karein
  if (isCartRoute(req) && !userId) {
    return new Response(null, {
      status: 307,
      headers: {
        Location: CLERK_SIGN_UP_URL,
      },
    });
  }


});

export const config = {
  matcher: [
    "/shoppingCart",
    "/((?!.*\\..*|_next).*)", 
  ],
};
