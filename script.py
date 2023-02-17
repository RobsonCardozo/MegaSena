import random

# Generate user's game array
user_game = [random.randint(0, 10) for _ in range(6)]

# Generate machine's game array
machine_game = [random.randint(0, 10) for _ in range(6)]

# Compare the two arrays and count the number of matching numbers
matches = sum(user_game[i] == machine_game[i] for i in range(len(user_game)))

# Print the result to the screen
print(f'Seu jogo: {user_game}')
print(f'Números sorteados: {machine_game}')
print(f'You got {matches} matches!')