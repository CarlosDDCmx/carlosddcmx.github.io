---
layout: page
title: Introduction to programming
description: Tutorial 1
img: assets/img/Lección1.jpg
importance: 1
category: code
pseudocode: true
---

There are many tutorials, courses, videos, books, and other resources about programming or coding. Most of them start with the basics and provide little snippets of code but often leave out deeper knowledge and professional-level concepts. This first introduction will guide you through a lesson on creating a complete program, where good coding practices will also be included to make it much more comprehensive.

In the world of computer programming, there are two main ways that programs are turned into something your computer can understand: compiled and interpreted languages.

A compiled language is like writing a book and then translating the entire book into another language before anyone reads it. Once the translation is done, the book is ready to be read quickly and easily. Examples of compiled languages are C and C++. The advantage is that programs run very fast because the translation (compilation) has already been done. The downside is that making changes can be slow, as the whole book (program) needs to be retranslated every time.

An interpreted language is like having someone translate a book as you read it, page by page. Examples include Python and JavaScript. The advantage is that it's easier to make and test changes quickly since you only translate what you need at the moment. However, the program might run slower because it’s being translated on the fly.

One way to identify their main difference is that a compiled language is like an "all or nothing" process, where the book must be fully ready to be published. On the other hand, an interpreted language is like sharing a final manuscript with the public, where typos and proofreading can still be expected. Both are as good or bad as the coder(s) wrote it.

In this example, we are going to code with Python, an interpreted language widely used (specially on the Artificial Intelligence field) and very easy to understand. VS Code as IDE (Integrated Development Environment) and the OS (Operative System) will be Windows.

Here’s a step-by-step guide to installing Python and Visual Studio Code (VS Code) on Windows.

## 1. **Installations**

### 1.1 **Python**

