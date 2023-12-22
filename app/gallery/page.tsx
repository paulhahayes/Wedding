//TODO pagination, + scroll,, re-render on upload / delete
"use client";
import Content from "./Content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default async function GalleryPage() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </>
  );
}
