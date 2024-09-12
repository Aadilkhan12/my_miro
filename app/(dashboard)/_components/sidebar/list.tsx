"use client";

import { useOrganizationList } from "@clerk/nextjs";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  {
    console.log(userMemberships.data);
  }
  return (
    <ul className="space-y-4">
      
      {userMemberships.data?.map((mem) => (
        <p key={mem.id}>{mem.organization.name}</p>
      ))}
    </ul>
  );
};
