---
layout: page
title: Adding More Output Formats
description: Tutorial 3
img: assets/img/Lección1.jpg
importance: 1
category: [coding]
pseudocode: true
---

JSON is a very common format and used widely in computing. However it is not the only one, for this lesson, we will be adding three new formats: CSV, YAML and TOML. At the same time there is going to be an explanation about these formats including the one used in the first lesson (JSON)

# Data formats

## 1. JSON

JSON stands for JavaScript Object Notation. A very popular format in JavaScript (JS), as the name implies, and JS being a language mainly for web development, this format is commonly used in web technologies, although it was developed for JS, it has been added to other languages with parsing tools added in their core libraries. It is described as a text structure with key-value pairs and ordered lists. By using an organized objects schema and arrays, its reading is very easy for both humans and machines. Its data types are the next:

- String: These can be words of any kind, more precisely, unicode characters with a zero or more lenght size. These have to be written by using double quotation marks and have support for backslash escaping syntax. Example: "My name is カリナ, soy de Canadá"
- Number: Any number including decimal, negative and exponent notation. Example: 42.0
- Boolean: A **true** or **false** value.
- null: An empty value.
- Array: A list combining any number and amount of data types listed above. This type has to be put inside square brackets and its values are separated by a comma. Example: ["A simple String", -108, null, true, "", ["anoter array", null, 1,2, "gato", "日"], 10.25, "email@domain.com"]
- Object: Just as a JSON object is declared by using curly brackets, inside a JSON object can also contain another JSON object. Example: {"Programming Languages": {"Python": {"Type": "Interpreted", "Level": "High", "Rating": 10, "Installed": true}},"Assembler": {"Type": "Compiled", "Level": "Low", "Rating": 9000, "Installed": false}}

Here is JSON file example:

```json
{
  "Pokemons": [
    {
      "No": 1,
      "Name": {
        "日本語": "フシギダネ",
        "Overseas": "Bulbasaur"
      },
      "Type": ["Grass", "Poison"],
      "Can Make Eggs?": true,
      "Skills": ["Tackle", "Growl", "Vine Whip", "Growth"]
    },
    {
      "No": 4,
      "Name": {
        "日本語": "ヒトカゲ",
        "Overseas": "Charmander"
      },
      "Type": ["Fire"],
      "Can Make Eggs?": true,
      "Skills": ["Scratch", "Growl", "Ember", "Smokescreen"]
    }
  ],
  "Digimons": [
    {
      "Name": {
        "日本語": "アグモン",
        "Overseas": "Agumon"
      },
      "Level": "Rookie",
      "Attribute": ["Vaccine", "Virus"],
      "Can Jogress?": false,
      "Skills": ["Baby Flame", "Sharp Claws", "Spitfire", "Agumon Dive", "Final Claw"]
    },
    {
      "Name": {
        "日本語": "メタルガルルモン",
        "Overseas": "MetalGarurumon"
      },
      "Level": "Mega",
      "Attribute": ["Data", "Vaccine"],
      "Can Jogress?": true,
      "Skills": ["Cocytus Breath", "Giga Missile", "Metal Scratch", "Metal Howling", "Grace Cross Freezer"]
    }
  ]
}
```

As shown, it is very easy to read and versatile enough to add any kind of schema.

## 2. CSV

CSV stands for Comma Separated Value. It is the simplest format of all and as the name implies, uses comma to separate a value, this means it can have any kind of data but it lacks its own kind of data types. Can be considered the first format, however it is very limited when comes to structuring data. This format is compatible with structured databases and sheet files such as excel, but for anything else requires lots of tweaking.

A file example is:
```csv
No,Name,Type,Skills,Eggs
1,Bulbasaur,Grass-Posion,Tackle|Growl|Vine Whip|Growth,yes
4,Carhmander,Fire,Scratch|Growl|Ember|Smokescreen,yes
```

In the example as can be seen, the first line is the column names, each one separated with a comma, the next lines or rows are the data, however to work with multiple values, some symbols such as **-** and **\|** were used. Of course white spaces can be used in CSV files. However as noticed, in case more complex data is used, like shown in the JSON example with more variety in type of data (both pokemon and digimon in a single file) there is no direct approach, it could be possible using multiple files but when multiple values in a single column are stored, it would require to add parsing methods.

