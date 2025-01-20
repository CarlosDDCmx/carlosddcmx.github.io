---
layout: page
title: Adding system arguments
description: Tutorial 2
img: assets/img/Lección1.jpg
importance: 1
category: [coding]
pseudocode: true
---

The first program worked using the most common method tutorials teach, which is variables within the code. However there are still other ways to use them outside the code itself and gives a more "hacker" feeling. Through system arguments.

This requires the library sys from Python and make some small adjustments to the files: **__init__.py, functions.py and main.py**.

# 1. **New function**

The first step is in **functions.py**, using a conditional we will simply check if the argument numbers is exactly the required amount. In this case it is going to be 4. Go into the functions.py and make sure the library sys is being imported, then add a new function **check_sys_arg**:

```python
import sys

"""
// Code from lesson 1 here
"""

def check_sys_arg():
    """
    Checks if received system arguments are correct.
    Returns:
    A boolean value indicating if args are correct
    """
    if len(sys.argv) == 4:
        return True
    else:
        return False
```

# 2. **Modify package importing**

In the **__init__.py** add the **check_sys_arg** function:

```python
from .functions import read_ods_file, get_sheet_data, save_JSON_file, check_sys_arg
from .config_utils import load_config

__all__ = [
    'read_ods_file',
    'get_sheet_data',
    'save_JSON_file',
    'load_config',
    'check_sys_arg'
]
```

# 3. **Call check arguments in main**

The final step is adding in main the newly created function. Before, we used a config file to get the variables, now we can use arguments system to pass them onto the program via command line (or terminal in linux). So we can replace both lines with config and just get the system values with **sys.argv[i]** where **i** is the index number. However, as someone said before, why not both?. This can be done by adding another condintion inside main and modify it to check if the arguments are valid it will use them, else will use config files. This means main function will be changed to this:

```python
def main():
    try:
        if(check_sys_arg()):
            data_path = sys.argv[1]
            sheet_index = sys.argv[2]
            json_path = sys.argv[3]
        else:
            config_path = os.path.join(os.path.dirname(__file__), 'config', 'config.json')
            config = load_config(config_path)
            data_path = config["ods_file"]
            sheet_index = config["sheet_number"]
            json_path = config["JSON_file"]
        data = read_ods_file(data_path)
        table = get_sheet_data(data, sheet_index)
        save_JSON_file(table, json_path)
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)
```

A little explanation about sys.arg is in Python this is a special list where all the arguments or information passed from a command line/terminal are stored. This one will always have at least one which is the program you are calling, in this case main.py. To get it you have to use sys.argv[0], now, in coding everything starts with zero(0), and any other information is added in sequential order. That's why in the block after **if(check_sys_arg()):** we are going from 1 to 3. This means the order is important whenever you call the program from command line/terminal.

# 4. **Calling our program from command line/terminal**

The program is completed, however to use it as "a pro" you have to open the command line (in windows you can use the search bar and type **cmd** and enter) where you invoke the program by either going into the path where main.py is stored (known as relative path) or type in the whole path where main.py is store (known as absolute path). Here is how to do it once you are in the command line/terminal:

For absolute path you must type the next: **python.exe \<path/to/code\>/main.py \<ods\_file\> \<sheet_number\> \<JSON\_file\>**. If you are confused, you can go to where the file is and in the upper part copy the path, for example the main.py is stored in: **D:/Programs/Python/tutorial 1/code**, therefore the absolute path is **D:/Programs/Python/tutorial 1/code/main.py**. As for the rest, just like the example in tutorial 1. This means the line should be typed as:

```powershell
> python.exe "D:/Programs/Python/tutorial 1/code/main.py" "D:/Files/Balance Sheet/2024/June.ods" 1 "D:/Files/Balance Sheet/2024/June.json"
```

For a relative path, you first have to go into the folder from the command line using the command **cd** and just call **python.exe** followed by the python file name and all the arguments. Following the absolute path example you have to do this:

```powershell
> D:
> cd Programs/Python/tutorial 1/code
> python.exe "main.py" "D:/Files/Balance Sheet/2024/June.ods" 1 "D:/Files/Balance Sheet/2024/June.json"
```

In the case the relative path, you could try it from within the place where your ods file is stored and combine with absolute, for example:

```powershell
> D:
> cd Files/Balance Sheet/2024
> python.exe "D:/Programs/Python/tutorial 1/code/main.py" "June.ods" 1 "June.json"
```

Hope this helps you understand a little better the programming world and start expanding your knowledge.