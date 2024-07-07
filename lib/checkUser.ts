import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  // user we get from clerk
  const user = await currentUser();

  // check if current user is logged in
  if (!user) return null;

  // Check if user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: { clerkUserId: user.id }
  });

  // If user is in db then return user
  if (loggedInUser) return loggedInUser;

  // if not in db create the new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  return newUser;
};
