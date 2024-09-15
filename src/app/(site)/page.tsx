import TitleSection from '@/components/landing-page/title-section'
import Image from 'next/image'
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import React from 'react'
import { CLIENTS, USERS } from '@/lib/constants';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const page = () => {
  return (
    <> 
    <section className="mt-10 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center md:justify-center">
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
          subTitle=""
        />
        <div className="mt-6 rounded-xl bg-white bg-gradient-to-r from-primary to-brand-primaryBlue p-[2px] sm:w-[300px]">
          <button
            // variant="secondary"
            className="w-full rounded-[10px] bg-background p-6 text-2xl"
          >
            Get Cypress Free
          </button>
        </div>
        <div className="relative ml-[-50px] mt-[-40px] flex w-[750px] items-center justify-center sm:ml-0 sm:w-full md:mt-[-90px]">
          <Image src={Banner} alt="Application Banner" />
          <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
        </div>

         {/* sliding animating logo icon */}
        <section className="relative">
        <div className="after:content[''] before:content[''] flex overflow-hidden before:absolute
         before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-20 before:bg-gradient-to-r 
         before:from-background before:to-transparent after:absolute after:bottom-0 after:right-0 
         after:top-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent
          before:dark:from-brand-dark after:dark:from-brand-dark">
          {[...Array(2)].map((arr) => (
            <div key={arr} className="animate-slide flex flex-nowrap">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative m-20 flex w-[200px] shrink-0 items-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="max-w-none object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* Calender section  */}
      <section className="relative flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="top-22 absolute -z-10 h-32 w-[30%] rounded-full bg-brand-primaryPurple/50 blur-[120px]" />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subTitle="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        <div className="relative mt-10 flex max-w-[450px] items-center justify-center rounded-2xl border-8 border-washed-purple-300 border-opacity-10 sm:ml-0">
          <Image src={Cal} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
            {/* review by users section */}
            <section className="relative">
        <div className="absolute top-56 -z-10 h-32 w-full rounded-full bg-brand-primaryPurple/50 blur-[120px]" />
        <div className="mt-20 flex flex-col overflow-visible overflow-x-hidden px-4 sm:px-6">
          <TitleSection
            title="Keep track of your meetings all in one place"
            subTitle="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
            pill="Features"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused",
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {" "}
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      </section>
      </>
  )
}

export default page