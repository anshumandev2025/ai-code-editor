"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [blockingLoading, setBlockingLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const [blockingResult, setBlockingResult] = useState<string | null>(null);
  const [backgroundResult, setBackgroundResult] = useState<string | null>(null);
  const handleBlockingClick = async () => {
    setBlockingLoading(true);
    const response = await fetch("/api/demo/blocking", {
      method: "POST",
    });
    const text = await response.text();
    setBlockingLoading(false);
    setBlockingResult(text);
  };

  const handleBackgroundClick = async () => {
    setBackgroundLoading(true);
    const response = await fetch("/api/demo/background", {
      method: "POST",
    });
    const data = await response.json();
    setBackgroundLoading(false);
    setBackgroundResult(data.status);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-20">
        <div>
          <Button disabled={blockingLoading} onClick={handleBlockingClick}>
            {blockingLoading ? "Loading..." : "Blocking"}
          </Button>
          {blockingResult && <div>{blockingResult}</div>}
        </div>
        <div>
          <Button disabled={backgroundLoading} onClick={handleBackgroundClick}>
            {backgroundLoading ? "Loading..." : "Background"}
          </Button>
          {backgroundResult && <div>{backgroundResult}</div>}
        </div>
      </div>
    </main>
  );
}
