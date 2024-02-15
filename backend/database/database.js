const mongoose = require("mongoose");

const database = {
    getDb: async function getDb() {
        let dsn = "mongodb://localhost:27017/lan";

        await mongoose.connect(dsn, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Connected to database");
            })
            .catch((error) => {
                console.log("Couldn't connect to MongoDB: ", error);
            });




        return mongoose.connection;
    }
};

const adminSchema = new mongoose.Schema({
    "username": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
});

const admin = mongoose.model("admin", adminSchema);

// Define a schema for dynamic data
const DynamicSchema = new mongoose.Schema({}, { strict: false });

// Define a schema for the main document
const eventSchema = new mongoose.Schema({
    "eventName": {
        type: String,
        required: true
    },
    "eventDate": {
        type: Date,
        required: true
    },
    "seats": DynamicSchema,
    "active": { type: Boolean, default: false }
});

// Define a model using the schema
const event = mongoose.model('event', eventSchema);

const memberSchema = new mongoose.Schema({
    "member": {
        "firstname": {
            type: String,
            required: true
        },
        "renewed": {
            type: String,
            required: true
        },
        "lastname": {
            type: String,
            required: true
        },
        "co": [String],
        "email": {
            type: String,
            unique: true,
            required: true
        },
        "phone1": {
            type: String,
            required: true
        },
        "street": {
            type: String,
            required: true
        },
        "zip_code": {
            type: String,
            required: true
        },
        "city": {
            type: String,
            required: true
        },
        "member_nick": {
            type: String,
            unique: true,
            required: true
        }
    },
    "seat": {
        "row": String,
        "seat": String
    },
});

memberSchema.pre('save', async function (next) {
    try {
        // Check if the username already exists
        const existingEmail = await this.constructor.findOne({ 'user.email': this.member.email });
        const existingUser = await this.constructor.findOne({ 'user.username': this.member.member_nick });
        if (existingUser) {
            throw new Error("Username is already taken");
        }
        if (existingEmail) {
            throw new Error("Email is already taken");
        }
        next();
    } catch (error) {
        next(error);
    }
});

const member = mongoose.model("member", memberSchema);
module.exports = { database, member, event, admin };