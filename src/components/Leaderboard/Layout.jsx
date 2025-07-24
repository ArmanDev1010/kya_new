"use client";

import { useEffect, useMemo, useState } from "react";

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
  const topThree = sortedGroup.slice(0, 3);
  const others = sortedGroup.slice(3);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

      {/* Course Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {courses.map((course) => (
          <button
            key={course}
            className={`px-4 py-2 rounded ${
              activeCourse === course
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => {
              setActiveCourse(course);
              const firstGroup = groups.find((g) => g.startsWith(course));
              setActiveGroup(firstGroup);
            }}
          >
            {course}
          </button>
        ))}
      </div>

      {/* Group Tabs (filtered by course) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filteredGroups.map((group) => (
          <button
            key={group}
            className={`px-4 py-2 rounded ${
              activeGroup === group
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveGroup(group)}
          >
            {group.split(" ").slice(1).join(" ")}
          </button>
        ))}
      </div>

      {/* Top 3 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Top 3</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {topThree.map((entry, i) => (
            <div key={i} className="bg-yellow-100 p-4 rounded shadow">
              <h3 className="font-bold">{entry.name}</h3>
              <p>Score: {entry.score}</p>
              <p>Gender: {entry.gender}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Others */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Others</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {others.map((entry, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{entry.name}</h3>
              <p>Score: {entry.score}</p>
              <p>Gender: {entry.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
