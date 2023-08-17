## Django API for CSV Transformation

This repository contains the Django API and React app  that facilitates CSV transformation using rules and transformations. Users can upload CSV files, apply transformation rules, and retrieve the transformed data. The API interacts with a PostgreSQL database to store files, rules, and transformed data.

### Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/dottachin/csv-transformation.git
   cd csv-transformation-api
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Database Setup:**
   - Configure your PostgreSQL database settings in `settings.py`.
   - Run migrations:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```

4. **Run the Development Server:**
   ```bash
   python manage.py runserver
   ```

### API Endpoints

- `POST /api/upload`: Upload a CSV file.
- `POST /api/rules`: Create a new transformation rule.
- `GET /api/rules`: Retrieve a list of all transformation rules.
- `POST /api/transform`: Apply transformations to a CSV file.
- `GET /api/transformed-data`: Retrieve transformed data.

---

## CSV Transformer React App

### Installation and Setup

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm start
   ```

### Features

- Drag and drop CSV files for uploading.
- Drag and drop transformation blocks for applying rules.
- Display transformed data in a table.

### Usage

1. Drag and drop a CSV file into the designated area to upload it.
2. Drag and drop transformation blocks onto the data to apply rules.
3. View the transformed data in the table.

---
