import { NextSeo } from 'next-seo';
import Head from 'next/head'

export default function Meta ({
  name = 'YYZhacks',
  desc =  "🧑‍💻 A 12 hour in-person high school hackathon in Missisauga & Peel Region",
  image = "https://podcast.hackclub.com/cover.png",
  imagealt = "Image for Website Meta"
}) {
  return (
    <>
      <NextSeo
        title={name}
        description={desc}
        openGraph={{
          url: 'https://yyzhacks.ca',
          title: {name},
          description: {desc},
          images : [
            {
              url: {image}
            }
          ]
        }}
}