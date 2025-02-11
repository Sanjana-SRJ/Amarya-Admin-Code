import axios from 'axios';
import { useAuth } from './AuthContext';

const apiUrl = process.env.REACT_APP_API_URL;
const {encryptionKey} = useAuth();
export const fetchProjects = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/project/fetch-all-projects` , {
          credentials: 'include', // Include cookies in the request
          headers : {
            "x-encryption-key" : encryptionKey
          }
        }
      );
      const data = await response.json();
      if (data.success) {
        const projectOptions = data.data.map(({ _id, project }) => ({
          _id, // Keep _id separate
          value: project, // Use the label as the value displayed to the user
          label: project,
        }));
         return projectOptions;
      } else {
        console.error("Failed to fetch projects:", data.message);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  export const fetchTeams = async () => {
    try {
      const response = await fetch(`${apiUrl}/team/fetch-all-teams` , {
        credentials: 'include', // Include cookies in the request
        headers : {
          "x-encryption-key" : encryptionKey
        }
      });
      const data = await response.json();
      if (data.success) {
        const teamOptions = data.data.map(({ _id, team }) => ({
          _id, // Keep _id separate
          value: team, // Use the label as the value displayed to the user
          label: team,
        }));
        return teamOptions
      } else {
        console.error("Failed to fetch teams:", data.message);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };
export  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/category/fetch-all-categories` , {
          credentials: 'include', // Include cookies in the request
          headers : {
            "x-encryption-key" : encryptionKey
          }
        }
      );
      const data = await response.json();
      if (data.success) {
        const categoryOptions = data.data.map(({ _id, category }) => ({
          _id, // Keep _id separate
          value: category, // Use the label as the value displayed to the user
          label: category,
        })); 
        return categoryOptions;
      } else {
        console.error("Failed to fetch categories:", data.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  export const fetchSkills = async () => {
    try {
      const response = await fetch(`${apiUrl}/skillset/fetch-skills` , {
        credentials: 'include', // Include cookies in the request
        headers : {
          "x-encryption-key" : encryptionKey
        }
      });
      const data = await response.json();
      if (data.success) {
        const skillOptions = data.data.map(({ _id, skill }) => ({
          _id, // Keep _id separate
          value: skill, // Use the label as the value displayed to the user
          label: skill,
        }));
        return skillOptions;
      } else {
        console.error("Failed to fetch skills:", data.message);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };