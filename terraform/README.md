# Terraform Infrastructure for URL Shortener Frontend

Este directorio contiene la configuración de Terraform para desplegar el frontend en AWS S3 y CloudFront.

## Prerequisitos

- [Terraform](https://www.terraform.io/downloads.html) instalado
- AWS CLI configurado con credenciales
- Cuenta de AWS

## Estructura

- `main.tf` - Recursos principales (S3, CloudFront)
- `variables.tf` - Variables de configuración
- `outputs.tf` - Outputs después del deploy

## Comandos

### Inicializar Terraform

```bash
terraform init
```

### Ver plan de ejecución

```bash
terraform plan
```

### Aplicar cambios

```bash
terraform apply
```

### Ver outputs

```bash
terraform output
```

### Destruir infraestructura

```bash
terraform destroy
```

## Recursos creados

1. **S3 Bucket** - Hosting estático del frontend
2. **CloudFront Distribution** - CDN y HTTPS
3. **Origin Access Control** - Seguridad entre CloudFront y S3
4. **Bucket Policies** - Permisos de acceso

## Outputs

Después de ejecutar `terraform apply`, obtendrás:

- `s3_bucket_name` - Nombre del bucket S3
- `cloudfront_domain_name` - URL de CloudFront
- `cloudfront_distribution_id` - ID para invalidaciones de cache
- `website_url` - URL completa del sitio web

## Configuración de GitHub Secrets

Copia estos valores a GitHub Secrets:

```bash
# Obtener outputs
terraform output s3_bucket_name
terraform output cloudfront_distribution_id
terraform output cloudfront_domain_name
```

Agrega estos secrets en GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`
- `CLOUDFRONT_DOMAIN_NAME`
