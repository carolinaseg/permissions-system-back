import { assignPermissionToUser } from "./src/services/userPermission.service.js";
console.log("Running test...");
const run = async () => {
  try {
    const result = await assignPermissionToUser("1", 99);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

run();