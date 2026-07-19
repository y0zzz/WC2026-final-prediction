export default function ConfidenceCard({
  prediction
}: {
  prediction:any;
}) {


  if (!prediction) {

    return null;

  }



  const difference = Math.abs(
    prediction.spain_rating -
    prediction.argentina_rating
  );



  const confidenceLevel =
    prediction.confidence >= 75
      ? "High Confidence"
      : prediction.confidence >= 60
      ? "Moderate Confidence"
      : "Low Confidence";



  const confidenceColor =
    prediction.confidence >= 75
      ? "text-green-400"
      : prediction.confidence >= 60
      ? "text-yellow-400"
      : "text-red-400";



  let description = "";



  if (difference < 1) {

    description =
      "Very close matchup. Both teams have similar statistical strength.";

  }

  else if (difference < 3) {

    description =
      "Small advantage detected, but the final remains highly competitive.";

  }

  else {

    description =
      "The model detects a clearer statistical difference between teams.";

  }





  return (

    <div className="
      mt-8
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
    ">


      <div className="mb-6">


        <p className="
          text-blue-400
          uppercase
          tracking-widest
          text-sm
        ">

          AI Model Analysis

        </p>


        <h2 className="
          text-3xl
          font-bold
          mt-2
        ">

          Prediction Confidence

        </h2>


      </div>





      <div className="text-center">


        <p className="
          text-7xl
          font-black
        ">

          {prediction.confidence}%

        </p>



        <p className={`
          text-xl
          font-bold
          mt-3
          ${confidenceColor}
        `}>

          {confidenceLevel}

        </p>



        <p className="
          text-gray-300
          mt-4
          text-lg
        ">

          {description}

        </p>


      </div>







      <div className="
        mt-8
        bg-black/30
        h-4
        rounded-full
        overflow-hidden
      ">


        <div

          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-400
            to-purple-500
          "

          style={{
            width:`${prediction.confidence}%`
          }}

        />


      </div>







      <div className="
        grid
        md:grid-cols-2
        gap-5
        mt-8
      ">


        <TeamRating

          name="🇪🇸 Spain Rating"

          value={prediction.spain_rating}

        />


        <TeamRating

          name="🇦🇷 Argentina Rating"

          value={prediction.argentina_rating}

        />


      </div>






      <div className="
        mt-6
        bg-black/30
        rounded-2xl
        p-5
        text-center
      ">


        <p className="text-gray-400">

          Rating Difference

        </p>


        <p className="
          text-3xl
          font-black
          mt-2
        ">

          {difference.toFixed(2)}

        </p>


      </div>



    </div>

  );

}





function TeamRating({

  name,
  value

}:{

  name:string;
  value:number;

}) {


  return (

    <div className="
      bg-black/30
      rounded-2xl
      p-5
      text-center
    ">


      <p className="text-gray-400">

        {name}

      </p>


      <p className="
        text-4xl
        font-black
        mt-3
      ">

        {value}

      </p>


    </div>

  );

}