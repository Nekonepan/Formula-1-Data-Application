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
          (d) => `${d["RACE NUMBER"]} | ${d.NAME} | ${d.COUNTRY} | ${d.TEAM}`
        );

        const { select_driver } = await inquirer.prompt([
          {
            type: "list",
            name: "select_driver",
            message: "DRIVER LIST",
            choices: [...driver_list, "- BACK"],
          },
        ]);

        if (select_driver !== "- BACK") {
          const driver_data = data.drivers.find(
            (d) =>
              `${d["RACE NUMBER"]} | ${d.NAME} | ${d.COUNTRY} | ${d.TEAM}` ===
              select_driver
          );
          await show_driver_info(driver_data);
        }

        async function show_driver_info(driver_data) {
          while (true) {
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
                break;
              }

              case "- BIOGRAPHY": {
                console.table({
                  NAME: driver_data.NAME,
                  "DATE OF BIRTH": driver_data["DATE OF BIRTH"],
                  "PLACE OF BIRTH": driver_data["PLACE OF BIRTH"],
                });

                const { show_bio } = await inquirer.prompt([
                  {
                    type: "list",
                    name: "show_bio",
                    message: "BIOGRAPHY",
                    choices: ["- SHOW FULL BIOGRAPHY", "- BACK"],
                  },
                ]);

                switch (show_bio) {
                  case "- SHOW FULL BIOGRAPHY": {
                    console.log(driver_data.NAME);
                    console.log("\nBIOGRAPHY :");
                    console.log(driver_data.TEXT);
                    break;
                  }

                  case "- BACK": {
                    break;
                  }
                }
                break;
              }

              case "- BACK": {
                return;
              }
            }
          }
        }
      }

      case "- TEAMS": {
        const team_list = data.teams.map(
          (t) => `${t.NAME} | ${t.DRIVER[0]} | ${t.DRIVER[1]}`
        );

        const { select_team } = await inquirer.prompt([
          {
            type: "list",
            name: "select_team",
            message: "TEAM LIST",
            choices: [...team_list, "- BACK"],
          },
        ]);

        if (select_team !== "- BACK") {
          const team_data = data.teams.find(
            (t) => `${t.NAME} | ${t.DRIVER[0]} | ${t.DRIVER[1]}` === select_team
          );
          await show_team_info(team_data);
        }

        async function show_team_info(team_data) {
          while (true) {
            const { info_type } = await inquirer.prompt([
              {
                type: "list",
                name: "info_type",
                message: `${team_data.NAME}`,
                choices: ["- TEAM SUMMARY", "- TEAM PROFILE", "- BACK"],
              },
            ]);

            switch (info_type) {
              case "- TEAM SUMMARY": {
                console.table({
                  NAME: team_data.NAME,
                  DRIVER: `${team_data.DRIVER.join(" | ")}`,
                  "GRAND PRIX ENTERED": team_data["GRAND PRIX ENTERED"],
                  "HIGHEST RACE FINISH": team_data["HIGHEST RACE FINISH"],
                  PODIUMS: team_data.PODIUMS,
                  "HIGHEST GRID POSITION": team_data["HIGHEST GRID POSITION"],
                  "POLE POSITION": team_data["POLE POSITION"],
                  "WORLD CHAMPIONSHIPS": team_data["WORLD CHAMPIONSHIPS"],
                  "FULL TEAM NAME": team_data["FULL TEAM NAME"],
                  BASE: team_data.BASE,
                  "TEAM CHIEF": team_data["TEAM CHIEF"],
                  "TECHNICAL CHIEF": `${team_data["TECHNICAL CHIEF"].join(
                    " | "
                  )}`,
                  CHASSIS: team_data.CHASSIS,
                  "POWER UNIT": team_data["POWER UNIT"],
                  "FIRST TEAM ENTRY": team_data["FIRST TEAM ENTRY"],
                });
                break;
              }
              case "- TEAM PROFILE": {
                break;
              }
              case "- BACK": {
                return;
              }
            }
          }
        }
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
