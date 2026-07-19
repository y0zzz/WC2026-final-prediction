"use client";

import { useEffect, useState } from "react";

import PredictionCards from "@/components/PredictionCards";
import ScorePrediction from "@/components/ScorePrediction";
import PenaltyPrediction from "@/components/PenaltyPrediction";
import ConfidenceCard from "@/components/ConfidenceCard";
import RadarAnalysis from "@/components/RadarAnalysis";
import MatchHeader from "@/components/MatchHeader";
import InsightCard from "@/components/InsightCard";
import MetricCard from "@/components/MetricCard";
import TeamAnalysis from "@/components/TeamAnalysis";
import PredictionExplanation from "@/components/PredictionExplanation";


export default function Home() {


  const [prediction, setPrediction] = useState<any>(null);
  const [teams, setTeams] = useState<any>(null);



  useEffect(() => {


    fetch("http://127.0.0.1:8000/prediction")
      .then(res => res.json())
      .then(data => setPrediction(data));



    fetch("http://127.0.0.1:8000/teams")
      .then(res => res.json())
      .then(data => setTeams(data));


  }, []);





  if (!prediction || !teams) {


    return (

      <main className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
      ">

        <div className="text-center">


          <div className="text-5xl mb-5">
            ⚽
          </div>


          <h1 className="text-2xl font-bold">

            Loading World Cup Analytics...

          </h1>


        </div>


      </main>

    );

  }





  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-gray-950
      to-blue-950
      text-white
      p-6
      md:p-10
      "
    >



      <div className="max-w-7xl mx-auto">





        {/* HERO */}


        <section
          className="
          text-center
          mb-14
          "
        >


          <p
            className="
            text-sm
            tracking-[0.4em]
            text-blue-400
            uppercase
            mb-4
            "
          >

            World Cup Final Analytics

          </p>



          <h1
            className="
            text-4xl
            md:text-6xl
            font-black
            bg-gradient-to-r
            from-white
            via-blue-200
            to-blue-500
            bg-clip-text
            text-transparent
            "
          >

            🏆 FIFA World Cup Final Predictor

          </h1>



          <p
            className="
            mt-5
            text-gray-400
            text-lg
            md:text-xl
            "
          >

            AI-powered match prediction and performance analysis

          </p>


        </section>







        {/* MATCH CENTER */}


        <section className="mb-14">


          <h2 className="
            text-xl
            font-bold
            uppercase
            tracking-wider
            text-gray-400
            mb-5
          ">

            Match Center

          </h2>



          <MatchHeader />


        </section>








        {/* AI PREDICTION */}


        <section className="mb-14">


          <h2 className="
            text-xl
            font-bold
            uppercase
            tracking-wider
            text-gray-400
            mb-5
          ">

            AI Prediction Model

          </h2>



          <PredictionCards
            prediction={prediction}
          />



          <ScorePrediction
            prediction={prediction}
          />



          <PenaltyPrediction
            prediction={prediction}
          />


        </section>








        {/* TEAM PERFORMANCE */}


        <section className="mb-14">


          <h2 className="
            text-xl
            font-bold
            uppercase
            tracking-wider
            text-gray-400
            mb-5
          ">

            Team Performance

          </h2>




          <MetricCard
            teams={teams}
          />



          <RadarAnalysis
            teams={teams}
            prediction={prediction}
          />



          <TeamAnalysis
            prediction={prediction}
          />


        </section>









        {/* MODEL EXPLANATION */}


        <section className="mb-14">


          <h2 className="
            text-xl
            font-bold
            uppercase
            tracking-wider
            text-gray-400
            mb-5
          ">

            Model Explanation

          </h2>




          <ConfidenceCard
            prediction={prediction}
          />



          <PredictionExplanation
            prediction={prediction}
            teams={teams}
          />



          <InsightCard
            prediction={prediction}
            teams={teams}
          />


        </section>





      </div>


    </main>

  );

}