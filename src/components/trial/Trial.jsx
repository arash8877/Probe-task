import React from "react";
import styles from "./Trial.module.css"
import { Link } from "react-router-dom";

const Trial = ({ trial }) => {
  const { protocolSection } = trial;
  const {
    identificationModule,
    statusModule,
    eligibilityModule,
    contactsLocationsModule,
  } = protocolSection;
  const { briefTitle, officialTitle, nctId } = identificationModule;
  const { statusVerifiedDate } = statusModule;
  const { sex } = eligibilityModule;
  const [location] = contactsLocationsModule?.locations || [];
  const city = location?.city;
  const state = location?.state;
  
  return (
    <li className={styles.trial}>
      <Link to={nctId}>
        <h5 className={styles.title}>{briefTitle}</h5>
        <p>{officialTitle}</p>
        <p>nctId: {nctId}</p>
        <p> Date: {statusVerifiedDate}</p>
        <p>Eligibility: {sex} </p>
        {city && (
          <p>
            Location: {city}
            {state && `, ${state}`}
          </p>
        )}
      </Link>
    </li>
  );
};

export default Trial;