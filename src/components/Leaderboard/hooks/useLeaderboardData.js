import { useEffect, useState } from "react";

export default function useLeaderboardData() {
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbwFUnt-lQPr6DCIv7lD026NK13lyAZvADa1X9oZ0g5vIreoRKTOnUVKS3uo94Yr56uO/exec"
        );
        const raw = await res.json();

        const formattedData = {};
        const titles = [];

        raw.forEach(([title, entries]) => {
          if (!Array.isArray(entries) || entries.length < 2) return;

          const names = entries[0] || [];
          const scores = entries[1] || [];
          const genders = entries[3] || [];

          const group = names.map((name, i) => ({
            name: name || "Unknown",
            score: scores[i] ?? 0,
            gender: genders[i] || "",
          }));

          formattedData[title] = group;
          titles.push(title);
        });

        setData(formattedData);
        setGroups(titles);
        setLoading(false);
      } catch (e) {
        console.error("Failed to load leaderboard:", e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, groups, data };
}
