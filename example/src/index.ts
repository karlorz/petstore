import { createConfiguration, PetApi } from 'petstore';
import type { PetApiFindPetsByStatusRequest } from 'petstore/types/ObjectParamAPI';

const configuration = createConfiguration();
const apiInstance = new PetApi(configuration);

const request: PetApiFindPetsByStatusRequest = {
    // Status values that need to be considered for filter
  status: [
    "available",
  ],
};

async function main() {
    try {
      const data = await apiInstance.findPetsByStatus(request.status);
      console.log(data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  }
  
  main();

