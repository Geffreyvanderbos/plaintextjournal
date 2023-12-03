---
title: Exporting Tasks from Things 3 Database to Plain Text Using Python
date: 2023-12-03
---

This guide will help you export your tasks from the Things 3 database on a Mac using a Python script. It'll export them either in Markdown or in Todo.txt syntax.

---

This guide is written for Things on MacOS. There is a way to [get your database on iOS or iPad](https://culturedcode.com/things/support/articles/2982272/#gqevu). However, I can't guarantee the script will work with it.

## Step 1: Locating Your Things 3 Database
Before you can use the script, you need to locate your Things 3 database:

1. Quit Things 3 app on your Mac.
2. Click on 'Finder' in your Dock.
3. In the menu bar, select Go → Go to Folder.
4. Paste this path: ~/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/
5. Press the Return key.
6. Open the folder named ThingsData-xxxxx.
7. Copy (do not move) the Things Database.thingsdatabase to your desired location. Like your desktop. Or a custom folder in documents.
8. To access the database, CTRL + click on the bundle and select 'Show Package Contents'. The file main.sqlite is your database.

(If you're using Things 3.13 or older, look for Things.sqlite3.)

## Step 2: Setting Up the Python Environment
Make sure you have Python installed on your Mac. You can find instruction on [installing Python here](https://docs.python.org/3/using/mac.html).

## Step 3: Running the Script
1. Download the [things2plaintext.py script from here](https://raw.githubusercontent.com/Geffreyvanderbos/plaintextjournal/main/src/assets/things2plaintext.py). I recommend saving it in the same directory as your main.sqlite.
2. Open your terminal.
3. Navigate ([how?](https://www.macworld.com/article/221277/command-line-navigating-files-folders-mac-terminal.html)) to the directory where you saved the script.
4. Run the script by typing `python things2plaintext.py`.

## Step 4: Using the Script
1. When prompted, enter the path of your Things 3 database. If it's in the same directory, type `main.sqlite`.
2. Choose the export format: type 1 for Markdown or 2 for [Todo.txt](https://todotxt.org/).
3. The script will connect to your database and export the tasks to a file named exported_tasks.txt in the same directory.

## Troubleshooting
If you encounter any errors, ensure that the database path is correct and that the right Python is installed. Raise [an issue on our Github](https://github.com/Geffreyvanderbos/plaintextjournal), when you are stuck.

I hope this helped making your tasks more resistent to time.

## Contributing
Feel free to improve upon the Python script. I know it can use it. Shoot a pull request on our Github repository.