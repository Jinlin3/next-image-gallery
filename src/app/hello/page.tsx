import { useEffect } from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>Hello, NextJS 13</div>
  );
}