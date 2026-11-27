import { auth } from "../src/lib/auth";
import { db } from "../src/lib/mongodb";
import { DEMO_ACCOUNTS } from "../src/lib/demo-accounts";

async function seed() {
  for (const account of DEMO_ACCOUNTS) {
    try {
      await auth.api.signUpEmail({
        body: {
          name: account.name,
          email: account.email,
          password: account.password,
        },
      });
      console.log(`Created ${account.email}`);
    } catch {
      console.log(`${account.email} already exists, skipping creation`);
    }

    await db
      .collection("user")
      .updateOne({ email: account.email }, { $set: { role: account.role } });
    console.log(`Set role of ${account.email} to ${account.role}`);
  }
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });