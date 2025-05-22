# main.py

import sqlite3

# 1. Connect to the database (or create it if it doesn't exist)
connection = sqlite3.connect('pets.db')
cursor = connection.cursor()

# 2. Create the cats table if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS cats (
        id INTEGER PRIMARY KEY,
        name TEXT,
        breed TEXT,
        age INTEGER
    )
''')
connection.commit()

# 3. Define a Cat class to act as our ORM
class Cat:
    all = []

    def __init__(self, name, breed, age):
        self.name = name
        self.breed = breed
        self.age = age
        Cat.all.append(self)

    def save(self):
        cursor.execute(
            'INSERT INTO cats (name, breed, age) VALUES (?, ?, ?)',
            (self.name, self.breed, self.age)
        )
        connection.commit()
        print(f"{self.name} saved to database.")

# 4. Create and save cat instances
Cat("Maru", "Scottish Fold", 3)
Cat("Hana", "Tortoiseshell", 1)

for cat in Cat.all:
    cat.save()

# 5. Close the connection
connection.close()
