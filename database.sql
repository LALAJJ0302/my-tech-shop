
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    tech_stack VARCHAR(255),
    image_url TEXT,
    github_url TEXT,
    price DECIMAL(10,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

SET SQL_SAFE_UPDATES = 0;
DELETE FROM projects;
INSERT INTO projects (title, description, category, tech_stack, github_url, price) VALUES
('Portfolio Website', 'Personal portfolio built with React and Node.js', 'Software', 'React, Node.js, CSS', 'https://github.com/jj', 0),
('Data Dashboard', 'Sales analytics dashboard with charts', 'Data', 'Python, Pandas, Matplotlib', 'https://github.com/jj', 0),
('iOS Weather App', 'Weather app built with Swift', 'iOS App', 'Swift, Xcode, WeatherAPI', 'https://github.com/jj', 0);