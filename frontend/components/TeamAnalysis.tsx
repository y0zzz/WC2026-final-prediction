export default function TeamAnalysis({
  prediction
}: {
  prediction: any;
}) {


  if (!prediction?.team_profiles) {

    return null;

  }



  const generateTeamAnalysis = (
    team:any,
    name:string
  ) => {


    const strengths:string[] = [];
    const weaknesses:string[] = [];



    if(team.attack >= 80){

      strengths.push(
        "Strong attacking ability and goal threat"
      );

    }
    else {

      weaknesses.push(
        "Lower attacking output"
      );

    }




    if(team.defense >= 80){

      strengths.push(
        "Reliable defensive structure"
      );

    }
    else {

      weaknesses.push(
        "Defensive vulnerability"
      );

    }




    if(team.control >= 80){

      strengths.push(
        "Excellent match control and possession ability"
      );

    }
    else {

      weaknesses.push(
        "Can struggle to control possession"
      );

    }




    if(team.creativity >= 80){

      strengths.push(
        "High creativity and chance creation"
      );

    }
    else {

      weaknesses.push(
        "Limited creative production"
      );

    }




    if(team.efficiency >= 80){

      strengths.push(
        "Very efficient attacking conversion"
      );

    }
    else {

      weaknesses.push(
        "Needs better finishing efficiency"
      );

    }




    if(team.form >= 80){

      strengths.push(
        "Strong current form"
      );

    }
    else {

      weaknesses.push(
        "Recent form is less consistent"
      );

    }



    return {
      name,
      strengths,
      weaknesses
    };

  };





  const spain = generateTeamAnalysis(
    prediction.team_profiles.Spain,
    "Spain"
  );



  const argentina = generateTeamAnalysis(
    prediction.team_profiles.Argentina,
    "Argentina"
  );





  return (

    <div className="mt-12 grid md:grid-cols-2 gap-6">



      {/* Spain */}

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">


        <h2 className="text-3xl font-bold mb-6">
          🇪🇸 Spain
        </h2>



        <h3 className="text-xl font-bold text-green-400 mb-3">
          Strengths
        </h3>



        <ul className="space-y-2 mb-6">

          {spain.strengths.map(
            (item,index)=>(
              
              <li key={index}>
                ✓ {item}
              </li>

            )
          )}

        </ul>




        <h3 className="text-xl font-bold text-red-400 mb-3">
          Weaknesses
        </h3>



        <ul className="space-y-2">

          {spain.weaknesses.map(
            (item,index)=>(
              
              <li key={index}>
                ⚠ {item}
              </li>

            )
          )}

        </ul>


      </div>






      {/* Argentina */}


      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">


        <h2 className="text-3xl font-bold mb-6">
          🇦🇷 Argentina
        </h2>



        <h3 className="text-xl font-bold text-green-400 mb-3">
          Strengths
        </h3>



        <ul className="space-y-2 mb-6">

          {argentina.strengths.map(
            (item,index)=>(
              
              <li key={index}>
                ✓ {item}
              </li>

            )
          )}

        </ul>




        <h3 className="text-xl font-bold text-red-400 mb-3">
          Weaknesses
        </h3>



        <ul className="space-y-2">

          {argentina.weaknesses.map(
            (item,index)=>(
              
              <li key={index}>
                ⚠ {item}
              </li>

            )
          )}

        </ul>


      </div>



    </div>

  );

}