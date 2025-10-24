# Rock-Paper-Scissors Game

A simple two-player Rock-Paper-Scissors game implemented in **JavaScript, HTML, and CSS**.  
This repository contains **two versions**:  

- **Version 1 (V1)** → Luck-based, random choices  
- **Version 2 (V2)** → Secret player input, manual choices  

---

## 📝 Version Comparison

| Feature | V1 (Random / Luck-based) | V2 (Secret Player Input) |
|---------|--------------------------|--------------------------|
| Player input | Randomly generated | Players enter manually |
| Secret choices | Not needed | Yes, input is hidden from other player |
| Winner logic | Based on random values | Based on player-entered choices |
| Tie detection | ✔ | ✔ |
| Input validation | Not needed | ✔ (prevents invalid spelling) |
| UX | Quick, instant | Turn-based, sequential |
| Improvements possible | Score tracking, animations | Buttons instead of text input, score tracking, animations |

---

## 🎮 Version 1 – Random/Luck-Based

### Features
- Each player gets a **random choice**: Rock, Paper, or Scissor.  
- Winner is calculated automatically.  
- Game resets after a short interval for the next round.  
- Uses **Font Awesome icons** for visual representation.  

### How it Works
1. Both players click **“Grab”** buttons.  
2. System generates random choices for Player A and Player B.  
3. Winner is determined and displayed.  

---

## 🎮 Version 2 – Secret Player Input

### Features
- Each player **enters their choice manually** (Rock, Paper, Scissor).  
- Player A’s choice is **hidden** from Player B.  
- Input is **validated** to prevent spelling mistakes.  
- Winner or tie is displayed after both players submit.  

### How it Works
1. Player A types their choice (hidden) → locks it.  
2. Player B types their choice (hidden) → locks it.  
3. Click **“Check Winner”** → system shows both choices and declares winner.  

### Notes
- Inputs are **case-insensitive** and **trimmed** for safety.  
- Optionally, **buttons/icons** can replace text input for full secrecy and to avoid typing errors.  

---

## ⚙️ Game Logic (Both Versions)

- **Rules:**  
  - Rock beats Scissor  
  - Scissor beats Paper  
  - Paper beats Rock  
- **Tie:** If both players choose the same.  
- V2 adds **input validation** to reject invalid entries.  

---

## 💻 Technologies Used

- **HTML5** – structure  
- **CSS3** – styling, layout, and optional transitions  
- **JavaScript (ES6)** – game logic, input validation, and interactivity  
- **Font Awesome** – optional icons (V1)

---

### Installation  
Clone the repository:

```bash
git clone https://github.com/Nagadivya9515/RockPaperScissor.git
cd ExpenseTracker
```

---

## Author

👤 **Nagadivya9515**

* Github: [@Nagadivya9515](https://github.com/Nagadivya9515)

## Show your support

Give a ⭐️ if this project helped you!
