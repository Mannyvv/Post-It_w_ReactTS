
import githublogo from "../assets/images/github.png";
import herokulogo from "../assets/images/heroku.png";
import postgreslogo from "../assets/images/postgres.png";
import aws from "../assets/images/aws.png";
import amplify from "../assets/images/amplify.png";



const TechstackPage = () => {
  return (
    <div className="container">

      <hr className="bg-dark"></hr>
      <div className="row" >
        <h1> <i>Old Tech Stack:</i></h1>
      </div>

      <div className="row content" style={{ marginBottom: "50px" }}>
        <div className="col-sm col-lg-4">
          <img className="image-fluid" alt="github" src={githublogo}></img>
          <h1>Github Pages</h1>
          <p>
            Utilized React.js to create a dynamic web user interface. Hosted the
            project's code on GitHub Pages for easy showcasing and deployment on
            the web, while integrated to backend services on other cloud
            services.
          </p>
        </div>
        <div className="col-sm col-lg-4">
          <img
            className="image-fluid"
            src={herokulogo}
            alt="Herokulogo"
            style={{ marginLeft: "-15px" }}
          ></img>
          <h1>Heroku with Docker</h1>
          <p>
            Implemented an Express.js server within a Docker container. Selected
            Heroku as the hosting platform to deploy and manage the Docker
            container,(Create, Read, Update, Delete) operations to my database.
          </p>
        </div>
        <div className="col-sm col-lg-4">
          <img className="image-fluid" alt="postgreslogo" src={postgreslogo}></img>
          <h1>Postgres</h1>
          <p>
            Utilized ElephantSQL to host my PostgreSQL database, creating a
            cloud-based database solution. This implementation ensures seamless
            access and management of the PostgreSQL database in the cloud
          </p>
        </div>
      </div>
    
      <hr className="bg-dark"></hr>

      <div className="row ">
        <h1><i>Updated Tech Stack:</i></h1>
      </div>
      <div className="row content" style={{ marginBottom: "50px" }}>

        <div className="col-sm col-lg-4">
          <img className="image-fluid" alt="github" src={githublogo}></img>
          <h1>Github</h1>
          <p>
            Utilized React.js with Typescript to create a dynamic web user interface. Hosted the
            project's code on Github for easy showcasing and deployment on
            the web, while integrated to backend services on AWS
            services.
            
          </p>
        </div>
        <div className="col-sm col-lg-4">
          <img
            className="image-fluid"
            src={aws}
            alt="Herokulogo"
            style={{ marginLeft: "-15px", paddingTop:"30px" }}
          ></img>
          <h1>AWS</h1>
          <p>
          Deployed project using AWS Amplify, leveraging its hosting capabilities to seamlessly serve my website while integrating backend services.
          </p>
        </div>
        <div className="col-sm col-lg-4" style={{paddingTop:"30px"}}>
          <img className="image-fluid" alt="postgreslogo" src={amplify}></img>
          <h1>Database</h1>
          <p>
          Utilized AWS Amplify's backend services, including its database capabilities, to store and retrieve application data efficiently.
          </p>
        </div>
      </div>
  
      <hr className="bg-dark" ></hr>
      




    </div>
  );
}

export default TechstackPage;
