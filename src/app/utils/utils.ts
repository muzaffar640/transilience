import { ChartData } from "chart.js";
import { VulnerabilityData } from "types/VulnerabilityData";

export const countAdvisoriesPerMonth = (data: VulnerabilityData[]) => {
  const monthCounts: { [key: string]: number } = {};
  const sortedData = data
    .filter((advisory) => advisory.date_published)
    .sort((a, b) => {
      const dateA = new Date(a.date_published!).getTime();
      const dateB = new Date(b.date_published!).getTime();
      return dateB - dateA;
    });

  sortedData.forEach((advisory) => {
    if (advisory.date_published) {
      const month = new Date(advisory.date_published).toLocaleString(
        "default",
        { month: "short", year: "2-digit" }
      );
      if (monthCounts[month]) {
        monthCounts[month]++;
      } else {
        monthCounts[month] = 1;
      }
    }
  });

  return monthCounts;
};

export const processDoughnutData = (data: VulnerabilityData[]) => {
  const vendorCounts: { [key: string]: number } = {};
  const techCounts: { [key: string]: number } = {};

  data.forEach((advisory) => {
    if (advisory.vendor_name) {
      if (vendorCounts[advisory.vendor_name]) {
        vendorCounts[advisory.vendor_name]++;
      } else {
        vendorCounts[advisory.vendor_name] = 1;
      }
    }

    if (advisory.technology_name) {
      if (techCounts[advisory.technology_name]) {
        techCounts[advisory.technology_name]++;
      } else {
        techCounts[advisory.technology_name] = 1;
      }
    }
  });

  return { vendorCounts, techCounts };
};

export const createDoughnutData = (
  vendorCounts: { [key: string]: number },
  techCounts: { [key: string]: number }
) => {
  const vendorLabels = Object.keys(vendorCounts);
  const vendorData = Object.values(vendorCounts);

  const techLabels = Object.keys(techCounts);
  const techData = Object.values(techCounts);

  const doughnutData: ChartData<"doughnut"> = {
    labels: [...vendorLabels, ...techLabels],
    datasets: [
      {
        label: "# of Advisories by Vendor",
        data: vendorData,
        backgroundColor: vendorLabels.map(
          (_, index) => `hsl(${(index * 360) / vendorLabels.length}, 70%, 50%)`
        ),
        hoverOffset: 4,
      },
      {
        label: "# of Advisories by Technology",
        data: techData,
        backgroundColor: techLabels.map(
          (_, index) => `hsl(${(index * 360) / techLabels.length}, 70%, 50%)`
        ),
        hoverOffset: 4,
      },
    ],
  };

  return doughnutData;
};

export const processPieData = (data: VulnerabilityData[]) => {
  const techCounts: { [key: string]: number } = {};

  data.forEach((advisory) => {
    if (advisory.technology_name) {
      if (techCounts[advisory.technology_name]) {
        techCounts[advisory.technology_name]++;
      } else {
        techCounts[advisory.technology_name] = 1;
      }
    }
  });

  return techCounts;
};

export const createPieData = (techCounts: { [key: string]: number }) => {
  const techLabels = Object.keys(techCounts);
  const techData = Object.values(techCounts);

  const pieData: ChartData<"pie"> = {
    labels: techLabels,
    datasets: [
      {
        label: "# of Advisories by Technology",
        data: techData,
        backgroundColor: techLabels.map(
          (_, index) => `hsl(${(index * 360) / techLabels.length}, 70%, 50%)`
        ),
        hoverOffset: 4,
      },
    ],
  };

  return pieData;
};

