const connect = require('./mongodb-client');

async function main() {
  try {
    const client = await connect()
    const inventory = await client.db("admin").collection("inventory").find().toArray();
    console.log(inventory);
    return {
      "body": inventory
    }

  } catch {
    console.error();
  }
}

exports.main = main;
// main().catch(console.error);

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach(db => {
//     console.log(`- ${db.name}`);
//   })
// }

// async function getInventory(client) {
//   const inventory = await client.db("admin").collection("inventory").find().toArray();
//   console.log(inventory);
//   return {
//       body: {
//         coffee: inventory
//     }
//   }
// }