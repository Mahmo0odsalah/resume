import React, { Component, useState, useEffect, useRef } from "react";
import "../styles/HomePage.css";
import firstImg from "../resources/images/sokhna3.jpg";
import freelancer from "../resources/images/freelancer-logo.png";
import agora from "../resources/images/agora.png";
import background from "../resources/images/background-landing-page.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { HashLink as Link } from "react-router-hash-link";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
export default function HomePage() {
  const bgVisible = useRef(true);
  const bgref = useRef(null);
  const bgref2 = useRef(null);
  const navbarref = useRef(null);
  const firstRender = useRef(true);
  const classes = useStyles();
  const animatedElements = useRef([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  const addAnimatedEl = el => {
    animatedElements.current = animatedElements.current.concat([el]);
  };
  const isInViewport = (element, offset = 0) => {
    if (!element) return;
    const top = element.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
  };
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };
  const handleScroll = () => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    animatedElements.current.forEach(element => {
      if (isInViewport(element)) {
        element.className = "card-fade-in card-move-up";
      }
    });

    if (window.scrollY > window.innerHeight * 0.5) {
      navbarref.current.className = "opaque";
      bgref.current.className = "fade-out";
      bgref2.current.className = classes.card + " card1-fade-out";
      bgVisible.current = false;
    } else {
      if (!bgVisible.current) {
        navbarref.current.className = "transparent";
        bgref.current.className = "fade-in";
        bgref2.current.className = classes.card + " card1-fade-in";
        bgVisible.current = true;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    if (firstRender.current) {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div className="mainDiv">
      <div className="navBar">
        <ul ref={el => (navbarref.current = el)}>
          <li>
            <Link smooth to="#top" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link smooth to="#about-me" className="active">
              Career
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link smooth to="#contact-info" className="active">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <img
        id="top"
        src={background}
        style={{ width: dimensions.width, height: dimensions.height }}
        ref={el => (bgref.current = el)}
      />
      <Card
        style={{
          opacity: "70%",
          float: "left",
          position: "absolute",
          top: "25%",
          left: "10%",
          height: dimensions.height * 0.65,
          "background-color": "#95188c"
        }}
        className={classes.card}
        ref={el => (bgref2.current = el)}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: dimensions.height * 0.5 }}
            className={classes.media}
            image={firstImg}
            title="Summary"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Summary
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Professional, highly-motivated, aspiring Web Developer who always
              looks for new challenges and works hard to improve everyday.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div
        id="about-me"
        style={{
          marginTop: "10%",
          width: dimensions.width * 0.8,
          position: "absolute",
          left: "10%"
        }}
      >
        <p className="text">a little bit about myself</p>
        <Card
          style={{
            float: "left",
            width: "45%",

            height: dimensions.height * 0.4
          }}
          className={classes.card}
          ref={el => addAnimatedEl(el)}
        >
          <CardActionArea>
            <CardMedia
              style={{ height: dimensions.height * 0.25 }}
              className={classes.media}
              image={freelancer}
              title="Freelancer.com"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Freelance web developer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                 Worked on 8 big-scale projects, with continuous support and
                serious deadlines
                <br />
                 Many satisfied employers that left very flattering reviews on
                my profile
                <br /> Worked with Flask, NodeJS, SQL, Docker and many other
                technologies
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          style={{
            float: "right",
            width: "45%",
            height: dimensions.height * 0.4
          }}
          className={classes.card}
          ref={el => addAnimatedEl(el)}
        >
          <CardActionArea>
            <CardMedia
              style={{
                height: dimensions.height * 0.25,
                width: "50%",
                position: "relative",
                left: "25%"
              }}
              className={classes.media}
              image={agora}
              title="Explore Agora"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Explore Agora (Back end Intern developer)
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                 Worked on developing developing image recognition model <br />
                 Worked with NodeJS, ReactJS and Docker <br /> Had the chance
                to observe and learn from the development of the company's Web
                Services/ Front-end
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <p className="footer" id="contact-info">
        E-mail: Mahmood.s-yousef@outlook.com <br /> Phone: +201061954368
      </p>
    </div>
  );
}
