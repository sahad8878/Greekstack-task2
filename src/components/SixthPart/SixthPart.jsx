import React from "react";
import FeedbackCard from "../Card/FeedbackCard";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SixthPart = () => {
  return (
    <div className=" flex  justify-center items-center px-10 sm:px-10  md:px-28 lg:px-48 py-10 sm:py-24 mt-10 sm:mt-20 bg-[#03081c]">
      <div className=" ">
        <div className="flex flex-col md:flex-row justify-between mb-10 sm:mb-14 text-white">
          <div className="space-y-4">
            <h1 className="font-semibold font-serif text-2xl sm:text-4xl">
              Hear it from the <br />
              Learners
            </h1>
          </div>
          <div className=" flex flex-col justify-end items-center mt-5 md:mt-0 ">
            <span className="text-sm text-green-500 hover:text-white cursor-pointer font-medium items-center">
              See more <FontAwesomeIcon icon={faArrowRight} size="xs" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  ">
          <div className="space-y-3">
            <FeedbackCard
              name={"Adit Chouhan"}
              post={"VP Business Operations"}
              description={`  Coming out of your comfort zone and joining a skill enhancement
                course/ training doesnt come easy to many people. Specially, if
                you are already in a senior role with a team that stays on top
                of things already. I, however, decided to break that mental
                barrier and joined the #PerformanceMarketing Camp by
                GrowthSchool, an #edtech venture by Vaibhav Sisinty . And, it
                was a pleasantly surprising as well as an extremely rewarding
                experience for me.`}
            />
          </div>
          <div className="space-y-8">
            <FeedbackCard
              name={"Jiya Ahuja"}
              post={"Content Writer"}
              description={`Optimized my profile and can definitely see the results. The
               detailing of the course is amazing.
               All the concepts have been taught
              in depth. Thank you Vaibhav Sisinty
               and GrowthSchool for curating
              these courses and making our
              career and LinkedIn reach better.`}
            />
            <FeedbackCard
              name={"Sourav N."}
              post={"Product Manager"}
              description={`Sarosh was one of the most
              structured, precise and well
              rounded PMs I had the pleasure of
              interacting. He was immensely
              helpful, to gauge the needs to PMs
              in the new digital product era.
              Sarosh uses relevant frameworks,
              situations, and use cases to teach
              and explain. His presentations are
              minimalistic, and extremely helpful.
              A good conversations with him
              yields knowledge and analysis
              about many PM use cases.`}
            />
          </div>
          {/*  */}
          <div className="space-y-8">
            <FeedbackCard
              name={"Rohit Roy Chaydhary"}
              post={"Designer"}
              description={`Learning from the @saptarshipr
              the legend himself, love you for
              staying after hours to clear all our
              doubts & great job
              @growthschoolio for conducting
              such amazing workshops open for
              #uiuxdesign opportunities`}
            />
            <FeedbackCard
              name={"Roopesh Bhosle"}
              post={"SEO Manager"}
              description={`Upskilling at GrowthSchool helped
              me become a Swiss knife. I
              successfully managed to crack an
              opportunity with a mentor at
              GrowthSchool and I am working on
              enterprise SEO now`}
            />
          </div>
          <div className="space-y-8">
            <FeedbackCard
              name={"Chinmay Chindarkar"}
              post={"Retention"}
              description={`Sapta, I ve never enjoyed a lecture
              so much in all my engineering
              years. Colleges make you learn
              things inorder to get marks, attend
              lectures for attendance, teach you
              stuff which is outdated but they
              never tell you the value of the
              information and how it can be
              applied in the real world. Today I got
              to know the value of the
              information you gave me, I have
              registered for the mastery course.
              Excited!`}
            />
            <FeedbackCard
              name={"Shane McCallum"}
              post={"Data Scientist"}
              description={`Without Dipanjan, I would not be
              where I am today. His mentorship,
              encouragement, and reassurance
              helped me buckle down and
              persevere in my career change into
              Data Science. I would greatly accept
              any opportunity to work with him
              again`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPart;
