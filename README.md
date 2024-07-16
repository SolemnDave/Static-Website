# Architecture

![Static-Website Architecture](src/assets/images/StaticWebArch.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)

# Static Website Hosting with AWS and Terraform

## Overview

This project hosts a React-based static website using AWS services and Terraform for enhanced functionality and deployment. The website is stored in an S3 bucket with custom error responses and is distributed globally via CloudFront, which also handles custom 403 and 404 errors. Route 53 manages DNS for easy access via a custom domain. A CI/CD pipeline with GitHub Actions automates deployment, syncing the built site to S3 and invalidating the CloudFront cache. Additionally, a DynamoDB table and Lambda function implement a view counter for tracking page views. Terraform manages the infrastructure, ensuring a scalable and efficient hosting solution. IAM is used for access management and CloudWatch for monitoring and logging.

## Features

- **S3 Bucket for Static Website Hosting:** Hosts the static website with `index.html` as the root and custom error handling.
- **CloudFront Distribution:** Globally caches and distributes content with custom 403 and 404 error responses.
- **Route 53 DNS Management:** Manages DNS records for the custom domain for easy access.
- **CI/CD Pipeline with GitHub Actions:** Automates the deployment, builds the React project, syncs to S3, and invalidates CloudFront cache.
- **Infrastructure as Code with Terraform:** Uses Terraform for consistent and easy AWS resource management.
- **Custom Domain Setup:** Integrates Route 53 and ACM for secure HTTPS access via a custom domain.
- **DynamoDB for View Counter:** Stores page view counts for fast and scalable data retrieval.
- **Lambda Function for View Counter:** Updates and retrieves view counts from DynamoDB for efficient tracking.
- **IAM:** Manages access to AWS resources securely.
- **CloudWatch:** Monitors and logs the infrastructure and application performance.

## Tech Stack

- **Frontend:** React for building the user interface, JavaScript, CSS, SASS, and HTML.
- **Hosting:** AWS S3 for static website hosting, CloudFront for content distribution.
- **DNS Management:** AWS Route 53 for managing DNS records.
- **CI/CD:** GitHub Actions for automating deployments.
- **Infrastructure:** Terraform for infrastructure as code.
- **Database:** AWS DynamoDB for storing view counts.
- **Backend Logic:** AWS Lambda for handling view counter logic.
- **Access Management:** AWS IAM for managing access.
- **Monitoring and Logging:** AWS CloudWatch for monitoring and logging.

## Setup

1. **Install Dependencies:**

   - Ensure you have Node.js and npm installed.
   - Run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```

2. **Build the Project:**

   - Compile the React application:
     ```bash
     npm run build
     ```

3. **Deploy Infrastructure with Terraform:**

   - Navigate to the `terraform` directory:
     ```bash
     cd terraform
     ```
   - Initialize Terraform:
     ```bash
     terraform init
     ```
   - Apply the Terraform configuration to create the necessary AWS resources:
     ```bash
     terraform apply
     ```

4. **Set Up GitHub Actions for CI/CD:**

   - Configure the following secrets in your GitHub repository settings:
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`

5. **Deploy the Website:**
   - Push your changes to the `main` branch:
     ```bash
     git add .
     git commit -m "Deploy static website"
     git push origin main
     ```
   - GitHub Actions will automatically build and deploy the website to S3, and invalidate the CloudFront cache.