## 3. YAML

This one has some nuances on its name origin, originally stands for Yet Another Mark-up Language, but after some changes to make it a data structure or serialization instead a document mark-up, it now stands for YAML Ain't Markup Language.

Its structure is more open than JSON and has some extra features such as comments which can be used to add a description or explanation aimed at developers. It has the same data types as JSON, and like Python, those can be interpreted by YAML itself. Another note is that like python, identation is important to help the parsing process.

```yaml
---
Pokemons:
  - No: 1 #Based on national dex
    Name:
      日本語: フシギダネ
      Overseas: Bulbasaur
    Type: #At least one, max two
      - Grass
      - Poison
    Can Make Eggs: true
    Skills:
      - Tackle
      - Growl
      - Vine Whip
      - Growth
  - No: 4
    Name:
      日本語: ヒトカゲ
      Overseas: Charmander
    Type:
      - Fire
    Can Make Eggs: true
    Skills: [Scratch, Growl, Ember, Smokescreen]

---
# Attributes: [Vaccine | Virus | Data]
# Levels: [Fresh | In-Training | Rookie | Champion | Ultimate | Mega]
Digimons:
  - Name:
      日本語: アグモン
      Overseas: Agumon
    Level: Rookie
    Attribute:
      - Vaccine
      - Virus
    Can Jogress: false
    Skills: [Baby Flame, Sharp Claws, Spitfire, Agumon Dive, Final Claw]
  - Name:
      日本語: メタルガルルモン
      Overseas: MetalGarurumon
    Level: Mega
    Attribute:
      - Data
      - Vaccine
    Can Jogress: true
    Skills:
      - Cocytus Breath
      - Giga Missile
      - Metal Scratch
      - Metal Howling
      - Grace Cross Freezer
```

The example above is based on the JSON example. It is notable how flexible YAML format is as shown in the skills where it can be listed in a vertical or horizontal manner. Also how the **#** symbol can be used to add comments which can help understand or even hide from the parser a line text. In this example the comments are used to indicate the possible values the attribute field can have.

For that reason this format is very popular in development environments and can be seen in containers or templates for Architecture as a Service (AaaS).

