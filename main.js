import inquirer from "inquirer";

async function main() {
  while (true) {
    const { menu } = await inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "WELCOME TO FORMULA 1 DATA APPLICATION",
        choices: ["1. DRIVERS", "2. TEAMS", "3. CIRCUITS", "4. EXIT"],
      },
    ]);

    switch (menu) {
      case "1. DRIVERS": {
        console.log("Drivers");
        break;
      }

      case "2. TEAMS": {
        console.log("Teams");
        break;
      }

      case "3. CIRCUITS": {
        console.log("Circuits");
        break;
      }

      case "4. EXIT": {
        process.exit();
      }
    }
  }
}

main();
