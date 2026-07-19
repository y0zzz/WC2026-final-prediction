export default function MetricCard({
  teams
}: {
  teams:any;
}) {


  if (!teams?.Spain || !teams?.Argentina) {

    return null;

  }



  const metrics = [

    {
      title:"Possession",
      icon:"🎯",
      spain:teams.Spain.possession,
      argentina:teams.Argentina.possession
    },

    {
      title:"Shots / Game",
      icon:"⚽",
      spain:teams.Spain.shots_per_game,
      argentina:teams.Argentina.shots_per_game
    },

    {
      title:"Shots on Target",
      icon:"🥅",
      spain:teams.Spain.shots_on_target,
      argentina:teams.Argentina.shots_on_target
    },

    {
      title:"Expected Goals",
      icon:"📈",
      spain:teams.Spain.xg,
      argentina:teams.Argentina.xg
    },

    {
      title:"Expected Assists",
      icon:"🎨",
      spain:teams.Spain.xa,
      argentina:teams.Argentina.xa
    }

  ];





  return (

    <div className="mt-12">


      <h2 className="
        text-3xl
        font-bold
        mb-6
      ">

        Tournament Performance

      </h2>





      <div className="
        grid
        md:grid-cols-5
        gap-5
      ">



        {metrics.map(
          (metric,index)=>(

            <ComparisonCard
              key={index}
              title={metric.title}
              icon={metric.icon}
              spain={metric.spain}
              argentina={metric.argentina}
            />

          )
        )}



      </div>


    </div>

  );

}








function ComparisonCard({
  title,
  icon,
  spain,
  argentina
}:{
  title:string;
  icon:string;
  spain:number;
  argentina:number;
}) {



  const maxValue =
    Math.max(
      spain,
      argentina,
      1
    );



  const spainWidth =
    Math.min(
      100,
      (spain / maxValue) * 100
    );



  const argentinaWidth =
    Math.min(
      100,
      (argentina / maxValue) * 100
    );



  const leader =
    spain > argentina
      ? "Spain"
      : argentina > spain
      ? "Argentina"
      : "Equal";





  return (

    <div
      className="
      bg-white/10
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-5
      shadow-xl
      hover:scale-[1.03]
      transition
      "
    >




      <div className="flex items-center justify-between mb-5">


        <h3 className="
          font-bold
          text-lg
        ">

          {icon} {title}

        </h3>


      </div>





      <div className="
        text-xs
        text-blue-300
        mb-5
        font-bold
      ">

        Leader:
        <span className="ml-1">
          {leader === "Equal"
            ? "Draw"
            : leader}

        </span>

      </div>







      {/* SPAIN */}


      <div className="mb-5">


        <div className="
          flex
          justify-between
          text-sm
          mb-2
        ">


          <span>
            🇪🇸 Spain
          </span>


          <span className="font-bold">
            {spain}
          </span>


        </div>




        <div className="
          bg-black/40
          h-3
          rounded-full
          overflow-hidden
        ">


          <div

            className="
              bg-white
              h-3
              rounded-full
            "

            style={{
              width:`${spainWidth}%`
            }}

          />


        </div>


      </div>








      {/* ARGENTINA */}


      <div>


        <div className="
          flex
          justify-between
          text-sm
          mb-2
        ">


          <span>
            🇦🇷 Argentina
          </span>


          <span className="font-bold">
            {argentina}
          </span>


        </div>





        <div className="
          bg-black/40
          h-3
          rounded-full
          overflow-hidden
        ">


          <div

            className="
              bg-blue-400
              h-3
              rounded-full
            "

            style={{
              width:`${argentinaWidth}%`
            }}

          />


        </div>


      </div>




    </div>

  );

}