export default function ScorePrediction({
  prediction
}: {
  prediction:any;
}) {


  if (!prediction?.score_prediction) {

    return null;

  }



  const scores =
    prediction.score_prediction.score_probabilities;



  const mostLikely =
    prediction.score_prediction.most_likely_score;




  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mt-8">


      <h2 className="text-3xl font-bold mb-6">
        Score Probability Analysis
      </h2>




      <div className="text-center mb-10">


        <p className="text-gray-400 text-lg">
          Most likely final score
        </p>



        <h3 className="text-7xl font-black mt-3">
          {mostLikely}
        </h3>



        <p className="text-blue-300 mt-3">
          Based on attacking strength, defensive rating, and team form
        </p>


      </div>





      <div className="grid md:grid-cols-4 gap-5">


        {Object.entries(scores)
          .sort(
            ([,a]:any,[,b]:any)=>
              b-a
          )
          .map(
            ([score, probability]:any,index)=> (

              <div
                key={score}
                className={`
                  rounded-2xl p-5 text-center
                  ${
                    index === 0
                    ? "bg-blue-500/20 border border-blue-400"
                    : "bg-black/30"
                  }
                `}
              >


                {index === 0 && (

                  <p className="text-xs text-blue-300 font-bold mb-2">
                    MOST LIKELY
                  </p>

                )}



                <p className="text-3xl font-black">
                  {score}
                </p>



                <p className="text-gray-300 mt-3">
                  {probability}%
                </p>




                <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">


                  <div

                    className="bg-blue-400 h-2 rounded-full"

                    style={{
                      width:`${probability}%`
                    }}

                  />


                </div>


              </div>

            )
          )}


      </div>



    </div>

  );

}