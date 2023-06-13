import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import { styled, createStyles } from "@mui/material/styles";
import RatingStarIcon from "../../assets/icons/RatingStarIcon";
import styles from "./rating.module.scss";

const useStyles = styled(() =>
    createStyles({
        tooltip: {
            background: "#fff",
            color: "#000",
            marginTop: "30px",
            boxShadow: "0px 4px 20px rgba(155, 164, 174, 0.5)",
            borderRadius: "10px",
            fontWeight: "normal",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            padding: 10,
            fontSize: "14px",
            maxWidth: 100,
            minWidth: 50,
            lineHeight: "100%",
            top: "10px",
        },
        arrow: {
            fontSize: 16,
            width: 17,
            "&::before": {
                border: "1px solid #fff",
                backgroundColor: "#fff",
                boxSizing: "border-box",
                dropShadow: "0px 4px 20px rgba(155, 164, 174, 0.5)",
            },
        },
    })
);
const RatingStarComponent = ({ rating }) => {
  const classes = useStyles();

  // rating tooltip
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);
  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  return (
    <>
      <Tooltip
        title={
          <span className="epiloge-regular">
            {rating ? rating?.toFixed(2) : 0}
          </span>
        }
        placement="top"
        arrow
        classes={{
          tooltip: classes.tooltip,
          arrow: classes.arrow,
        }}
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        <div
          ref={areaRef}
          onMouseMove={handleMouseMove}
          className={styles.ratingBox}
        >
          <div
            className={styles.icon1}
            style={{
              backgroundImage: `${
                rating > 0 && rating <= 0.5
                  ? `-webkit-gradient(linear, left top, right top, from(#E63201), color-stop(50%, #E63201), color-stop(50%, #D7D7D7)`
                  : rating > 0.5 && rating <= 1
                  ? `-webkit-gradient(linear, left top, right top, from(#E63201), color-stop(100%, #E63201), color-stop(100%, #D7D7D7)`
                  : rating > 1 && rating <= 1.5
                  ? `-webkit-gradient(linear, left top, right top, from(#E63201), color-stop(100%, #E63201), color-stop(100%, #D7D7D7)`
                  : rating > 1.5 && rating <= 2.5
                  ? `-webkit-gradient(linear, left top, right top, from(#F68E39), color-stop(100%, #F68E39), color-stop(100%, #D7D7D7)`
                  : rating > 2.5 && rating <= 3.5
                  ? `-webkit-gradient(linear, left top, right top, from(#FFC514), color-stop(100%, #FFC514), color-stop(100%, #D7D7D7)`
                  : rating > 3.5 && rating <= 4.5
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(100%, #44DE80), color-stop(100%, #D7D7D7)`
                  : rating > 4.5 && rating <= 5
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(100%, #04BD62), color-stop(100%, #D7D7D7)`
                  : ""
              }`,
            }}
          >
            <RatingStarIcon rating={rating} />
          </div>
          <div
            className={styles.icon2}
            style={{
              backgroundImage: `${
                rating > 1 && rating <= 1.5
                  ? `-webkit-gradient(linear, left top, right top, from(#E63201), color-stop(50%, #E63201), color-stop(50%, #D7D7D7)`
                  : rating > 1.5 && rating <= 2.5
                  ? `-webkit-gradient(linear, left top, right top, from(#F68E39), color-stop(100%, #F68E39), color-stop(100%, #D7D7D7)`
                  : rating > 2.5 && rating <= 3.5
                  ? `-webkit-gradient(linear, left top, right top, from(#FFC514), color-stop(100%, #FFC514), color-stop(100%, #D7D7D7)`
                  : rating > 3.5 && rating <= 4.5
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(100%, #44DE80), color-stop(100%, #D7D7D7)`
                  : rating > 4.5 && rating <= 5
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(100%, #04BD62), color-stop(100%, #D7D7D7)`
                  : ""
              }`,
            }}
          >
            <RatingStarIcon rating={rating} />
          </div>
          <div
            className={styles.icon3}
            style={{
              backgroundImage: `${
                (rating > 2) & (rating <= 2.5)
                  ? `-webkit-gradient(linear, left top, right top, from(#F68E39), color-stop(50%, #F68E39), color-stop(50%, #D7D7D7)`
                  : rating > 2.5 && rating <= 3.5
                  ? `-webkit-gradient(linear, left top, right top, from(#FFC514), color-stop(100%, #FFC514), color-stop(100%, #D7D7D7)`
                  : rating > 3.5 && rating <= 4.5
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(100%, #44DE80), color-stop(100%, #D7D7D7)`
                  : rating > 4.5 && rating <= 5
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(100%, #04BD62), color-stop(100%, #D7D7D7)`
                  : ""
              }`,
            }}
          >
            <RatingStarIcon rating={rating} />
          </div>
          <div
            className={styles.icon4}
            style={{
              backgroundImage: `${
                rating > 3 && rating <= 3.25
                  ? `-webkit-gradient(linear, left top, right top, from(#FFC514), color-stop(25%, #FFC514), color-stop(25%, #D7D7D7)`
                  : rating > 3.25 && rating <= 3.5
                  ? `-webkit-gradient(linear, left top, right top, from(#FFC514), color-stop(50%, #FFC514), color-stop(50%, #D7D7D7)`
                  : rating > 3.5 && rating <= 3.75
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(75%, #44DE80), color-stop(75%, #D7D7D7)`
                  : rating > 3.75 && rating <= 4
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(100%, #44DE80), color-stop(100%, #D7D7D7)`
                  : rating > 4 && rating <= 4.5
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(100%, #44DE80), color-stop(100%, #D7D7D7)`
                  : rating > 4.5 && rating <= 5
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(100%, #04BD62), color-stop(100%, #D7D7D7)`
                  : ""
              }`,
            }}
          >
            <RatingStarIcon rating={rating} />
          </div>
          <div
            className={styles.icon5}
            style={{
              backgroundImage: `${
                (rating > 4) & (rating <= 4.25)
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(25%, #44DE80), color-stop(25%, #D7D7D7)`
                  : (rating > 4.25) & (rating <= 4.5)
                  ? `-webkit-gradient(linear, left top, right top, from(#44DE80), color-stop(50%, #44DE80), color-stop(50%, #D7D7D7)`
                  : rating > 4.5 && rating <= 4.75
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(75%, #04BD62), color-stop(75%, #D7D7D7)`
                  : rating > 4.75 && rating <= 5
                  ? `-webkit-gradient(linear, left top, right top, from(#04BD62), color-stop(100%, #04BD62), color-stop(100%, #D7D7D7)`
                  : ""
              }`,
            }}
          >
            <RatingStarIcon />
          </div>
        </div>
      </Tooltip>
    </>
  );
};

export default RatingStarComponent;
