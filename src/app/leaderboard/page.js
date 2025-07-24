"use client";

import LeaderboardLayout from "@/components/Leaderboard/Layout";
import useLeaderboardData from "@/components/Leaderboard/hooks/useLeaderboardData";

export default function LeaderboardPage() {
  const { loading, groups, data } = useLeaderboardData();

  if (loading) return <p>Loading...</p>;

  return <LeaderboardLayout groups={groups} data={data} />;
}
