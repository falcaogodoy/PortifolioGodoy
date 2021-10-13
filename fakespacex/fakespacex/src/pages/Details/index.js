import React from "react"; 
import PageTitle from "../../components/PageTitle";
import CandidateList from "./CandidateList";
import TripInfoCard from "./TripInfoCard";

import { ContentContainer } from "./styles";

const DetailsTripPage = () =>{

    return <>
            <PageTitle title={"detalhe das viagens"}/>

            <ContentContainer>
                <TripInfoCard/>
                <CandidateList/>
            </ContentContainer>
    </>

} 
export default DetailsTripPage