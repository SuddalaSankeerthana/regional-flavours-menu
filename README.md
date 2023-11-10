# Regional-flavours-menu

## Table of content

- Description
- Requirements and installations
- Usage

## Description :

- Regional flavors is a restaurant which makes delicious recipes with regional foods.
- It is an application which shows the data in an API.
- It is developed using typescript.

## Installations are requirements :

- you need to have nodeJs to be installed in your desktop.
- You are required to have docker setup. Go through [https://www.docker.com/get-started/]

## Features :
- Created an API with express to fetch everyday's recipes in the restaurant.
- Each recipe contains the following information :
  - Recipe name.
  - Type of recipe.
  - Is Vegan ?
  - Is Gluten free?

## Usage :

- Clone the repository with the following command
  ```
  git clone https://github.com/SuddalaSankeerthana/regional-flavours-menu.git
  ```
-  Navigate into the folder :
    ```
    cd regional-flavours-menu
    ```
- Run the following to build an image.
  ```
  docker build -t regional-flavours .
  ```
- Run the following command to start the server.
  ```
  docker run regional-flavours
  ```

