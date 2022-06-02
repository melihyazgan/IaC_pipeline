import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure";

// Create a separate resource group for this example.
const resourceGroup = new azure.core.ResourceGroup("cop-mya1rlz-maa2plg-caj1rlz-ras1rlz-container-reg");
