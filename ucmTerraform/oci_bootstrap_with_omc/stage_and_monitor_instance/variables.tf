// Copyright (c) 2017, 2019, Oracle and/or its affiliates. All rights reserved.

variable "tenancy_ocid" {}
variable "user_ocid" {}
variable "fingerprint" {}
variable "private_key_path" {}
variable "region" {}

variable "compartment_ocid" {}
variable "ssh_public_key" {}

variable "shape_name" {
  default = "VM.Standard2.1"
}
variable "oci_identity_tag_namespace" {
  default = "owner"
}

variable "oci_identity_tag1" {
  default = "uptime"
}
variable "oci_identity_tag2" {
  default = "chargeback"
}
variable "oci_identity_tag3" {
  default = "team"
}
variable "oci_identity_tag4" {
  default = "type"
}
variable "subnet_ocid" {
 
}

variable "oci_identity_tag_value1" {
  default = "2"
}
variable "oci_identity_tag_value2" {
  default = "chargeback"
}
variable "oci_identity_tag_value3" {
  default = "team"
}
variable "oci_identity_tag_value4" {
  default = "type"
}
variable "instance_image_ocid" {
  type = "map"

  default = {
    // See https://docs.us-phoenix-1.oraclecloud.com/images/
    // Oracle-provided image "Oracle-Linux-7.5-2018.10.16-0"
    us-phoenix-1 = "ocid1.image.oc1.phx.aaaaaaaaoqj42sokaoh42l76wsyhn3k2beuntrh5maj3gmgmzeyr55zzrwwa"

    us-ashburn-1   = "ocid1.image.oc1.iad.aaaaaaaageeenzyuxgia726xur4ztaoxbxyjlxogdhreu3ngfj2gji3bayda"
    eu-frankfurt-1 = "ocid1.image.oc1.eu-frankfurt-1.aaaaaaaaitzn6tdyjer7jl34h2ujz74jwy5nkbukbh55ekp6oyzwrtfa4zma"
    uk-london-1    = "ocid1.image.oc1.uk-london-1.aaaaaaaa32voyikkkzfxyo4xbdmadc2dmvorfxxgdhpnk6dw64fa3l4jh7wa"
  }
}
variable "ad" {}
//variable "hostname_label"{}

