export default function ConfidenceCard({
  prediction
}: {
  prediction:any;
}) {


  if (!prediction) {

    return null;

  }



  const difference =
    Math.abs(
      prediction.spain_rating -
      prediction.argentina_rating
    );



  let description = "";



  if (difference < 1) {

    description =
      "Very close matchup. Both teams have almost identical statistical strength.";

  }

  else if (difference < 3) {

    description =
      "Small statistical advantage detected. The match remains highly competitive.";

  }

  else {

    description =
      "The model detects a stronger statistical advantage between the teams.";

  }





  const confidenceLevel =
    prediction.confidence >= 75
      ? "High Confidence"
      : prediction.confidence >= 60
      ? "Moderate Confidence"
      : "Low Confidence";





  return (

    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mt-8">


      <h2 className="text-3xl font-bold mb-6">
        Prediction Confidence
      </h2>




      <div className="text-center">


        <p className="text-7xl font-black">
          {prediction.confidence}%
        </p>



        <p className="text-blue-300 font-bold mt-3 text-xl">
          {confidenceLevel}
        </p>



        <p className="text-gray-300 mt-4 text-lg">
          {description}
        </p>


      </div>





      <div className="mt-8 bg-gray-700 rounded-full h-4 overflow-hidden">


        <div

          className="bg-blue-400 h-4 rounded-full"

          style={{
            width:`${prediction.confidence}%`
          }}

        />


      </div>





      <div className="grid grid-cols-2 gap-5 mt-8">



        <div className="bg-black/30 rounded-2xl p-5 text-center">


          <p className="text-gray-400">
            🇪🇸 Spain Rating
          </p>


          <p className="text-3xl font-bold mt-2">
            {prediction.spain_rating}
          </p>


        </div>





        <div className="bg-black/30 rounded-2xl p-5 text-center">


          <p className="text-gray-400">
            🇦🇷 Argentina Rating
          </p>


          <p className="text-3xl font-bold mt-2">
            {prediction.argentina_rating}
          </p>


        </div>



      </div>




      <div className="mt-6 bg-black/20 rounded-xl p-4 text-center text-gray-300">

        Rating difference:
        <span className="font-bold ml-2">
          {difference.toFixed(2)}
        </span>

      </div>



    </div>

  );

}