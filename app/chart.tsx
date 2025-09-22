"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// ApexCharts는 SSR 지원이 약하므로 dynamic import로 클라이언트 사이드 전용으로 불러와야 합니다.
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ApexChartExample() {
  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false }
    },
    colors: ["#77c972", "#FFFFFF"],
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", colors: ["#35bf2d"] },
    xaxis: {
      categories: ["현재", "1년", "2년", "3년"]
    }
  });

  const [series] = useState([
    {
      name: "고객 수",
      data: [0, 2, 20, 198]
    }
  ]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
}