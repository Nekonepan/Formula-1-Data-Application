import inquirer from "inquirer";
import fs from "fs";

const drivers_path = "Drivers/drivers.json";
const teams_path = "Teams/teams.json";
const circuits_path = "Circuits/circuits.json";

function read_data() {
  try {
    const drivers_content = fs.readFileSync(drivers_path, "utf-8").trim();
    const teams_content = fs.readFileSync(teams_path, "utf-8").trim();
    const circuits_content = fs.readFileSync(circuits_path, "utf-8").trim();

    return {
      drivers: JSON.parse(drivers_content),
      teams: JSON.parse(teams_content),
      circuits: JSON.parse(circuits_content),
    };
  } catch (err) {
    console.error(
      "Cannot read file or file does not exist, make sure the data file exists. ",
      err.message
    );
  }
}

let data = read_data();
async function main() {
  while (true) {
    const { menu } = await inquirer.prompt([
      {
        type: "list",
        name: "menu",
        message: "WELCOME TO FORMULA 1 DATA APPLICATION",
        choices: ["- DRIVERS", "- TEAMS", "- CIRCUITS", "- EXIT"],
      },
    ]);

    switch (menu) {
      case "- DRIVERS": {
        const driver_list = data.drivers.map(
          (d) =>
            `"- " ${d["RACE NUMBER"]} | ${d.NAME} | ${d.COUNTRY} | ${d.TEAM}`
        );

        const { select_driver } = await inquirer.prompt([
          {
            type: "List",
            name: "select_driver",
            message: "DRIVER LIST",
            choices: [driver_list, "- BACK"],
          },
        ]);

        if (driver_list) {
          const driver_data = data.driver.find(
            (d) =>
              `${d["RACE NUMBER"]} | ${d.NAME} | ${d.COUNTRY} | ${d.TEAM}` ===
              select_driver
          );

          const { info_type } = await inquirer.prompt([
            {
              type: "list",
              name: "info_type",
              message: `${driver_data.NAME}`,
              choices: ["- STATISTIC", "- BIOGRAPHY", "- BACK"],
            },
          ]);

          switch (info_type) {
            case "- STATISTIC": {
              console.table({
                "RACE NUMBER": driver_data["RACE NUMBER"],
                NAME: driver_data.NAME,
                COUNTRY: driver_data.COUNTRY,
                TEAM: driver_data.TEAM,
                "GRAND PRIX ENTERED": driver_data["GRAND PRIX ENTERED"],
                "CAREER POINTS": driver_data["CAREER POINTS"],
                "HIGHEST RACE FINISH": driver_data["HIGHEST RACE FINISH"],
                PODIUMS: driver_data.PODIUMS,
                "HIGHEST GRID POSITION": driver_data["HIGHEST GRID POSITION"],
                "POLE POSITION": driver_data["POLE POSITION"],
                "WORLD CHAMPIONSHIPS": driver_data["WORLD CHAMPIONSHIPS"],
                DNFs: driver_data.DNFs,
              });
            }

            case "- BIOGRAPHY": {
            }
          }
        } else {
          return;
        }
      }

      case "- TEAMS": {
        console.log("Teams");
        break;
      }

      case "- CIRCUITS": {
        console.log("Circuits");
        break;
      }

      case "- EXIT": {
        process.exit();
      }
    }
  }
}

main();
