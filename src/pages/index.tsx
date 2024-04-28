import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  useEffect(() => {
      if (!router.isReady) return;
      router.push('home')
  }, [router])
  return (
    <>
     
      
      
    </>
  );
}
