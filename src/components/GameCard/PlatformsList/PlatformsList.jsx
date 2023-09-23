import PropTypes from "prop-types";

import styles from "./PlatformsList.module.css";

const PlatformsList = (props) => {
  const platforms = props.platforms;

  const PlatformsList = platforms.map((platform) => (
    <p className={styles.platform} key={platform}>
      {platform}
    </p>
  ));

  return <div className={styles["platforms-list"]}>{PlatformsList}</div>;
};

PlatformsList.propTypes = {
  platforms: PropTypes.array,
};

export default PlatformsList;
