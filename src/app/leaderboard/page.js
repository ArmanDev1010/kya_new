"use client";

import LeaderboardLayout from "@/components/Leaderboard/Layout";
import useLeaderboardData from "@/components/Leaderboard/hooks/useLeaderboardData";

export default function LeaderboardPage() {
  const { loading, groups, data } = useLeaderboardData();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <LeaderboardLayout groups={groups} data={data} />
      <div className="absolute top-0 left-0 w-full h-screen bg-[linear-gradient(#fcf3c0,#ffff)]"></div>
    </>
  );
}
