"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Entry from "@/components/entry";
import Avatar from "@/components/avatar";
import { useState, useEffect } from "react";
import React from "react";
import "./page.css";
// import ReactWeather, { useOpenWeather } from 'react-open-weather';

function HomePage() {
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: "YOUR-API-KEY",
  //   lat: "48.137154",
  //   lon: "11.576124",
  //   lang: "en",
  //   unit: "metric", // values are (metric, standard, imperial)
  // });

  const SpotifyEmbed = () => {
    return (
      <>
        <Card className="h-3/4">
          <CardHeader>
            <CardTitle>What I am Listening to right now</CardTitle>
          </CardHeader>
          <CardContent className="mt-2">
            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/7GXcuBE3Aiu8gUJjX8PSlV?utm_source=generator&theme=0"
              width="300"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
            ></iframe>
            {/* <iframe
            title="Spotify Embed"
            src="https://open.spotify.com/embed/track/7GXcuBE3Aiu8gUJjX8PSlV?utm_source=generator&theme=0"
            width="300"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="eager"
          ></iframe> */}
          </CardContent>
        </Card>
      </>
    );
  };

  return (
    <div className="p-1">
      <div className="text-lg pb-2 font-semibold">Welcome</div>

      <div className="gap-6 flex items-center">
        <Avatar />
        <SpotifyEmbed />
        {/* <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Munich"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast
        /> */}
      </div>
    </div>
  );
}

export default HomePage;
