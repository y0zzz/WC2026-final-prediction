export default function InsightCard({
  prediction,
  teams
}: {
  prediction:any;
  teams:any;
}) {


  if (!prediction?.team_profiles) {

    return null;

  }



  const insight = generateInsight(
    prediction,
    teams
  );



  return (

    <div className="mt-12 bg-gradient-to-r from-blue-900 to-red-900 rounded-3xl p-8">


      <h2 className="text-3xl font-bold mb-4">
        AI Match Insight
      </h2>



      <p className="text-lg leading-relaxed">
        {insight}
      </p>


    </div>

  );

}





function generateInsight(
  prediction:any,
  teams:any
) {



  const insights:string[] = [];



  const profiles =
    prediction.team_profiles;



  const winner =
    prediction.Spain_win >
    prediction.Argentina_win
      ? "Spain"
      : "Argentina";





  insights.push(
    `The model currently favors ${winner} based on overall team profile analysis.`
  );





  if(
    profiles.Spain.control >
    profiles.Argentina.control
  ){

    insights.push(
      `Spain has the advantage in match control with a control rating of ${profiles.Spain.control}.`
    );

  }
  else {

    insights.push(
      `Argentina has the advantage in match control with a control rating of ${profiles.Argentina.control}.`
    );

  }





  if(
    profiles.Spain.attack >
    profiles.Argentina.attack
  ){

    insights.push(
      `Spain shows stronger attacking numbers with an attack rating of ${profiles.Spain.attack}.`
    );

  }
  else {

    insights.push(
      `Argentina shows stronger attacking numbers with an attack rating of ${profiles.Argentina.attack}.`
    );

  }





  if(
    prediction.confidence >= 75
  ){

    insights.push(
      `The model has high confidence at ${prediction.confidence}% due to a noticeable statistical difference between the teams.`
    );

  }
  else {

    insights.push(
      `The match remains highly competitive with a confidence rating of ${prediction.confidence}%.`
    );

  }





  return insights.join(" ");

}