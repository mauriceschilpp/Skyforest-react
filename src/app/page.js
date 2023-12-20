"use client";
import React from 'react';
import MainLayout from "@/components/MainLayout/MainLayout";
import dynamic from 'next/dynamic';


const MapWithNoSSR = dynamic(() => import('../components/MapComponent/MapComponent'), {
  ssr: false
});

export default function Home() {
  return (
      <div className="flex h-screen">
        <MainLayout className={"sidebar"}/>
        <MapWithNoSSR className={"mapContainer"}/>
      </div>

  )
}
