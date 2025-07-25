"use client";

import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import coursesData from "@/common/data/courses.json";

export default function LeaderboardLayout({ groups, data }) {
  const [activeCourse, setActiveCourse] = useState("");
  const [activeGroup, setActiveGroup] = useState("");

  // Extract course names from group names (e.g., 'Business Loft 2' -> 'Business')
  const courses = useMemo(() => {
    const courseSet = new Set();
    groups.forEach((g) => {
      const courseName = g.split(" ")[0];
      courseSet.add(courseName);
    });
    return Array.from(courseSet);
  }, [groups]);

  const courseTitleMap = useMemo(() => {
    return coursesData.reduce((acc, course) => {
      acc[course.course.toLowerCase()] = course.title;
      return acc;
    }, {});
  }, []);

  // Default active course
  useEffect(() => {
    if (!activeCourse && courses.length > 0) {
      setActiveCourse(courses[0]);
    }
  }, [courses, activeCourse]);

  // Filter groups by selected course
  const filteredGroups = useMemo(() => {
    return groups.filter((g) => g.startsWith(activeCourse));
  }, [groups, activeCourse]);

  // Default active group
  useEffect(() => {
    if (filteredGroups.length > 0 && !activeGroup) {
      setActiveGroup(filteredGroups[0]);
    }
  }, [filteredGroups, activeGroup]);

  const currentGroup = Array.isArray(data?.[activeGroup])
    ? data[activeGroup]
    : [];

  const sortedGroup = [...currentGroup].sort((a, b) => b.score - a.score);
  const topThree = [sortedGroup[1], sortedGroup[0], sortedGroup[2]];
  const others = sortedGroup.slice(3);

  return (
    <div className="relative bg-white rounded-t-[50px] mx-[2%] z-[1] p-6">
      {/* Course Tabs */}
      <div className="flex justify-center my-3">
        <div className="bg-[#f4f4f4] p-2 rounded-full w-fit flex justify-center gap-x-6 mb-[2rem] relative">
          {courses.map((course, key) => (
            <button
              key={course}
              onClick={() => {
                setActiveCourse(course);
                const firstGroup = groups.find((g) => g.startsWith(course));
                setActiveGroup(firstGroup);
              }}
              className="relative rounded-full px-3 py-1.5 text-lg font-medium max-tablet:text-lg"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {activeCourse === course && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-primary"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <p
                className={`${
                  activeCourse === course
                    ? "text-white"
                    : "text-black hover:text-black/60 transition"
                } relative z-[12] py-1 px-3`}
              >
                {courseTitleMap[course.toLowerCase()] || course}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Group Tabs (filtered by course) */}
      <div className="flex justify-center flex-wrap gap-4">
        {filteredGroups.map((group) => (
          <button
            key={group}
            className={`px-4 py-2 rounded ${
              activeGroup === group
                ? "bg-primary text-white"
                : "bg-[#f4f4f4] text-black"
            }`}
            onClick={() => setActiveGroup(group)}
          >
            {group.split(" ").slice(1).join(" ")}
          </button>
        ))}
      </div>

      {/* Top 3 */}
      <div>
        <div
          className="relative aspect-[60/31] w-full top-0 left-1/2 -translate-x-1/2 bg-cover bg-center bg-no-repeat flex flex-col justify-center"
          style={{
            backgroundImage: `url(/assets/leaderboard/leaderboard_numbers.png)`,
          }}
        >
          <div className="flex justify-around items-center text-center mb-[100px] pointer-events-none">
            {topThree.map((entry, i) => {
              let marginTop;
              if (i === 0) marginTop = "150px";
              else if (i === 1) marginTop = "0px";
              else if (i === 2) marginTop = "200px";

              const isFirstPlace = i === 1;
              const base = entry?.gender === "m" ? "boy" : "girl";
              const imageName = isFirstPlace ? `${base}_crown` : base;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  style={{ marginTop }}
                >
                  <div
                    className="relative w-[120px] h-[120px] bg-contain bg-center bg-no-repeat rounded-full"
                    style={{
                      backgroundImage: `url(/assets/leaderboard/${imageName}.png)`,
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-100 w-[110px] h-[110px] rounded-full z-[-1]"></div>
                  </div>
                  <h3 className="text-3xl mt-5 font-[500]">{entry?.name}</h3>
                  <p className="mt-3 text-xl">{entry?.score} Points</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Others */}
      {others.length > 0 && (
        <div className="pointer-events-none">
          <div className="bg-[#f4f4f4] rounded-[50px] w-full flex justify-between text-base text-gray-500 font-[400] px-[3%] py-3 pointer-events-none">
            <div className="flex gap-[5rem]">
              <p className="w-[100px]">Position</p>
              <p>Name</p>
            </div>
            <p>Points</p>
          </div>
          <ul className="">
            {others.map((entry, i) => (
              <li
                key={i}
                className="flex justify-between text-lg bg-white px-[3%] py-5 border-b-[1px] last:border-b-0"
              >
                <div className="flex gap-[5rem]">
                  <p className="w-[100px]">{i + 4}</p>
                  <h3 className="font-[500]">{entry?.name}</h3>
                </div>
                <p>{entry?.score}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
