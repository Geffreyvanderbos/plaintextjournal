import sqlite3
import os

def get_database_path():
    return input("Enter the path of your Things 3 database (main.sqlite): ")

def choose_export_format():
    choice = input("Choose export syntax (1 for Markdown, 2 for todo.txt): ")
    return 'markdown' if choice == '1' else 'todo.txt'

def connect_to_database(path):
    try:
        return sqlite3.connect(path)
    except sqlite3.Error as e:
        print(f"Error connecting to database: {e}")
        return None

def fetch_tasks(cursor):
    query = """
    SELECT title, status
    FROM TMTask
    WHERE trashed = 0 AND status IN (0, 3, 2)
    """
    cursor.execute(query)
    return cursor.fetchall()

def task_status(status):
    return {
        0: 'Not Yet Done',
        3: 'Done',
        2: 'Canceled'
    }.get(status, 'Unknown')

def format_task(task, format_type):
    title, status = task

    # Define the status markers and prefixes
    status_markers = {
        0: ('', ''),             # Not Yet Done
        3: ('x ', ''),           # Done
        2: ('x ', 'canceled ')   # Canceled
    }
    
    # Get the appropriate marker and prefix for the task status
    marker, prefix = status_markers.get(status, ('', ''))

    if format_type == 'markdown':
        return f"- [{marker.strip()}] {prefix}{title}\n"
    else:  # todo.txt format
        # Only add a space after the marker if it's not empty
        space = ' ' if marker else ''
        return f"{marker}{space}{prefix}{title}\n"

def main():
    db_path = get_database_path()
    export_format = choose_export_format()
    connection = connect_to_database(db_path)

    if connection:
        cursor = connection.cursor()
        tasks = fetch_tasks(cursor)

        tasks = [(title, status) for title, status in tasks if title.strip()]

        with open("exported_tasks.txt", "w") as file:
            for task in tasks:
                file.write(format_task(task, export_format))

        print("Tasks exported successfully.")
        connection.close()

if __name__ == "__main__":
    main()
