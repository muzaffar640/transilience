# [Transilience AI Dashboard](https://transilience.vercel.app/)

## Overview

Transilience AI Dashboard is a web application designed to visualize vendor advisory data, including advisory counts, advisories by vendor and technology, severity, Mitre attack tactics, attack vectors, and threat vectors. The dashboard is built with Next.js, React, and Tailwind CSS, and uses Chart.js for data visualization.

## Features

- **Monthly Advisory Count:** Line chart displaying the number of advisories published each month.
- **Advisory by Vendor and Technology:** Doughnut chart showing the number of advisories by vendor and technology.
- **Count of Advisories by Technology:** Pie chart displaying the number of advisories by technology.
- **Advisory by Severity and Mitre Attack Tactic:** Vertical bar chart representing advisories by severity and Mitre attack tactic.
- **Advisory by Attack Vector:** Horizontal bar chart illustrating advisories by attack vector.
- **Advisory by Threat Vector:** Horizontal bar chart showcasing advisories by threat vector.

## Technologies Used

- **Next.js:** Framework for server-rendered React applications.
- **React:** JavaScript library for building user interfaces.
- **Serverless Next Function:** Creation of serverless handler funtion to send data.
- **TypeScript:** Superset of JavaScript that adds static typing.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Chart.js:** JavaScript library for creating charts.
- **CSVtoJSON:** Node.js library to convert CSV files to JSON format.

## Setup and Installation

### Prerequisites

- Node.js (v18.17.0 or later)
- npm or yarn
- A running server to serve the `vendor_advisories.csv` file

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/transilience-ai-dashboard.git
   ```

2. Install dependencies:

   ```bash
    npm install
    # or
    yarn install
   ```

3. Create a `.env` file in the root directory and add the following environment variable:

   ```bash
    NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

## API

The application fetches data from a serverless API endpoint. The endpoint reads a vendor_advisories.csv file and converts it to JSON format.

## API Endpoint

- /api/vendorsData: Returns the JSON data from the vendor_advisories.csv file.
