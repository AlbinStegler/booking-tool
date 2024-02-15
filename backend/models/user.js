const { database, member } = require('../database/database.js');
const ObjectId = require('mongodb').ObjectId;

const db = database.getDb();

const userModel = {
    getUsers: async function getUsers(req, res) {
        try {
            const data = await member.find();
            return res.json(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    addUser: async function addUser(req, res) {
        try {
            // Assuming req.body contains the user data in the expected format
            const userData = req.body;
            console.log('User data:', userData);
            // Insert the user data into the database
            const result = await member.create(userData);

            console.log('User added:', result.insertedId);

            // Return success response
            return res.json({ message: 'User added', insertedId: result.insertedId });
        } catch (error) {
            console.error('Error adding user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    deleteUser: async function deleteUser(req, res) {
        try {
            const id = req.params.id;
            console.log('User id:', id);
            const result = await member.deleteOne({ _id: id });
            console.log('User deleted:', result.deletedCount);
            return res.json({ message: 'User deleted', deletedCount: result.deletedCount });
        } catch (error) {
            console.error('Error deleting user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getUserFromSeat: async function getUserFromSeat(req, res) {
        try {
            const seat = { "row": req.body.row, "seat": req.body.seat };
            console.log('Seat:', seat);
            const user = await member.findOne({ "seat.row": seat.row, "seat.seat": seat.seat });
            console.log('User:', user);
            if (!user) {
                return res.status(404).json({ error: 'User not found for the given seat.' });
            }
            return res.json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

};

module.exports = userModel;