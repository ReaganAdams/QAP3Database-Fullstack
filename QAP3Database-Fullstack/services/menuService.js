const { Pool } = require('pg');
const pool = new Pool({
    user: 'yourusername',
    host: 'localhost',
    database: 'marthas_good_eats',
    password: 'yourpassword',
    port: 5432,
});

const getAllMenuItems = async () => {
    const result = await pool.query('SELECT * FROM menu_items');
    return result.rows;
};

const getMenuItemById = async (id) => {
    const result = await pool.query('SELECT * FROM menu_items WHERE id = $1', [id]);
    return result.rows[0];
};

const createMenuItem = async (item) => {
    const { name, description, price, available } = item;
    const result = await pool.query(
        'INSERT INTO menu_items (name, description, price, available) VALUES ($1, $2, $3, $4) RETURNING *',
        [name, description, price, available]
    );
    return result.rows[0];
};

const updateMenuItem = async (id, item) => {
    const { name, description, price, available } = item;
    const result = await pool.query(
        'UPDATE menu_items SET name = $1, description = $2, price = $3, available = $4 WHERE id = $5 RETURNING *',
        [name, description, price, available, id]
    );
    return result.rows[0];
};

const deleteMenuItem = async (id) => {
    const result = await pool.query('DELETE FROM menu_items WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllMenuItems,
    getMenuItemById,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
};