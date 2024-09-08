import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\.[\\w]+|_next).*)", // Corrected regex for excluding files with extensions
    "/",                          // Root route
    // Always run for API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
