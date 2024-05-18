import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() { 
    // simulate an async call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // gets multiple rows with all()
    db.prepare('SELECT * FROM meals').all();
    // inside your server component you can call
    // const meals = await getMeals();
}

export function saveMeal(meal) { 
    // sanitize and clean the instructions
    // react complete guide Udemy
    const slug = slugify(meal.title, { lower: true });
    const instructions = xss(meal.instructions);
}