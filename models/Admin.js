const mongoose = require('mongoose');

// Same Admin collection the desktop app uses, plus license fields.
// Must stay schema-compatible with server/models/Admin.js.
const AdminSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ['super', 'sub'], default: 'sub' },
    isBlocked: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date },
    batchSize: { type: Number, default: 20 },
    accountOffset: { type: Number, default: 0 },
    accountsLimit: { type: Number, default: 0 },
    // License / kill-switch
    licenseKey: { type: String, default: '' },
    licenseExpiry: { type: Date, default: null },
    licenseStatus: { type: String, enum: ['active', 'revoked'], default: 'active' }
}, { strict: false });

module.exports = mongoose.model('Admin', AdminSchema);
