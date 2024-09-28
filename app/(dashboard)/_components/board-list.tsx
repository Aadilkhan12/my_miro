"use client";

import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO: change for API call
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }
  if (!data?.length && query.favorites) {
    return <div>No favorites</div>;
  }
  if (!data.length) {
    return <div>No board at all</div>;
  }
  return <div>{JSON.stringify(query)}</div>;
};
