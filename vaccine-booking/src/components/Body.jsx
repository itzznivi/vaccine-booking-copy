import React from "react";
import "../styles/Body.css";
import injection from "../assets/injection.png";
import strong from "../assets/strong.png";
import fever from "../assets/fever.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import covishield from "../assets/covishield.png";
import covaxin from "../assets/covaxin.png";
import novavax from "../assets/novavax.png";

const Body = () => {
  return (
    <div className="container">
      <br />

      <div className="words">
        <div className="words1">
          <h1 className="head">
            <span>V</span>ACCINE <span>B</span>OOKING <span>P</span>ORTAL
          </h1>
          <p className="txt">
            Make an appointment with us today to get your covid vaccine
          </p>
          <button className="bookbtn"> BOOK YOUR SLOT</button>
        </div>
        <div className="img1">
          <img className="homepage" src={injection} alt="ji" />
        </div>
      </div>

      <div className="section2">
        <p className="why-class">Why must I get vaccinated?</p>
        <h1 className="head-class">
          Corona Virus Always <br />
          Getting Stronger
        </h1>
        <p className="description">
          Corona virus always evolved. By getting you and your family vaccinated
          you all got some advantages like
        </p>
        <div className="box-container">
          <div className="box ">
            <img src={fever} alt="Image 1" />
            <p className="box-txt">Prevent Effect</p>
          </div>
          <div className="box ">
            <img src={strong} alt="Image 2" />
            <p className="box-txt">Create Antibody</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <h1 className="info">
        <span>I</span>nformation <span>A</span>bout <span>V</span>acciness
      </h1>
      <div className="section3">
        <div className="card1"  >
          <Card  sx={{ maxWidth: 320 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={covishield}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Covishield
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Covishield is the brand name for the Oxford-AstraZeneca
                  COVID-19 vaccine manufactured by the Serum Institute of India.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card2">
          <Card sx={{ maxWidth: 320 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={covaxin}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Covaxin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Covaxin is an inactivated COVID-19 vaccine developed by Bharat
                  Biotech,an Indian biotechnology company.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card3">
          <Card sx={{ maxWidth: 320 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={novavax}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Novavax
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Novavax is a biotechnology company that has been actively
                  involved in the development of COVID-19 vaccines. 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="card4">
        <Card sx={{ maxWidth: 320 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/OIP.a-TVNPFeGRHzMPpYWxKhCAHaE7?rs=1&pid=ImgDetMain"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                 Sputnik
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Sputnik V  was the world's first registered COVID-19 vaccine and is named after the Soviet satellite Sputnik.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Body;
