# JSONPlaceholder API Documentation

This repository contains the OpenAPI specifications and HTML documentation for the JSONPlaceholder API, which includes endpoints for managing users, posts, and comments.

## Table of Contents

- [JSONPlaceholder API Documentation](#jsonplaceholder-api-documentation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [API Specifications](#api-specifications)
    - [Users API](#users-api)
    - [Posts API](#posts-api)
    - [Comments API](#comments-api)
  - [HTML Documentation](#html-documentation)
    - [Index Page](#index-page)
    - [Users API Documentation](#users-api-documentation)
    - [Posts API Documentation](#posts-api-documentation)
    - [Comments API Documentation](#comments-api-documentation)
  - [Setup](#setup)
  - [License](#license)

## Overview

This repository provides the OpenAPI specifications for the JSONPlaceholder API, which is a fake online REST API for testing and prototyping. The API includes endpoints for managing users, posts, and comments. Additionally, the repository includes HTML files for rendering the API documentation using Swagger UI.

## API Specifications

### Users API

The `users/openapi.yml` file contains the OpenAPI specification for the Users API. It includes endpoints for creating, retrieving, updating, and deleting users.

### Posts API

The `posts/openapi.yml` file contains the OpenAPI specification for the Posts API. It includes endpoints for creating, retrieving, updating, and deleting posts.

### Comments API

The `comments/openapi.yml` file contains the OpenAPI specification for the Comments API. It includes endpoints for creating, retrieving, updating, and deleting comments.

## HTML Documentation

### Index Page

The `index.html` file serves as the main entry point for the API documentation. It provides links to the individual API documentation pages for users, posts, and comments.

### Users API Documentation

The `users/index.html` file contains the HTML documentation for the Users API. It uses Swagger UI to render the OpenAPI specification.

### Posts API Documentation

The `posts/index.html` file contains the HTML documentation for the Posts API. It uses Swagger UI to render the OpenAPI specification.

### Comments API Documentation

The `comments/index.html` file contains the HTML documentation for the Comments API. It uses Swagger UI to render the OpenAPI specification.

## Setup

To view the API documentation locally, follow these steps:

1. Install `http-server` globally using npm:

   ```sh
   npm install -g http-server
   ```

2. Run `http-server` in the project root directory:

   ```sh
   http-server
   ```

3. Open your web browser and navigate to the provided local server address (e.g., `http://localhost:8080`) to access the main documentation page.

4. Navigate to the individual API documentation pages for users, posts, and comments by clicking the respective links.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
