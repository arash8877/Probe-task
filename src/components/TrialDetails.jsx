import React, { useContext, useEffect } from "react";
import { TrialContext } from "../contexts/TrialContext";
import { useParams } from "react-router-dom";

const TrialDetails = () => {
  const { getTrial, trial } = useContext(TrialContext);
  const { nctId } = useParams();
  const { protocolSection } = trial || {};
  const {
    identificationModule,
    descriptionModule,
    conditionsModule,
    statusModule,
    eligibilityModule,
    contactsLocationsModule
  } = protocolSection || {};
  const { briefTitle } = identificationModule || {};
  const { detailedDescription } = descriptionModule || {};
  const { keywords } = conditionsModule || [];
  const { statusVerifiedDate } = statusModule || {};
  const { sex } = eligibilityModule || {};
  const [location] = contactsLocationsModule?.locations || [];
  const city = location?.city;
  const state = location?.state;

  useEffect(() => {
    getTrial(nctId);
  }, [nctId, getTrial]);

  return (
    <section>
      <div>
        <h2>{briefTitle}</h2>
        <p>{detailedDescription}</p>
        {keywords &&
          keywords.map((condition, index) => {
            return <p key={index}>{condition}</p>;
          })}
      </div>
      <div>
        <ul>
          <li>ID: {nctId}</li>
          <li>Date: {statusVerifiedDate}</li>
          <li>Eligibility: {sex}</li>
          <li>Location: {city},{state}</li>
        </ul>
      </div>
    </section>
  );
};

export default TrialDetails;
