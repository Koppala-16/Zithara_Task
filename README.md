**Project Description:**
**1. Database Setup:**
   - Utilizes PostgreSQL as the database management system.
   - Creates a table with columns: `sno`, `customer name`, `age`, `phone`, `location`, and `created_at`.
   - Populates the table with 50 records of dummy data.

**2. Frontend (React):**
   - Develops a single-page application (SPA) using React for the user interface.
   - Displays the data from the PostgreSQL database in a table format.
   - Implements a search option allowing users to search for data based on the "name" or "location" column.
   - Implements pagination, displaying 20 records per page for a better user experience.

**3. Display of `created_at` Column:**
   - Enhances the user interface by separating the `created_at` column data into two separate columns: "date" and "time."
   - This allows for a more organized and user-friendly presentation of the timestamp data.

**4. Search Functionality:**
   - Implements a search functionality to filter data based on the "name" or "location" column.
   - Users can input search terms, and the application will dynamically filter and display matching records.

**5. Sorting Options:**
   - Provides an option to sort the displayed data either by "date" or "time."
   - Allows users to toggle between ascending and descending order for sorting.

**Technologies Used:**
   - **Frontend:** React.js
   - **Backend:** Node.js
   - **Database:** PostgreSQL
   - **Styling:** CSS for basic styling, with potential integration of additional styling libraries or frameworks.
   - **Additional Libraries:** May include libraries for pagination and sorting functionalities.

**Goals and Benefits:**
   - **User-Friendly Interface:** The single-page application offers an intuitive and user-friendly interface for efficient data interaction.
   - **Efficient Data Management:** Pagination ensures a manageable display of data, improving performance and user experience.
   - **Search and Sorting Features:** Enhance data exploration with dynamic search and sorting functionalities.
   - **Timestamp Presentation:** Improved readability with the separation of `created_at` data into "date" and "time" columns.

This project aims to deliver a robust web application that efficiently manages, displays, and interacts with data, providing users with a seamless experience.
