import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Resolve directory paths
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', join(__dirname, '..', 'views'));


// Routes
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.post('/greet', (req, res) => {
    const name = req.body.name;
    const quotes ="You have gripped my soul with a ferocity reserved for a castaway clinging to a raft in the middle of the ocean. If my soul is the raft, it is your hold that keeps me afloat. Don't ever let go. I love you";
    if (name) {
            res.render('card', { name ,quotes});
    } else {
        // Redirect to the GET route instead of sending the file again
        res.redirect('/');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
