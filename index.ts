import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";

// Create a separate resource group for this example.
const resourceGroup = new resources.ResourceGroup("resourceGroup", {
    location: "westeurope",
    resourceGroupName: "cop-mya1rlz-maa2plg-caj1rlz-ras1rlz-container-reg",
    tags: {owner: "ras1rlz"},
});
