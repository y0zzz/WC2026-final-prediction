import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";


export default function RadarAnalysis({
  teams,
  prediction
}: {
  teams: any;
  prediction: any;
}) {


  const profiles =
    prediction.team_profiles;



  const chartData = [

    {
      metric: "Attack",
      Spain: profiles.Spain.attack,
      Argentina: profiles.Argentina.attack
    },


    {
      metric: "Defense",
      Spain: profiles.Spain.defense,
      Argentina: profiles.Argentina.defense
    },


    {
      metric: "Control",
      Spain: profiles.Spain.control,
      Argentina: profiles.Argentina.control
    },


    {
      metric: "Creativity",
      Spain: profiles.Spain.creativity,
      Argentina: profiles.Argentina.creativity
    },


    {
      metric: "Efficiency",
      Spain: profiles.Spain.efficiency,
      Argentina: profiles.Argentina.efficiency
    },


    {
      metric: "Form",
      Spain: profiles.Spain.form,
      Argentina: profiles.Argentina.form
    }

  ];




  return (

    <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-3xl p-8">


      <h2 className="text-3xl font-bold mb-6">
        AI Team Profile Comparison
      </h2>



      <div className="h-[450px]">


        <ResponsiveContainer
          width="100%"
          height="100%"
        >


          <RadarChart
            data={chartData}
          >


            <PolarGrid />


            <PolarAngleAxis
              dataKey="metric"
            />



            <Radar
              name="Spain"
              dataKey="Spain"
              stroke="#ffffff"
              fill="#ffffff"
              fillOpacity={0.4}
            />



            <Radar
              name="Argentina"
              dataKey="Argentina"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.4}
            />


          </RadarChart>


        </ResponsiveContainer>


      </div>


    </div>

  );

}