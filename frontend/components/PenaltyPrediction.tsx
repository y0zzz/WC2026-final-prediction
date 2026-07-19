export default function PenaltyPrediction({
  prediction
}: {
  prediction:any;
}) {


  if (
    !prediction?.penalty_prediction
  ) {

    return null;

  }



  return (

    <div className="mt-8 bg-white/10 backdrop-blur-xl rounded-3xl p-8">


      <h2 className="text-3xl font-bold mb-6">
        🥅 Penalty Shootout Projection
      </h2>




      <p className="text-gray-300 mb-6 text-lg">

        If the final remains level after extra time,
        the model estimates the following penalty shootout outcome.

      </p>




      <div className="grid md:grid-cols-3 gap-5">



        <div className="bg-black/30 rounded-2xl p-5 text-center">


          <p className="text-gray-400">
            Penalty Shootout Chance
          </p>


          <p className="text-4xl font-bold mt-3">

            {prediction.penalty_shootout_probability}%

          </p>


        </div>





        <div className="bg-black/30 rounded-2xl p-5 text-center">


          <p className="text-gray-400">
            🇪🇸 Spain Penalties
          </p>


          <p className="text-4xl font-bold mt-3">

            {prediction.penalty_prediction.Spain_penalties}%

          </p>


        </div>





        <div className="bg-black/30 rounded-2xl p-5 text-center">


          <p className="text-gray-400">
            🇦🇷 Argentina Penalties
          </p>


          <p className="text-4xl font-bold mt-3">

            {prediction.penalty_prediction.Argentina_penalties}%

          </p>


        </div>


      </div>




      <div className="mt-6 bg-black/30 rounded-2xl p-5">


        <p className="text-gray-300">

          Extra time probability:
          {" "}
          <span className="font-bold">

            {prediction.extra_time_probability}%

          </span>

        </p>


      </div>



    </div>

  );

}