1. **Download Python:**

   - Go to the [official Python website](https://www.python.org/downloads/).
   - Click on the yellow "Download Python" button. This will download the latest version of Python.

2. **Run the Python Installer:**

   - Locate the downloaded file (usually in your `Downloads` folder) and double-click it to run the installer.

3. **Add Python to PATH:**

   - On the first screen of the installer, check the box that says **"Add Python to PATH."** This step is crucial for running Python from the command line.
   - Click on **"Customize installation"** if you want to select specific features, or simply click **"Install Now"** for the default setup.

4. **Finish the Installation:**
   - After the installation completes, click on **"Close"** to exit the installer.
   - You can verify the installation by opening the Command Prompt (search for `cmd` in the start menu) and typing `python --version`. This should return the Python version number.

### 1.2. Set Up Python in the Environment Variables (If Not Done Automatically)

1. **Open System Properties:**

   - Right-click on **This PC** or **My Computer** on your desktop or in File Explorer.
   - Click **Properties**.
   - Select **Advanced system settings** on the left.
   - In the System Properties window, click on the **Environment Variables** button.

2. **Add Python to Path:**
   - In the Environment Variables window, find the **Path** variable in the **System variables** section and select it. Click **Edit**.
   - Click **New** and add the path to your Python installation (e.g., `C:\Python312\` and `C:\Python312\Scripts\` depending on your installation directory).
   - Click **OK** on all windows to save the changes.

### 1.3. Install Visual Studio Code

1. **Download VS Code:**

   - Go to the [official Visual Studio Code website](https://code.visualstudio.com/).
   - Click the blue **"Download for Windows"** button. This will download the VS Code installer.

2. **Run the VS Code Installer:**

   - Locate the downloaded file and double-click it to start the installation.
   - Read and agree to the license terms, then click **Next**.

3. **Select Installation Options:**

   - Choose the installation location or leave it as default. Click **Next**.
   - On the next screen, you can choose to create a desktop icon and select additional options like adding **"Open with Code"** to context menus. Select the options you prefer, then click **Next**.

4. **Complete the Installation:**
   - Click **Install** to begin the installation process.
   - Once the installation is complete, you can choose to launch VS Code immediately by checking the **"Launch Visual Studio Code"** box and clicking **Finish**.

### 1.4. Verify Installation and Set Up Python in VS Code

1. **Open VS Code:**

   - If you didn’t launch VS Code during installation, you can find it in the Start menu or on your desktop.

2. **Install Python Extension:**

   - Click on the Extensions icon on the left sidebar (it looks like four squares).
   - Search for "Python" in the search bar and click **Install** on the Microsoft Python extension.

3. **Set Up a Python Workspace:**

   - Open a folder where you plan to write Python code by selecting **File > Open Folder**.
   - Once you select the folder, this will become the program's "PATH" and where all the files need to be saved from now on.

### 2. **Project Overview**

This project will work with sheets from an OpenDocument file, which is similar to an Excel file (".xlsx" extension) from Microsoft Office. The goal is to convert all the data in a sheet to a JSON file. JSON files are widely used by coders and programmers, so learning how to work with them is highly recommended.

We will also learn about modularity, error handling, using libraries in Python, and how to structure code effectively.

### 3. **Create an environment**

Berore starting a new project with python, although this is common in modern standards in any language, make sure to isolate it from the main python installation by creating an environment. To achive this, follow the next steps:

1. Open the terminal in VS Code by selecting Terminal > New Terminal from the top menu or pressing Ctrl + (backtick).
2. In the terminal, navigate to your project folder (if not already there) using the cd command:

   ```cmd
   cd <path/to/your/project/folder>
   ```

3. Create a virtual environment by running:

   ```cmd
   python -m venv <name_environment>
   ```

4. This will create a folder as indicated by name_environment in your project directory containing the virtual environment. You will see a lot of new files such as "Include", "Lib" and "Scripts" added.
5. Activate the Virtual Environment with the next:

   ```cmd
   source <name_environment>/scripts/activate
   ```

6. After activation, you should see (name_environment) at the beginning of your terminal prompt, indicating that the environment is active.
7. In the Command Palette (press Ctrl + Shift + P), type >Python: Select Interpreter
8. Choose the interpreter from your virtual environment. It should look something like .name_environment\Scripts\python.exe

> ##### WARNING
>
> On windows, you could also see in the terminal the name_environment twice after following the steps for creating an environment.
> {: .block-warning}

### 4. **Structuring the code**

First of all, I consider important to start by structuring code to make maintenance, reuse, and debugging easier. Also the importance to think in pseudocode. This means: think how to solve a problem without considering the programming language. As the name implies, it is not actual code so it can be written in plain text. This will keep the ideas organized and will be a starting point for any language.

#### 4.1 **Pseudocode**

```pseudocode
% Pseudocode for ods to json
\begin{algorithm}
\caption{ODS to JSON}
\begin{algorithmic}
\INPUT ods_file, sheet number, json_file_path
\OUTPUT json_file
\PROCEDURE{ODS2JSON}{}
    \STATE table ← read ods file (file_path_ods)
    \STATE data_json ← transcribe data to JSON format (table)
    \STATE save JSON file (data_json, json_file_path)
\ENDPROCEDURE
\end{algorithmic}
\end{algorithm}
```

This serves as a map or recipe to start coding.

#### 4.2 **Program structure**

Next is creating the file structure. A suggestion is to have a file for functions, another for configurationm one main and a readme.

- Functions: As the name implies, all functions should be in here, it would also include any external libraries.
- Configuration: This will contain all the variables interacting with the functions, for example, the path for the ods and json files and the sheet number. In summary, the inputs can be stored in this file.
- Main: I consider it the logic or the path the program follows when calling the functions. This one should contain all our libraries/packages/frameworks we created as well the config file. Another way to put it, Main is a pot where all the files we created are put in. As such, all other files should not import anything we created since Main will be the place where all our work is reunited.
- Readme: Contains our programs's "how to" and info. Those can be the installation, requirements, changes, updates, contact and general explanation.

##### 4.2.1 **Create the files**

1. Inside VS Code, Open the Command Palette by Pressing Ctrl + Shift + P.
2. In the Command Palette, type >New Folder and select the "Files: New Folder" option. In the Explorer view on the left sidebar, you’ll see a prompt to name your folder. Type a name, in this example will be code, and press Enter. This will create a folder named what you typed,
3. Double-click on the code folder in the Explorer view to open it.
4. Right-click inside the code folder in the Explorer view and select "New File".
5. Name the file, is recommended to be a meaninful one, in this example I start with "main.py".
6. Repeat the process to create the next files: "functions.py", "readme.md" and "config.json"
7. Check the Explorer view to ensure that all four files are listed inside the code folder.

### 5. **Coding**

Finally is time to add some actual code. Start by opening the "functions.py" file. The first to do is importing libraries. A library in Python is a collection of pre-written code that you can use to perform common tasks, saving you the effort of writing the code yourself. Libraries contain modules, which are files of Python code that define functions, classes, and variables. By using libraries, you can extend the functionality of your programs without reinventing the wheel. As such, we won't be doing a code to read an ods file, instead we are going to use a library to get the data we want. To do this, all you need to do is add the next line.

```python
from pyexcel_ods import get_data
```

However is very likely you get an error indicating the library cannot be found. This is because this is an external or third party library, therefore is not out of the box whenever Python is installed. Fortunately is very easy to install. All you need to do is go back to the terminal and type the next line:

```cmd
pip install pyexcel-ods
```

pip is also a library, which connects to the web to download another library, in the example above is called pyexcel-ods. Python too many libraries, some which are being tracked and stored in the [official repository](https://pypi.org). As such, [pyexcel-ods is found in said repository](https://pypi.org/project/pyexcel-ods/).

> ##### WARNING
>
> It is possible when you run pip, it will warn about a new version. You can directly copy the command shown in said warning and paste it to have the newest version. This will happen everytime your version is lower than the latest one released.
> {: .block-warning}

To verify you have installed a library or package, you can use the either of the next commands in terminal:

```cmd
pip list

      or

pip show <package_name>
```

The first lists all the packages you have installed in your current environment. While the second one gives a more detailed info about the package in case it is installed.
