"use client";
import Hero from "@/components/main/Hero";
import { usePreloadImages } from "@/constants/heroImages";
import { FloatingDock } from "@/components/main/Nav";
import Loader from "@/components/main/Loader";
import { useState } from "react";
import { PreLoader } from "@/components/main/preLoader/PreLoader";

const Home = () => {
  const { isLoading, loadedImages } = usePreloadImages();
  const [isLoadingPreLoader, setIsLoadingPreLoader] =
    useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 relative">
      <PreLoader
        onLoadingComplete={() =>
          setIsLoadingPreLoader(() => false)
        }
      />
      {!isLoadingPreLoader && isLoading && (
        <div className="relative min-h-screen ">
          <Loader></Loader>
        </div>
      )}
      {!isLoadingPreLoader && !isLoading && (
        <>
          <div className="top-[85vh] left-[50vw] -translate-x-1/2 z-10 fixed">
            <FloatingDock></FloatingDock>
          </div>
          <Hero products={loadedImages} />
        </>
      )}
    </div>
  );
};

export default Home;