export const processHorizontalBarData = (data: VulnerabilityData[]) => {
  const severityCounts: { [key: string]: number } = {};
  const tacticCounts: { [key: string]: number } = {};

  data.forEach((advisory) => {
    if (advisory.severity) {
      if (severityCounts[advisory.severity]) {
        severityCounts[advisory.severity]++;
      } else {
        severityCounts[advisory.severity] = 1;
      }
    }

    if (advisory.primary_mitre_attack_tactic) {
      if (tacticCounts[advisory.primary_mitre_attack_tactic]) {
        tacticCounts[advisory.primary_mitre_attack_tactic]++;
      } else {
        tacticCounts[advisory.primary_mitre_attack_tactic] = 1;
      }
    }
  });

  return { severityCounts, tacticCounts };
};

export const createHorizontalBarData = (
  severityCounts: { [key: string]: number },
  tacticCounts: { [key: string]: number }
) => {
  const severityLabels = Object.keys(severityCounts);
  const severityData = Object.values(severityCounts);

  const tacticLabels = Object.keys(tacticCounts);
  const tacticData = Object.values(tacticCounts);

  const barData: ChartData<"bar"> = {
    labels: [...severityLabels, ...tacticLabels],
    datasets: [
      {
        label: "Advisories by Severity",
        data: severityData,
        backgroundColor: "rgb(158,77,224)",
        barThickness: 7,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
          bottomRight: 5,
        },
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
      {
        label: "Advisories by Mitre Attack Tactic",
        data: tacticData,
        backgroundColor: "rgb(82, 207, 219)",
        barThickness: 7,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
          bottomRight: 5,
        },
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
    ],
  };

  return barData;
};

export const processAttackVectorData = (data: VulnerabilityData[]) => {
  const attackVectorCounts: { [key: string]: number } = {};

  data.forEach((advisory) => {
    if (advisory.attack_vector) {
      if (attackVectorCounts[advisory.attack_vector]) {
        attackVectorCounts[advisory.attack_vector]++;
      } else {
        attackVectorCounts[advisory.attack_vector] = 1;
      }
    }
  });

  return attackVectorCounts;
};

export const createAttackVectorBarData = (attackVectorCounts: {
  [key: string]: number;
}) => {
  const attackVectorLabels = Object.keys(attackVectorCounts).map((label) =>
    label.length > 10 ? `${label.slice(0, 10)}...` : label
  );
  const attackVectorData = Object.values(attackVectorCounts);

  const barData: ChartData<"bar"> = {
    labels: attackVectorLabels,
    datasets: [
      {
        label: "",
        data: attackVectorData,
        backgroundColor: attackVectorLabels.map(
          (_, index) =>
            `hsl(${(index * 360) / attackVectorLabels.length}, 70%, 50%)`
        ),
        barThickness: 7,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
          bottomRight: 5,
        },
        categoryPercentage: 0.5,
        barPercentage: 1.0,
      },
    ],
  };

  return barData;
};

export const processThreatVectorDataForBarChart = (
  data: VulnerabilityData[]
) => {
  const threatVectorCounts: { [key: string]: number } = {};

  data.forEach((advisory) => {
    const threatVectors = advisory.threat_vector
      ? advisory.threat_vector.replace(/[\[\]']+/g, "").split(",")
      : [];

    threatVectors.forEach((vector: string) => {
      vector = vector.trim();
      if (threatVectorCounts[vector]) {
        threatVectorCounts[vector]++;
      } else {
        threatVectorCounts[vector] = 1;
      }
    });
  });

  return threatVectorCounts;
};

export const createThreatVectorBarData = (threatVectorCounts: {
  [key: string]: number;
}) => {
  const labels = Object.keys(threatVectorCounts);
  const data = Object.values(threatVectorCounts);

  const barData: ChartData<"bar"> = {
    labels: labels.map((label) =>
      label.length > 10 ? `${label.substring(0, 10)}...` : label
    ),
    datasets: [
      {
        label: "Number of Advisories",
        data: data,
        backgroundColor: labels.map(
          (_, index) => `hsl(${(index * 360) / labels.length}, 70%, 50%)`
        ),
        barThickness: 10,
        borderRadius: 5,
      },
    ],
  };

  return barData;
};
