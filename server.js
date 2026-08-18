const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// ─── DATA PATHS ───
const DATA_DIR = path.join(__dirname, 'public', 'data');
const CONTENT_FILE = path.join(DATA_DIR, 'content.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const UPLOADS_DIR = path.join(IMAGES_DIR, 'uploads');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

// ─── HELPER: read/write JSON ───
function readJSON(filepath) {
    try {
        if (!fs.existsSync(filepath)) return {};
        return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
    } catch {
        return {};
    }
}

function writeJSON(filepath, data) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 4), 'utf-8');
}

// ─── API: Content (texts) ───
app.get('/api/content', (req, res) => {
    res.json(readJSON(CONTENT_FILE));
});

app.put('/api/content', (req, res) => {
    writeJSON(CONTENT_FILE, req.body);
    res.json({ success: true, message: 'Contenu sauvegardé !' });
});

// ─── API: Settings (cover images) ───
app.get('/api/settings', (req, res) => {
    res.json(readJSON(SETTINGS_FILE));
});

app.put('/api/settings', (req, res) => {
    writeJSON(SETTINGS_FILE, req.body);
    res.json({ success: true, message: 'Paramètres sauvegardés !' });
});

// ─── API: Projects ───
app.get('/api/projects', (req, res) => {
    res.json(readJSON(PROJECTS_FILE));
});

app.put('/api/projects', (req, res) => {
    writeJSON(PROJECTS_FILE, req.body);
    res.json({ success: true, message: 'Chantiers sauvegardés !' });
});

// ─── API: Upload images ───
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext)
            .replace(/[^a-zA-Z0-9_-]/g, '_')
            .toLowerCase();
        const uniqueName = `${name}_${Date.now()}${ext}`;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
    fileFilter: (req, file, cb) => {
        const allowed = /\.(jpg|jpeg|png|gif|webp|svg)$/i;
        if (allowed.test(path.extname(file.originalname))) {
            cb(null, true);
        } else {
            cb(new Error('Format non supporté. Utilisez JPG, PNG, GIF, WEBP ou SVG.'));
        }
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Aucun fichier envoyé.' });
    }
    const publicPath = `/images/uploads/${req.file.filename}`;
    res.json({ success: true, path: publicPath, filename: req.file.filename });
});

// ─── API: List all images ───
app.get('/api/images', (req, res) => {
    const images = [];

    function scanDir(dir, urlPrefix) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory()) {
                scanDir(path.join(dir, entry.name), `${urlPrefix}/${entry.name}`);
            } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(entry.name)) {
                images.push({
                    name: entry.name,
                    path: `${urlPrefix}/${entry.name}`,
                    folder: urlPrefix.replace('/images/', '')
                });
            }
        }
    }

    scanDir(IMAGES_DIR, '/images');
    res.json(images);
});

// ─── START SERVER ───
app.listen(PORT, () => {
    console.log(`\n  🪵 Batihache CMS Server`);
    console.log(`  ─────────────────────────────`);
    console.log(`  🌐 Site:    http://localhost:${PORT}/`);
    console.log(`  ⚙️  Admin:   http://localhost:${PORT}/admin/`);
    console.log(`  ─────────────────────────────\n`);
});
