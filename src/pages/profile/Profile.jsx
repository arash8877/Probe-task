import React from "react";
import styles from "./Profile.module.css";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";


const Profile = () => {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <div>Profile</div>
    </div>
  );
};

export default Profile;
