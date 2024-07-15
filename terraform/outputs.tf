output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.website_distribution.id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.website_distribution.domain_name
}

output "s3_bucket_name" {
  value = aws_s3_bucket.website_bucket.bucket
}

output "website_url" {
  value = "https://${var.domain_name}"
}
