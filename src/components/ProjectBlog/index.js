import React from 'react'
import './index.scss'

function ProjectBlog() {
  const title = 'Project Blog'
  const titleLetters = Array.from(title)

  function goToNextProject() {
    window.location.href = '/portfolio/projecttranslate'
  }

  return (
    <div className="container projectblog-page">
      <h1 className="page-title">
        {titleLetters.map((letter, index) => (
          <span key={index} className={`letter letter-${index}`}>
            {letter !== ' ' ? letter : '\u00A0'}{' '}
          </span>
        ))}
      </h1>
      <div className="content-container">
        <img
          src="/images/ProjectBlogArch.png"
          alt="AWS Architecture Visualization"
        />
      </div>
      <div className="text-containers-wrapper">
        <div className="text-container">
          <h2 className="container-title">Description</h2>
          <p className="container-text">
            Project Blog is a cloud-based platform I created to document my
            learning journey. It's built with a React frontend, styled with
            Sass, and features dynamic routing and state management for a
            seamless user experience. The backend is hosted on an AWS EC2
            instance with a secure setup of Nginx and Elastic IP. For domain
            management and SSL encryption, I utilized AWS Route 53 and AWS
            Certificate Manager, ensuring secure and reliable user access.
            Content delivery is accelerated with Amazon CloudFront, distributing
            the website globally at high speed. The project's deployment is
            automated through AWS CodeBuild and CodePipeline, integrating
            directly with GitHub for continuous integration and deployment.
          </p>
          <a
            href="https://github.com/SolemnDave/Project-Blog/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Navigate to the github page
          </a>
          <br></br>
          <br></br>
          <a
            href="https://blog.solemndave.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            Navigate to ProjectBlog
          </a>
        </div>
        <div className="text-container">
          <h2 className="container-title">Architecture</h2>
          <div className="container-text">
            <li>
              Users access the Project Blog by visiting the custom domain
              (https://blog.solemndave.cloud/).
            </li>
            <li>
              When the custom domain is requested, AWS Route 53 resolves the
              domain name. It acts as the scalable and highly available DNS
              service, directing the request to the appropriate resources.
            </li>
            <li>
              The request is then routed through Amazon CloudFront, AWS's
              content delivery network (CDN). CloudFront caches the site's
              content at edge locations globally, reducing latency by serving
              the content from locations closest to the users.
            </li>
            <li>
              The origin of the content is an Amazon EC2 instance, which hosts
              the actual web application. The EC2 instance is configured to
              serve the Project Blog's static and dynamic content, utilizing
              computing resources to manage user requests.
            </li>
            <li>
              AWS CloudWatch monitors the application's performance and health.
              It collects and tracks metrics, sets alarms, and automatically
              reacts to changes in the AWS resources, providing insights and
              ensuring the reliability of the application.
            </li>
            <p style={{ fontWeight: 'bold', fontSize: '22px' }}>
              Upcoming Additions
            </p>

            <li>
              The CI/CD pipeline is managed by AWS CodePipeline, which automates
              the build, test, and deploy phases every time a change is
              committed to the source code repository. It integrates with AWS
              CodeBuild to compile and build the code, preparing it for
              deployment.
            </li>
            <li>
              The AWS Cloud Development Kit (CDK) is used to define the cloud
              infrastructure as code. This allows for the automated setup and
              provisioning of resources like EC2 instances, CloudFront
              distributions, and more, ensuring consistency and version control
              for the infrastructure.
            </li>
          </div>
        </div>
        {/* <Loader type="pacman" /> */}
      </div>

      <button
        onClick={goToNextProject}
        className="next-project-button"
      ></button>
    </div>
  )
}

export default ProjectBlog
