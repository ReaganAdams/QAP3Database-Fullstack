const express = require('express');
const router = express.Router();
const { getAllMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem } = require('../../services/menuService');

// GET all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await getAllMenuItems();
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a single menu item by ID
router.get('/:id', async (req, res) => {
    try {
        const menuItem = await getMenuItemById(req.params.id);
        if (menuItem) {
            res.json(menuItem);
        } else {
            res.status(404).json({ error: 'Menu item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new menu item
router.post('/', async (req, res) => {
    try {
        const { name, description, price, available } = req.body;
        const newItem = await createMenuItem({ name, description, price, available });
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT update a menu item
router.put('/:id', async (req, res) => {
    try {
        const { name, description, price, available } = req.body;
        const updatedItem = await updateMenuItem(req.params.id, { name, description, price, available });
        if (updatedItem) {
            res.json(updatedItem);
        } else {
            res.status(404).json({ error: 'Menu item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a menu item
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await deleteMenuItem(req.params.id);
        if (deletedItem) {
            res.json({ message: 'Menu item deleted' });
        } else {
            res.status(404).json({ error: 'Menu item not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;