import random

# Generate user's game set
user_game = set()
for i in range(1, 7):
    while True:
        number = int(input(f"Please enter number {i}: "))
        if 1 <= number <= 60 and number not in user_game:
            user_game.add(number)
            break
        else:
            print(f"Invalid number. Please choose a number between 1 and 60 that hasn't been chosen before.")

# Generate machine's game set
machine_game = {random.randint(1, 60) for _ in range(6)}

# Count the number of matching numbers
matches = sum(u == m for u, m in zip(user_game, machine_game))

# Print the result
print(f"Your game: {' '.join(map(str, user_game))}")
print(f"Números sorteados: {' '.join(map(str, machine_game))}")
print(f"You got {matches} {'match' if matches == 1 else 'matches'}!")
