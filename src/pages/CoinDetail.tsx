import { ResponsivePie } from "@nivo/pie";
import AreaSplineChart from "../components/charts/AreaSplineChart";

const CoinDetail = () => {
  const data = [
    {
      id: "rust",
      label: "rust",
      value: 464,
    },
    {
      id: "java",
      label: "java",
      value: 75,
    },
  ];
  return (
    <div>
      <h1>Coin Detail</h1>
      <div className="h-72 border-2 border-red-500">
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          activeOuterRadiusOffset={4}
          arcLinkLabelsTextColor="#ffffff"
          arcLinkLabelsThickness={1}
          tooltip={() => <></>}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />{" "}
      </div>
      <AreaSplineChart />
    </div>
  );
};

export default CoinDetail;
