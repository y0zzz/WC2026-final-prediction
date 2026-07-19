export default function PredictionExplanation({
  prediction,
  teams
}: {
  prediction: any;
  teams: any;
}) {


  if (!prediction || !teams) {

    return null;

  }



  const advantages: string[] = [];
  const risks: string[] = [];





  if (
    teams.Spain.possession >
    teams.Argentina.possession
  ) {

    advantages.push(
      `Spain controls the match tempo with higher possession (${teams.Spain.possession}% vs ${teams.Argentina.possession}%).`
    );

  } 
  else {

    risks.push(
      `Argentina may control the tempo with higher possession (${teams.Argentina.possession}% vs ${teams.Spain.possession}%).`
    );

  }





  if (
    teams.Spain.xa >
    teams.Argentina.xa
  ) {

    advantages.push(
      `Spain creates more attacking opportunities through creativity (${teams.Spain.xa} xA).`
    );

  } 
  else {

    risks.push(
      `Argentina has stronger chance creation numbers (${teams.Argentina.xa} xA).`
    );

  }





  if (
    teams.Argentina.xg >
    teams.Spain.xg
  ) {

    risks.push(
      `Argentina carries a bigger attacking threat (${teams.Argentina.xg} xG).`
    );

  } 
  else {

    advantages.push(
      `Spain shows stronger attacking quality (${teams.Spain.xg} xG).`
    );

  }





  const predictedTeam =
    prediction.Spain_win >
    prediction.Argentina_win
      ? "Spain"
      : "Argentina";





  return (

    <div
      className="
      mt-12
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      shadow-2xl
      rounded-3xl
      p-8
      "
    >




      <div className="flex items-center justify-between mb-8">


        <h2 className="text-3xl font-bold">
          AI Prediction Explanation
        </h2>



        <div className="
          bg-blue-500/20
          border
          border-blue-400/30
          rounded-full
          px-4
          py-2
          text-sm
          text-blue-300
          font-bold
        ">

          AI MODEL

        </div>


      </div>







      <div className="
        bg-black/20
        rounded-2xl
        p-5
        mb-8
      ">


        <p className="text-gray-400">
          Current model favorite
        </p>



        <p className="
          text-4xl
          font-black
          mt-2
        ">

          {predictedTeam === "Spain"
            ? "🇪🇸 Spain"
            : "🇦🇷 Argentina"}

        </p>



        <p className="text-gray-300 mt-3">

          Based on team ratings, attacking output,
          creativity, and tournament performance.

        </p>


      </div>







      <div className="grid md:grid-cols-2 gap-6">



        <div className="
          bg-green-500/10
          border
          border-green-400/20
          rounded-2xl
          p-6
        ">


          <h3 className="
            text-xl
            font-bold
            text-green-400
            mb-4
          ">

            Strength Factors

          </h3>



          <ul className="space-y-3">


            {advantages.map(
              (item,index)=>(

                <li key={index}>
                  ✓ {item}
                </li>

              )
            )}


          </ul>


        </div>







        <div className="
          bg-yellow-500/10
          border
          border-yellow-400/20
          rounded-2xl
          p-6
        ">


          <h3 className="
            text-xl
            font-bold
            text-yellow-400
            mb-4
          ">

            Match Risks

          </h3>



          <ul className="space-y-3">


            {risks.map(
              (item,index)=>(

                <li key={index}>
                  ⚠ {item}
                </li>

              )
            )}


          </ul>


        </div>



      </div>






      <div className="
        mt-8
        bg-black/30
        rounded-2xl
        p-6
      ">


        <h3 className="font-bold text-xl mb-3">
          Model Summary
        </h3>



        <p className="text-gray-300 leading-relaxed">

          The prediction engine favors {predictedTeam},
          but the final remains competitive because
          both teams show elite tournament-level
          performance.

        </p>


      </div>




    </div>

  );

}