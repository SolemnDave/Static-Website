variable "aws_region" {
  description = "The AWS region to create resources in."
  type        = string
}

variable "bucket_name" {
  description = "The name of the S3 bucket."
  type        = string
}

variable "domain_name" {
  description = "The domain name for the CloudFront distribution."
  type        = string
}

variable "certificate_arn" {
  description = "The ARN of the ACM certificate."
  type        = string
}

variable "hosted_zone_id" {
  description = "The ID of the Route 53 hosted zone."
  type        = string
}

variable "tags" {
  description = "A map of tags to add to all resources."
  type        = map(string)
  default     = {
    Project = "Static Web Project"
  }
}
