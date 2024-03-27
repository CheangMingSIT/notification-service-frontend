import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Stats } from "../../components";
import { OverviewDataTypes } from "../../util";
export function Overview() {
  const { data } = useLoaderData() as OverviewDataTypes;
  const [maxWidth, setMaxWidth] = useState(window.innerWidth - 125);
  window.addEventListener("resize", () => {
    setMaxWidth(window.innerWidth - 125);
  });
  return (
    <>
      <Box>
        <Typography variant="h3">Overview</Typography>
      </Box>
      <Box style={{ marginTop: "2rem" }}>
        <Typography variant="h6">Today's Stats</Typography>
      </Box>
      <Stats data={data} />
      <Box style={{ marginTop: "2rem" }}>
        <Typography variant="h6">Dashboard</Typography>
        <BarChart
          colors={["#236784", "#89BBCF"]}
          xAxis={[
            {
              scaleType: "band",
              data: data.month,
            },
          ]}
          leftAxis={{
            disableLine: false,
          }}
          series={[
            {
              data: data.countMonthData,
              label: "Sent Request",
            },
            {
              data: data.undeliveredCount,
              label: "Undelivered Request",
            },
          ]}
          width={maxWidth}
          slotProps={{
            legend: {
              direction: "row",
              position: { vertical: "top", horizontal: "left" },
              padding: 0,
            },
          }}
          height={400}
        />
      </Box>
    </>
  );
}
