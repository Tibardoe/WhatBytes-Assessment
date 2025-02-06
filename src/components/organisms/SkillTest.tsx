import React from "react";
import Bar from "../molecules/Bar";
import Image from "next/image";
import Button from "../atoms/Button";
import Proficiency from "../molecules/Proficiency";
import ComparisonGraph from "./ComparisonGraph";
import CircularProgressBar from "../molecules/CircularProgressBar";
import { useActiveLink } from "@/context/LinkContext";

export default function SkillTest() {
  const { form } = useActiveLink();

  const spanTexts = [
    { detail: "Question: 08 | " },
    { detail: "Duration: 15mins | " },
    { detail: "Submitted on 5 June 2021" },
  ];

  const emojisAndText = [
    {
      emojiUrl: "/assets/images/trophy.png",
      value: Number(form.rank),
      text: "YOUR RANK",
    },
    {
      emojiUrl: "/assets/images/clipboard.png",
      value: `${Number(form.percentile)}%`,
      text: "PERCENTILE",
    },
    {
      emojiUrl: "/assets/images/check.png",
      value: `${Number(form.score)}/15`,
      text: "CORRECT ANSWER",
    },
  ];
  return (
    <div className="pl-10 pr-5 mb-10">
      <h1 className="font-bold opacity-60 py-7">Skill Test</h1>

      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="space-y-5">
          {/* Skill test */}
          <Bar>
            <div className="flex items-center justify-between">
              <Image
                src="/assets/images/html.svg"
                alt="HTML logo"
                height={50}
                width={50}
              />
              <div>
                <h2 className="text-xl font-bold">
                  Hyper Text Markup Language
                </h2>
                <div>
                  {spanTexts.map((detail) => (
                    <span key={detail.detail}>{detail.detail}</span>
                  ))}
                </div>
              </div>
              <Button text="Update" />
            </div>
          </Bar>

          {/* Quick statistics */}
          <Bar>
            <div>
              <h2 className="font-bold text-xl mb-5">Quick Statistics</h2>
              <div className="flex justify-between">
                {emojisAndText.map((content) => (
                  <div key={content.text} className="flex gap-3 items-center">
                    <span className="bg-gray-200 p-3 rounded-full">
                      <Image
                        src={content.emojiUrl}
                        alt="Emoji"
                        width={30}
                        height={30}
                      />
                    </span>
                    <div>
                      <p className="font-bold text-xl">{content.value}</p>
                      <p>{content.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Bar>

          {/* Comparison graph */}
          <Bar>
            <div className="w-full space-y-5">
              <h2 className="text-xl font-bold mb-5">Comparison Graph</h2>
              <div className="flex justify-between">
                <p>
                  <span className="font-bold">
                    You scored {emojisAndText[1].value} percentile
                  </span>{" "}
                  which is lower than the <br /> average percentile 72% of all
                  engineers who took this assessment
                </p>
                <span className="p-5 bg-gray-200 rounded-full">
                  <Image
                    src="/assets/images/chart.png"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                </span>
              </div>
              <ComparisonGraph userScore={form.percentile} />
            </div>
          </Bar>
        </div>

        {/* Syllabus Wise */}
        <div className="space-y-5">
          <Bar>
            <h1 className="font-bold text-xl">Syllabus Wise Analysis</h1>
            <div className="w-full space-y-10">
              <Proficiency
                text="HTML Tools, Forms, History"
                percentage={80}
                color="#3B82F6"
              />
              <Proficiency
                text="Tags & References in HTML"
                percentage={60}
                color="#F97316"
              />
              <Proficiency
                text="Tables & References in HTML"
                percentage={24}
                color="#EF4444"
              />
              <Proficiency
                text="Tables & CSS Basics"
                percentage={96}
                color="#10B981"
              />
            </div>
          </Bar>

          {/* Question analysis */}
          <Bar>
            <div className="flex w-full justify-between text-xl font-bold mb-5">
              <h2>Question Analysis</h2>
              <p className="text-blue-500">{form.score}/15</p>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <p>
                <span className="font-bold">
                  You scored {form.score} questions out of 15.
                </span>{" "}
                However it still needs some improvements.
              </p>

              <CircularProgressBar score={form.score} total={15} />
            </div>
          </Bar>
        </div>
      </div>
    </div>
  );
}
