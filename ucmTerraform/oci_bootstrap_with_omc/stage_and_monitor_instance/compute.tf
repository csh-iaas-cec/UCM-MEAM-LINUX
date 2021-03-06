// Copyright (c) 2017, 2019, Oracle and/or its affiliates. All rights reserved.

resource "oci_core_instance" "TFInstance" {
  availability_domain = "${data.oci_identity_availability_domain.ad.name}"
  compartment_id      = "${var.compartment_ocid}"
  display_name        = "mytfinstance"
  shape               = "${var.shape_name}"

  create_vnic_details {
    subnet_id        = "${var.subnet_ocid}"
    display_name     = "primaryvnic"
    assign_public_ip = true
   // hostname_label   = "${var.hostname_label}"
  }

  source_details {
    source_type = "image"
    source_id   = "${var.instance_image_ocid[var.region]}"

    # Apply this to set the size of the boot volume that's created for this instance.
    # Otherwise, the default boot volume size of the image is used.
    # This should only be specified when source_type is set to "image".
    #boot_volume_size_in_gbs = "60"
  }

  # Apply the following flag only if you wish to preserve the attached boot volume upon destroying this instance
  # Setting this and destroying the instance will result in a boot volume that should be managed outside of this config.
  # When changing this value, make sure to run 'terraform apply' so that it takes effect before the resource is destroyed.
  #preserve_boot_volume = true

  metadata {
    ssh_authorized_keys = "${file(var.ssh_public_key)}"
  }
  defined_tags = "${
    map(
      "${var.oci_identity_tag_namespace}.${var.oci_identity_tag1}", "${var.oci_identity_tag_value1}",
      "${var.oci_identity_tag_namespace}.${var.oci_identity_tag2}", "${var.oci_identity_tag_value2}",
      "${var.oci_identity_tag_namespace}.${var.oci_identity_tag3}", "${var.oci_identity_tag_value3}",
      "${var.oci_identity_tag_namespace}.${var.oci_identity_tag4}", "${var.oci_identity_tag_value4}"
    )
  }"
}
