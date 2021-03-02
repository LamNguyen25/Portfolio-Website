
import React, { useState, useEffect } from 'react';
import './assets/css/style.css';
import { Typography, Avatar, Grid,makeStyles, Card, CardActions, CardContent } from '@material-ui/core';
import LocomotiveScroll from "locomotive-scroll";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './assets/css/locomotive-scroll.css';
import './assets/css/locomotive-scroll.min.css';


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
  const [selectedJob, setSelectedJob] = useState();
  const [target, setTarget] = useState();
  var scroll = null;
  useEffect(() => {
    if(!jobNumber) {
      setJobNumber(1);
      setSelectedJob(displayJob1);
    } else {
      if(jobNumber == 1) {
        setSelectedJob(displayJob1);
      } else {
        setSelectedJob(displayJob2);
      }
    }

    // window.addEventListener("load", function(event) {
    //   let lazyScroll = new LocomotiveScroll({
    //   el: document.getElementById("main-content-scroll"),
    //   smooth: true
    //   });
    // });

    scroll = new LocomotiveScroll({
      el: document.getElementById("main-content-scroll"),
      smooth: true
    });
    
    
  },[jobNumber]);

  var scrollToTarget = ((target) => {
    scroll = new LocomotiveScroll({
      el: document.getElementById("main-content-scroll"),
      smooth: true
    });
    const sectionID = document.querySelector(target);
    scroll.scrollTo(sectionID);
  })

  var displayJob1 = (() => {
    return (
      <Grid item xs container direction="column" spacing={2} alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h5" component="h2" align="left">
          Software engineer Intern 
          <span style={{color: '#2a9d8f'}}> @ Skipli</span>
        </Typography>
        <Typography variant="subtitle2" align="left">
          January 2021 - Present
        </Typography>
      </Grid>
      <Grid item xs>
        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Design & create a mobile application for the restaurant’s guests to download on their smartphone (Android & iOS) using React Native, Firebase Real-time Database (DB), and NodeJS</Typography>
        </div>
        
        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Allow guests to collect loyalty points from each purchase and place orders through Skipli Checkout</Typography>
        </div>

        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Utilize Facebook & IG API to show guests the restaurant’s Facebook and Instagram posts</Typography>
        </div>
      </Grid>
    </Grid>
    )
  })

  var displayJob2 = (() => {
    return (
      <Grid item xs container direction="column" spacing={2} alignItems="flex-start">
      <Grid item xs>
        <Typography variant="h5" component="h2" align="left">
          Full Stack Web Developer Intern 
          <span style={{color: '#2a9d8f'}}> @ VNPN</span>
        </Typography>
        <Typography variant="subtitle2" align="left">
          Sep. 2020 – Dec. 2020
        </Typography>
      </Grid>
      <Grid item xs>
        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Developed, modified, and tested login and other features using OAuth2 flow with backend written in NodeJS, and single-page-application registration process using MVC model, served over 10 million visits since 2018, successfully created 2,000 mentorship sessions since 2018</Typography>
        </div>
        
        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Utilized HTML, CSS, and JavaScript to update the web system/responsive layouts, improve user experience, and add new functionalities while making use of NoSQL databases (MongoDB)</Typography>
        </div>

        <div className="display-row">
          <PlayArrowIcon style={{ color: '#2a9d8f', marginRight: '10px' }}/>
          <Typography variant="subtitle1" align="left">Maintained frequent communication and high productivity while working remotely</Typography>
        </div>
      </Grid>
    </Grid>
    )
  })

  return (
    <div className="container-fluid p-0 m-0" id="main-content-scroll" data-scroll-container>
      <section id="home" className="wrapper" data-scroll-section>
        <nav id="navbar">
            <ul>
                <li><a onClick={()=>{scrollToTarget('#home')}}>Home</a></li>
                <li><a onClick={()=>{scrollToTarget('#about')}}>About</a></li>
                <li><a onClick={()=>{scrollToTarget('#experience')}}>Experience</a></li>
                <li><a onClick={()=>{scrollToTarget('#projects')}}>Projects</a></li>
                <li><a onClick={()=>{scrollToTarget('#contact')}}>Contact</a></li>
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
                          <p className="title-content__container__text" data-scroll> 
                            Hi, I am
                          </p>
                          
                          <ul className="title-content__container__list" data-scroll>
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
                          data-scroll
                        >
                          I am a software engineer based in Los Angeles, CA, offering strong software engineering and application development principles across multiple platforms
                        </Typography>
                      </div>
                      
                    </div>
                </div>
            </div>
      </section>

      <section id="about" className="wrapper sec-1" data-scroll-section>
          <div className="title">About Me</div>
          <div className={classes.root }>
            <Grid container spacing={2} > 
              <Grid item xs={6} style={{paddingLeft: '60px'}} >
                  <Typography variant="subtitle1" align="left" data-scroll data-scroll-speed="1" data-scroll-direction="vertical">
                      Hello! I'm Lam, a software engineer based in Los Angeles, CA. I am a fast learner with a strong work ethic in a team or individual setting to drive product success and process efficiency
                  </Typography>
              </Grid>
              <Grid item xs={6} >
              <Typography variant="subtitle1" align="left" data-scroll data-scroll-speed="1" data-scroll-direction="vertical"
              >Here are a few technologies I've been working with recently:</Typography>
                <ul className="skill-list" data-scroll data-scroll-speed="1" data-scroll-direction="vertical">
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
              </Grid>
            </Grid>
          </div>
      </section>

      <section id="experience" className="wrapper sec-2" data-scroll-section>
        <div className="title">Where I've Worked</div>
        <Grid container spacing={2} > 
          <Grid item xs={3} data-scroll> 
            <ul id="job">
              <li>
                <button 
                  className="selected-job-btn" 
                  style={{marginBottom: '10px'}} 
                  onClick={()=>{setJobNumber(1)}}
                  onClick={()=>{scrollToTarget('#experience')}}
                >
                  Skipli
                </button>
              </li>
              <li>
                <button 
                  className="selected-job-btn"
                  onClick={()=>{setJobNumber(2)}}
                  onClick={()=>{scrollToTarget('#experience')}}
                >
                  VNPN
                </button>
              </li>
            </ul>
          </Grid>

          <Grid item xs={6} sm data-scroll data-scroll data-scroll-speed="1" data-scroll-sticky>
            {selectedJob}
          </Grid>
          <Grid item xs={3}></Grid> 
        </Grid>
      </section>
    </div>
  );
}

export default App;
