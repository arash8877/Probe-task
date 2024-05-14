import React, { useContext, useEffect } from "react";
import styles from "./TrialDetails.module.css";
import { TrialContext } from "../../contexts/TrialContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const TrialDetails = () => {
  const { getTrial, trial } = useContext(TrialContext);
  const { nctId } = useParams();
  const { name, getProfileInfo } = useContext(AuthContext);
  const { protocolSection } = trial || {};
  const {
    identificationModule,
    descriptionModule,
    conditionsModule,
    statusModule,
    eligibilityModule,
    contactsLocationsModule,
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

  useEffect(() => {
    getProfileInfo();
  }, [getProfileInfo]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img
            className={styles.logo}
            src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
          />
        </div>
        <div className={styles.userName}>{name}</div>
      </div>
      <div className={styles.main}>
        <div className={styles.leftBar}>
          <h4>{briefTitle}</h4>
          <p>{detailedDescription}</p>
          <div className={styles.tagContainer}>
            {keywords &&
              keywords.map((condition, index) => {
                return (
                  <div key={index} className={styles.tag}>
                    {condition}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.rightBar}>
          <ul>
            <li>ID: {nctId}</li>
            <li>Date: {statusVerifiedDate}</li>
            <li>Eligibility: {sex}</li>
            <li>
              Location: {city},{state}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrialDetails;
