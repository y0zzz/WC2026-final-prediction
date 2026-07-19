export default function PredictionCards({
  prediction
}: {
  prediction:any;
}) {


  if (!prediction) {

    return null;

  }



  const winner =
    prediction.Spain_win >
    prediction.Argentina_win
      ? "Spain"
      : prediction.Argentina_win >
        prediction.Spain_win
        ? "Argentina"
        : "Draw";




  return (

    <div className="mt-12">


      <div className="mb-8">


        <p className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-blue-400
          mb-3
        ">

          AI Match Model

        </p>


        <h2 className="
          text-3xl
          md:text-4xl
          font-black
        ">

          Match Probability

        </h2>


        <p className="
          text-gray-400
          mt-2
        ">

          Predicted outcome based on team performance statistics

        </p>


      </div>





      <div className="
        grid
        md:grid-cols-3
        gap-6
      ">


        <PredictionCard
          title="🇪🇸 Spain Win"
          value={prediction.Spain_win}
          winner={winner === "Spain"}
          color="spain"
        />



        <PredictionCard
          title="Draw"
          value={prediction.Draw}
          winner={winner === "Draw"}
          color="draw"
        />



        <PredictionCard
          title="🇦🇷 Argentina Win"
          value={prediction.Argentina_win}
          winner={winner === "Argentina"}
          color="argentina"
        />


      </div>



    </div>

  );

}





function PredictionCard({

  title,
  value,
  winner,
  color

}:{

  title:string;
  value:number;
  winner:boolean;
  color:string;

}) {



  return (

    <div

      className={`
        relative
        overflow-hidden
        backdrop-blur-xl
        rounded-3xl
        p-7
        text-center
        transition-all
        duration-300
        hover:scale-[1.03]

        ${
          winner

          ? "bg-gradient-to-br from-blue-500/30 to-purple-500/20 border border-blue-400 shadow-xl shadow-blue-500/20"

          : "bg-white/10 border border-white/10"

        }
      `}

    >



      {winner && (

        <div className="
          absolute
          top-0
          left-0
          right-0
          bg-blue-400/20
          py-2
        ">


          <p className="
            text-xs
            uppercase
            tracking-widest
            text-blue-200
            font-bold
          ">

            Model Favorite

          </p>


        </div>

      )}






      <div className={winner ? "mt-8" : ""}>


        <h3 className="
          text-lg
          text-gray-300
        ">

          {title}

        </h3>



        <p className="
          text-6xl
          font-black
          mt-4
        ">

          {value}%

        </p>




        <div className="
          mt-6
          bg-black/30
          rounded-full
          h-4
          overflow-hidden
        ">


          <div

            className={`
              h-full
              rounded-full
              transition-all
              duration-700

              ${
                winner
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : "bg-gray-500"
              }

            `}

            style={{
              width:`${value}%`
            }}

          />


        </div>




        <p className="
          text-sm
          text-gray-400
          mt-4
        ">

          Win probability

        </p>



      </div>



    </div>

  );

}