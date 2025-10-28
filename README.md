# 🏎️ Formula 1 Data Application (CLI) - Node.js

A fully interactive **CLI (Command Line Interface)** application built using **JavaScript (Node.js)** to explore comprehensive **Formula 1 data**, including **Drivers**, **Teams**, and **Circuits**.  
This project demonstrates structured data management, JSON-based storage, and dynamic terminal interactions.

---

## 📌 Project Description

This CLI app provides an interactive way to browse through Formula 1 data such as:
- Driver statistics and biographies  
- Team summaries and technical profiles  
- Circuit details and records  

It’s designed as an educational and functional project to learn:
- How to build **CLI menus** using `inquirer`
- How to handle **JSON data files** in Node.js
- How to use **modular logic** for multiple data categories
- How to build **data-driven apps** without a database

---

## 🧩 Data Sources & Structure

Data is stored in JSON files organized by category:

```
|-- Drivers/
    |-- drivers.json      # Driver data (stats & biography)
|-- Teams/
    |-- teams.json        # Team data (technical & racing info)
|-- Circuits/
    |-- circuits.json     # Circuit information
|-- main.js               # Main application entry point
|-- package.json          # Dependencies & metadata
```

Each JSON file contains structured records.

## 🪪 Example: `teams.json`

```
[
  {
    "NAME": "McLaren",
    "DRIVER": ["Oscar Piastri", "Lando Norris"],
    "GRAND PRIX ENTERED": 990,
    "TEAM POINTS": 7628.5,
    "HIGHEST RACE FINISH": "1 (x201)",
    "PODIUMS": 441,
    "FULL TEAM NAME": "McLaren Formula 1 Team",
    "BASE": "Woking, United Kingdom",
    "TEAM CHIEF": "Andrea Stella",
    "TECHNICAL CHIEF": ["Peter Prodromou", "Neil Houldey"],
    "CHASSIS": "MCL39",
    "POWER UNIT": "Mercedes",
    "FIRST TEAM ENTRY": 1966
  }
]
```

---

## ⚙️ Setup Requirements

- Node.js (v14 or higher)
- Terminal or Command Prompt
- (Optional) VS Code or any text editor

---

## 🚀 How to Run the Project

1. Clone this repository
```
git clone https://github.com/Nekonepan/Formula-1-Data-Application.git
cd Formula-1-Data-Application
```

2. Install dependencies
```
npm install
```

3. Run the app
```
node main.js
```

> You’ll be guided through an interactive menu with options for Drivers, Teams, and Circuits.

---

## 🧠 Application Workflow

The app uses a menu-based navigation system:

1. Main Menu
```
- DRIVERS
- TEAMS
- CIRCUITS
- EXIT
```

2. Drivers Section
- Displays a list of all drivers with race number, name, country, and team
- Allows you to view:
  - Statistics (career points, podiums, world championships, etc.)
  - Biography (personal background, date/place of birth, full bio text)
  
3. Teams Section
- Lists all teams and their drivers
- Shows:
  - Team Summary (race stats, podiums, championships)
  - Team Profile (technical details, chassis, base, team chiefs, etc.)

4. Circuits Section
- Lists all Formula 1 circuits
- Displays:
  - Circuit Details (country, name, length, laps, distance, record time)

5. Exit
- Closes the program gracefully.

---

## 🧮 Sample Output (CLI)

Example when selecting Driver Statistics:
```
┌───────────────────────┬──────────────────┐
│ (index)               │ Values           │
├───────────────────────┼──────────────────┤
│ RACE NUMBER           │ 4                │
│ NAME                  │ 'Lando Norris'   │
│ COUNTRY               │ 'United Kingdom' │
│ TEAM                  │ 'McLaren'        │
│ GRAND PRIX ENTERED    │ 147              │
│ CAREER POINTS         │ 1339             │
│ HIGHEST RACE FINISH   │ '1 [x9]'         │
│ PODIUMS               │ 41               │
│ HIGHEST GRID POSITION │ '1 [x13]'        │
│ POLE POSITION         │ 13               │
│ WORLD CHAMPIONSHIPS   │ 0                │
│ DNFs                  │ 13               │
└───────────────────────┴──────────────────┘
```

---

## ⚙️ Key Features

| Feature                           | Description                                 |
| --------------------------------- | ------------------------------------------- |
| 🧭 Interactive Menu Navigation    | Navigate between Drivers, Teams, Circuits   |
| 📊 Real-Time Data Display         | Uses `console.table()` for clean formatting |
| 📁 JSON-Based Storage             | No database - data read from JSON files     |
| 🔍 Detailed Information View      | View stats, bios, and profiles              |
| 🧩 Modular Structure              | Separate logic for each category            |
| ⚡ Fast & Lightweight             | CLI-based, minimal dependencies             |
| 💬 Dynamic Prompts via `inquirer` | Smooth terminal interaction                 |

---

## 🧠 Concept Highlights

- Demonstrates structured JSON parsing
- Uses inquirer for rich CLI interactivity
- Displays data tables for readability
- Implements looped navigation until user exits
- Encourages clean modular code for scalability

---

## 🙋 Author’s Note

This project was built as a Formula 1 data explorer and as a demonstration of how Node.js can handle structured data in a clean, user-friendly CLI.
It’s simple yet powerful - perfect for beginners exploring data-driven applications in JavaScript.

If you like this project or find it useful, feel free to:
- ⭐ Star the repository
- 🛠️ Fork it and build your own version

> *“Built for F1 enthusiasts and Node.js learners alike.”*

---

## ⚖️ License

This project is released under the MIT License.
You’re free to use, modify, and share it as long as proper credit is given.

---

## ✨ Credits

- Developed by: [Nekonepan](https://github.com/Nekonepan)
- Data source: [f1.com](https://www.formula1.com/) (Drivers, Teams, Circuits)
- Built with: [Node.js](https://nodejs.org/en) + [Inquirer.js](https://www.npmjs.com/package/inquirer)
- If you want to see similar projects, you can visit my other repository or at [Employee-Data-Application-Project-JavaScript-based-node.js](https://github.com/Nekonepan/Employee-Data-Application-Project-JavaScript-based-node.js-)

## Happy coding! 💻✨
