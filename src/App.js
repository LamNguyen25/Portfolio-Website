
import React, { useState, useEffect } from 'react';
import './assets/css/style.css';
import { Typography, Avatar, Grid,makeStyles, Card, CardActions, CardContent } from '@material-ui/core';
import locomotiveScroll from "locomotive-scroll";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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

  const [jobNumber, setJobNumber] = useState();

  useEffect(() => {

    if(!jobNumber) {
      setJobNumber(0);
    }

    // const scroll = new locomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true
    // });
  });

  return (
    <div className="container-fluid p-0 m-0">
      <section id="home" className="wrapper">
        <nav id="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
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

      <section id="about" className="wrapper sec-1">
          <div className="title">About Me</div>
          <div className={classes.root}>
            <Grid container spacing={2}> 
              <Grid item xs={6}>
                <div className="introduction">
                  <Typography variant="h7">
                      Hello! I'm Lam, a software engineer based in Los Angeles, CA. I am a fast learner with a strong work ethic in a team or individual setting to drive product success and process efficiency
                  </Typography>
                </div>
                
              </Grid>
              <Grid item xs={6}>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="skill-list">
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> JavaScript</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Java</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Node.js</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> MongoDB</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Cloud Firestore</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> HTML & (S)CSS</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> ReactJS</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> React Native</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> jQuery</li>
                  <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Git</li>
                </ul>
                {/* <Grid container spacing={2}> 
                  <Grid item xs={6}>
                    <li><PlayArrowIcon style={{ color: '#64ffda' }}/> JavaScript</li>
                    <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Java</li>
                    <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Node.js</li>
                    <li><PlayArrowIcon style={{ color: '#64ffda' }}/> MongoDB</li>
                    <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Cloud Firestore</li>
                  </Grid>
                  <Grid item xs={6}>
                    <ul>
                      <li><PlayArrowIcon style={{ color: '#64ffda' }}/> HTML & (S)CSS</li>
                      <li><PlayArrowIcon style={{ color: '#64ffda' }}/> ReactJS</li>
                      <li><PlayArrowIcon style={{ color: '#64ffda' }}/> React Native</li>
                      <li><PlayArrowIcon style={{ color: '#64ffda' }}/> jQuery</li>
                      <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Git</li>
                    </ul>
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>
          </div>
      </section>

      <section id="experience" className="wrapper sec-2">
        <div className="title">Where I've Worked</div>
        <Grid container spacing={2}> 
          <Grid item xs={3}>
            <ul>
              <li>
                <button className="selected-job-btn" style={{marginBottom: '10px'}}>Skipli</button>
              </li>
              <li>
                <button className="selected-job-btn">VNPN</button>
              </li>
            </ul>
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="h5" component="h2" style={{marginLeft: '0px'}}>
              Software engineer Intern 
              <span style={{color: '#2a9d8f'}}> @ Skipli</span>
            </Typography>
            <Typography variant="subtitle2" style={{marginLeft: '0px'}}>
                January 2021 - Present
            </Typography>
            <ul>
              <li><PlayArrowIcon style={{ color: '#64ffda' }}/> JavaScript</li>
              <li><PlayArrowIcon style={{ color: '#64ffda' }}/> Java</li>
            </u>
          </Grid>
          <Grid item xs={3}></Grid> */}
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2} alignItems="flex-start">
              <Grid item xs>
                <Typography variant="h5" component="h2" style={{marginLeft: '40px'}}>
                  Software engineer Intern 
                  <span style={{color: '#2a9d8f'}}> @ Skipli</span>
                </Typography>
                <Typography variant="subtitle2" style={{marginLeft: '0px'}}>
                  January 2021 - Present
                </Typography>
              </Grid>
              <Grid item justify="flex-start">
                <div className="display-row">
                  <PlayArrowIcon style={{ color: '#64ffda' }}/>
                  <p className="jobDescription">Design & create a mobile application for the restaurant’s guests to download on their smartphone (Android & iOS) using React Native, Firebase Real-time Database (DB), and NodeJS</p>
                </div>
                
                <div className="display-row">
                  <PlayArrowIcon style={{ color: '#64ffda' }}/>
                  <p className="jobDescription">Allow guests to collect loyalty points from each purchase and place orders through Skipli Checkout</p>
                </div>

                <div className="display-row">
                  <PlayArrowIcon style={{ color: '#64ffda' }}/>
                  <p className="jobDescription">Utilize Facebook & IG API to show guests the restaurant’s Facebook and Instagram posts</p>
                </div>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid> 
        </Grid>
      </section>
    </div>
  );
}

export default App;
