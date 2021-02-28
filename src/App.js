
import React, { useEffect } from 'react';
import './assets/css/style.css';
import { Typography, Avatar, Grid,makeStyles } from '@material-ui/core';
import locomotiveScroll from "locomotive-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const scrollRef = React.createRef();
  const classes = useStyles();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });
  // });

  return (
    <div className="container-fluid p-0 m-0">
      <section id="home" className="wrapper sec-1">
        <nav id="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
            <div className="row">
              <div className="col-4">
                  {/* <span className="profile-img fit"><img src="./images/profile-img.jpeg" alt="Profile pic" /></span> */}
                  <span className="profile-img fit">
                    <Avatar alt="Remy Sharp" src="/images/profile-img.jpeg" />
                  </span>
                  
              </div>
              <div className="col-6">
                  <div className="title-content">
                      <div className="title-content__container">
                          <p className="title-content__container__text">
                            Hi, I am
                          </p>
                          
                          <ul className="title-content__container__list">
                          <li className="title-content__container__list__item"> Lam Nguyen !</li>
                          <li className="title-content__container__list__item"> Energetic !</li>
                          <li className="title-content__container__list__item"> Humble !</li>
                          <li className="title-content__container__list__item"> Diligent !</li>
                          </ul>
                      </div>
                      <div className="sub-title">
                        <Typography 
                          variant="subtitle1" 
                          color="#858da4" 
                          align="left"

                        >
                          I am a software engineer based in Los Angeles, CA, offering strong software engineering and application development principles across multiple platforms
                        </Typography>
                      </div>
                      
                    </div>
                </div>
            </div>
      </section>

      <section id="about" className="wrapper sec-2">
          <div className="title">About Me</div>
          <div className={classes.root}>
            <Grid container spacing={2}> 
              <Grid item xs={6}>
                <div className="introduction">
                  <p>Hello! I'm Lam, a software engineer based in Los Angeles, CA.</p>
                  <p>I am a fast learner with a strong work ethic in a team or individual setting to drive product success and process efficiency</p>
                </div>
                
              </Grid>
              <Grid item xs={6}>
                <p>I am Lam</p>
              </Grid>
            </Grid>
          </div>
      </section>
    </div>
  );
}

export default App;
