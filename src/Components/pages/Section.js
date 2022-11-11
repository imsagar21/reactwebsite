import React from "react";
import CorporateTraining from "./Section/CorporateTraining";
import ExclusivePrograms from "./Section/ExclusivePrograms";
import HappyPartners from "./Section/HappyPartners";
import HydridLearning from "./Section/HybridLearning";
import KeyFeatures from "./Section/KeyFeatures";
import Learn from "./Section/Learn";
import LifeAtDigital from "./Section/LifeAtDigital";
import Question from "./Section/Question";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import TrendingCourse from "./Section/TrendingCourse";
import Location from "./Section/Location";

function Section(){

    return(
        <React.Fragment>
        <Section1></Section1>
        <Section2></Section2>
        <TrendingCourse></TrendingCourse>
        <ExclusivePrograms></ExclusivePrograms>
        <HydridLearning></HydridLearning>
        <Learn></Learn>
        <KeyFeatures></KeyFeatures>
        <CorporateTraining></CorporateTraining>
        <LifeAtDigital></LifeAtDigital>
        <HappyPartners></HappyPartners>
        <Question></Question>
        <Location></Location>

        </React.Fragment>
       

    )
}

export default Section;