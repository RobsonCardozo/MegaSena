import os
import random

# clear screen in windows or others SOs
clear_command = "cls" if os.name == "nt" else "clear"

# Generate user_game
user_game = set()
for i in range(1, 7):
    os.system(clear_command)
    while True:
        print(f"Enter your number: {i}: ")
        try:
            number = int(input())
        except ValueError:
            print("Only numbers between 1 and 60.")
            input("Press any key to continue...")
            continue
            os.system(clear_command)
        if 1 <= number <= 60 and number not in user_game:
            user_game.add(number)
            break
        else:
            print("Don't repeat numbers! And use only numbers between 1 and 60.")
            input("Press any key to continue......")
            os.system(clear_command)

# Generate machine game with random numbers
machine_game = set(random.randint(1, 60) for _ in range(6))

# Calculate the number of equal numbers between the two games
matches = len(user_game & machine_game)

# Print the result
os.system(clear_command)
print(f"Your game: {' '.join(map(str, sorted(user_game)))}")
print(f"Sorted numbers: {' '.join(map(str, sorted(machine_game)))}")
print(f"You got {matches} {'number' if matches == 1 else 'numbers'}!")
input("Press any key to exit...")
os.system(clear_command)
