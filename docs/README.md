# Rock-Paper-Scissors Game

A simple two-player Rock-Paper-Scissors game implemented in **JavaScript, HTML, and CSS**.  
This repository contains **two versions**:  

- **Version 1 (V1)** → Luck-based, random choices  
- **Version 2 (V2)** → Secret player input, manual choices  

---

## 📝 Version Comparison

| Feature | V1 (Random / Luck-Based) | V2 (Secret Input) | V3 (Buttons) |
|---------|--------------------------|------------------|--------------|
| Player input | Randomly generated | Manual, hidden | Manual via buttons |
| Secret choices | ❌ | ✔ | ✔ |
| Input validation | ❌ | ✔ | ✔ (buttons prevent errors) |
| Winner logic | Random comparison | Based on input | Based on input |
| Tie detection | ✔ | ✔ | ✔ |
| UX | Quick, instant | Turn-based, sequential | Turn-based, visual buttons |
| Typing errors | ❌ | ❌ (validated) | ❌ (buttons eliminate errors) |
| Potential glitch | ❌ | ❌ | Player can accidentally select only left buttons or first choice can leak to Player B |
| Improvements | Score tracking, transitions | Buttons, animations | Fix turn enforcement, score, transitions |
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

## 🎮 Version 3 – Buttons

**Features**  
- Replaces text input with **three clickable buttons** per player: Rock, Paper, Scissor.  
- Buttons make input **instant and error-free**.  
- Turn-based flow ensures Player B cannot see Player A’s choice.  
- Smooth reset after each round using `setInterval()`.  

**Potential Glitch**  
- There’s a chance Player B can accidentally select the left buttons meant for Player A.  
- Or the first choice may leak to Player B if turn enforcement is not strict.  
- Can be fixed by **disabling buttons after each player clicks** until the next round.

**How it works**  
1. Player A clicks a button → choice stored, buttons disabled.  
2. Player B clicks a button → choice stored, buttons disabled.  
3. Winner is calculated and displayed.  
4. Game auto-resets after ~3.6 seconds (`setInterval`).  

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
