variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "us-west-1"
}

variable "bucket_name" {
  description = "S3 Bucket name for frontend"
  type        = string
  default     = "url-shortener-frontend-acortador"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}