For a much better and complete knowledge about this, there is the official [reference](https://yaml.org/refcard.html)

## 4. TOML

This is the most recent among the four, and stands for Tom's Obvious, Minimal Language. Its syntax can be very familiar to YAML, and has the same data types as JSON, as well includes comments. Its most common usages are in web for the called static site generators and some programming languages such as Rust.

Here is an example using the same data used in the entire lesson.

```toml
[[Pokemons]]
No = 1
Name.日本語 = "フシギダネ"
Name.Overseas = "Bulbasaur"
Type = ["Grass", "Poison"]
"CanMakeEggs" = true
Skills = ["Tackle", 
  "Growl", 
  "Vine Whip", 
  "Growth"
]

[[Pokemons]]
No = 4
Name.日本語 = "ヒトカゲ"
Name.Overseas = "Charmander"
Type = ["Fire"]
Can_Make_Eggs = true
Skills = ["Scratch", "Growl", "Ember", "Smokescreen"]

# Attributes: [Vaccine | Virus | Data]
# Levels: [Fresh | In-Training | Rookie | Champion | Ultimate | Mega]
[[Digimons]]
Name.日本語 = "アグモン"
Name.Overseas = "Agumon"
Level = "Rookie"
Attribute = ["Vaccine", "Virus"]
CanJogress = false
Skills = ["Baby Flame", "Sharp Claws", "Spitfire", "Agumon Dive", "Final Claw"]

[[Digimons]]
Name.日本語 = "メタルガルルモン"
Name.Overseas = "MetalGarurumon"
Level = "Mega"
Attribute = ["Data", "Vaccine"]
'Can Jogress' = true
Skills = ["Cocytus Breath", "Giga Missile", "Metal Scratch", "Metal Howling", "Grace Cross Freezer"]
```

As shown above, it has a lot of flexibility. For example the keys can be with or without quotes, with quotes allowing for white spaces. Using the dot notation allows to group elements as a table as shown with Name. 

TOML has a lot of features, which is condireded both a strong and a weak point. To know more, there is its official [reference site](https://toml.io/en/v1.0.0)

Final note: the provided examples are shown to get an idea how they are used, and obviously are not employing full features nor follow good practices. Such as being consistent with the structure and follow a good identation.

# Adding the functions to the project

## 1. CSV

The most simple format, it can be done by adding the next function in **functions.py**:

```python
def save_CSV_file(table: List[List[Any]], CSV_path: str):
    """
    Saves data in CSV file.
    Args:
    table (List[List[Any]]): Table with data.
    CSV_path (str): Path and file name for JSON.
    """
    try:
        with open(CSV_path, 'w', encoding='utf-8') as csv_file:
            csv_file.write(','.join(table[0]) + '\n')
            i = 1
            for row in table[1:]:
                csv_file.write(",".join(str(cell) for cell in row) + "\n")
        print(f"Data saved successfuly in: {CSV_path}")
    except Exception as e:
        print(f"Error while saving: {e}")
```

## 2. YAML

```python
def save_YAML_file(table: List[List[Any]], YAML_file: str):
    """
    Saves data in YAML file.
    Args:
    table (List[List[Any]]): Table with data.
    YAML_file (str): Path and file name for YAML.
    """
    if not table:
        print("Error: Empty table")
        return
    headings = table[0]
    data = []
    for row in table[1:]:
        datum = {heading: value for heading, value in zip(headings, row)}
        data.append(datum)
    try:
        with open(YAML_file, 'w', encoding='utf-8') as f:
            yaml.safe_dump(data, f, allow_unicode=True, sort_keys=False, indent=4)
        print(f"Data saved successfully in: {YAML_file}")
    except Exception as e:
        print(f"Error while saving: {str(e)}")
```

## 3. TOML

```python
def save_TOML_file(table: List[List[Any]], TOML_file: str):
    """
    Saves data in TOML file.
    Args:
    table (List[List[Any]]): Table with data.
    TOML_file (str): Path and file name for TOML.
    """
    if not table:
        print("Error: Empty table")
        return
    
    headings = table[0]
    data = {"data": []}  # TOML requires a top-level table
    for row in table[1:]:
        datum = {heading: value for heading, value in zip(headings, row)}
        data["data"].append(datum)
    try:
        with open(TOML_file, 'w', encoding='utf-8') as f:
            toml.dump(data, f)
        print(f"Data saved successfully in: {TOML_file}")
    except Exception as e:
        print(f"Error while saving: {str(e)}")
```

## 4. Modify importing lines
Don't forget to add the newly added function when importing:

**main.py**
```python
"""
// Code from previous lessons
"""
from functions import read_ods_file, get_sheet_data, save_JSON_file, save_CSV_file, save_YAML_file, save_TOML_file, print_table
"""
// Code from previous lessons
"""
```

**__init__.py**
```python
from .functions import read_ods_file, get_sheet_data, print_table, save_JSON_file, save_CSV_file, save_YAML_file, save_TOML_file
from .config_utils import load_config

__all__ = [
    'read_ods_file',
    'get_sheet_data',
    'save_JSON_file',
    'save_CSV_file',
    'save_YAML_file',
    'save_TOML_file',
    'print_table'
    'load_config'
]
```

If following the lessons, the configuartion file also needs to be modified:
**config.json**
```python
{
    "ods_file": "<path_to_ods>.ods",
    "sheet_number": 1,
    "JSON_file": "<path_json>.json"
    "CSV_file": "<path_json>.csv"
    "YAML_file": "<path_json>.yaml"
    "TOML_file": "<path_json>.toml"
}
```

Now, whenever you need to save data in a specified format, simply add the corresponding function when calling it in the main function.

This concludes this lesson. With this knowledge, you now have a program that reads an ODS file and stores the data as JSON, CSV, YAML, and/or TOML. However, there are opportunities for improvement.

You may encounter some errors when trying to save data in a JSON file. This is likely because the code does not thoroughly check data types or apply data type conversions. As such, figuring out how to fix these issues could serve as a valuable exercise. In future lessons, we will introduce new concepts that may lead to significant changes in the code to reflect these ideas.