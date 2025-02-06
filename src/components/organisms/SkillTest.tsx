import React from "react";
import Bar from "../molecules/Bar";
import Image from "next/image";
import Button from "../atoms/Button";
import Proficiency from "../molecules/Proficiency";

export default function SkillTest() {
  const spanTexts = [
    { detail: "Question: 08 | " },
    { detail: "Duration: 15mins | " },
    { detail: "Submitted on 5 June 2021" },
  ];

  const emojisAndText = [
    { emojiUrl: "/assets/images/trophy.png", value: 1, text: "YOUR RANK" },
    {
      emojiUrl: "/assets/images/clipboard.png",
      value: "30%,",
      text: "PERCENTILE",
    },
    {
      emojiUrl: "/assets/images/check.png",
      value: "10 / 15",
      text: "CORRECT ANSWER",
    },
  ];
  return (
    <div className="pl-10 pr-5">
      <h1 className="font-bold opacity-60 py-7">Skill Test</h1>

      <div className="flex gap-5">
        <div className="space-y-5">
          <Bar>
            <div className="flex gap-5 items-center">
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
              </div>{" "}
              <Button text="Update" />
            </div>
          </Bar>

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

          <Bar>
            <div className="w-full">
              <h2 className="text-xl font-bold mb-5">Comparison Graph</h2>
              <div className="flex justify-between">
                <p>
                  <span>You scored {emojisAndText[1].value} percentile</span>
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
            </div>
          </Bar>
        </div>

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

          <Bar>
            <div className="flex w-full justify-between text-xl font-bold">
              <h2>Question Analysis</h2>
              <p className="text-blue-500">10/15</p>
            </div>
            <div>
              <p>
                {" "}
                <span>
                  You scored 10 questions out of 15. However it still needs some
                  improvements.
                </span>
              </p>
            </div>
          </Bar>
        </div>
      </div>
    </div>
  );
}
