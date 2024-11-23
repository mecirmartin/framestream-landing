import Image from "next/image"

import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { SectionTitle } from "@/components/SectionTitle"
import { Benefits } from "@/components/Benefits"
import { Video } from "@/components/Video"
import { Testimonials } from "@/components/Testimonials"
import { Faq } from "@/components/Faq"
import { Cta } from "@/components/Cta"
import schemeImage from "../../public/img/framestream-scheme.png"

import { benefitOne, benefitTwo } from "@/components/data"
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="What is framestream"
        title="Framestream enables new marketing strategy using personalized shorts"
      ></SectionTitle>
      <Image
        src={schemeImage}
        className={"object-cover"}
        alt="Hero Illustration"
        loading="eager"
        placeholder="blur"
      />

      <SectionTitle
        preTitle="Framestream Benefits"
        title=" Why should you use short personalized video to interact with you customer"
      ></SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="Watch a video"
        title="Speak one-to-one with each of your customers using personalized video"
      >
        There is nothing better than one to one chat with your customer.
        Framestream will help you deliver this experience at scale.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />
      {/* 
      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
      <Cta />
    </Container>
  )
}
